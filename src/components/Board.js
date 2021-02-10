import React, { useEffect, useState } from 'react';
import Card from './Card';

function Board() {
  const [prevGuess, setPrevGuess] = useState();
  const [streak, setStreak] = useState(0);
  const [cards, setCards] = useState([
    {
      num: 1,
      idx: 0
    },
    {
      num: 2,
      idx: 1
    },
    {
      num: 3,
      idx: 2
    },
    {
      num: 4,
      idx: 3
    },
    {
      num: 5,
      idx: 4
    },
  ])


  
  const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  const loser = () => {
    setStreak(0);
    setPrevGuess();
  }

  const clicked = (idx) => {
    if (idx === prevGuess) {
      loser() 
    } else {
      setPrevGuess(idx)
      setStreak(streak + 1);
    } 
  }

  useEffect(() => {
    shuffle(cards);
  }, [prevGuess])

  shuffle(cards);
  console.log(streak)

  return (
    <div>
      {cards.map((value, idx) => {
        return <Card key={idx} info={value} clicked={clicked} />
      })}
    </div>
  );
}

export default Board;
