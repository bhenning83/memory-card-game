import React, { useEffect, useState } from 'react';
import Card from './Card';
import Data from './Data'

function Board() {
  const [prevGuess, setPrevGuess] = useState([]);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState(Data())


  
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
    if (streak > highScore) {
      setHighScore(streak);
    }
    setStreak(0);
    setPrevGuess([]);
  }

  const clicked = (idx) => {
    if (prevGuess.includes(idx)) {
      loser() 
    } else {
      setPrevGuess(prevGuess.concat(idx))
      setStreak(streak + 1);
    } 
  }

  useEffect(() => {
    shuffle(cards);
    if (streak > highScore) {
      setHighScore(streak);
    }
  }, [prevGuess])

  shuffle(cards);

  return (
    <div>
      <div>
        High score: {highScore}
      </div>
      <div>
        Current Streak: {streak}
      </div>
      <div>
        {cards.map((value, idx) => {
          return <Card key={idx} info={value} clicked={clicked} />
        })}
      </div>
    </div>
  );
}

export default Board;
