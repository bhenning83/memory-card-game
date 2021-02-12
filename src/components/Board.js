import React, { useEffect, useState } from 'react';
import Card from './Card';
import Data from './Data'

function Board() {
  const [prevGuess, setPrevGuess] = useState([]);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState(Data());
  let liveCards = [];
  
  const shuffle = () => {
    let copy = [...cards]
    let currentIndex = copy.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = copy[currentIndex];
      copy[currentIndex] = copy[randomIndex];
      copy[randomIndex] = temporaryValue;
    }
  
    return copy;
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
      setPrevGuess(prevGuess.concat(idx));
      setStreak(streak + 1);
    } 
  }

  useEffect(() => {
    if (streak > highScore) {
      setHighScore(streak);
    }
  })

  useEffect(() => {
    let timer = null
    let timer2 = null
    const kards = document.querySelectorAll('.flip-card')
 
    if (prevGuess.length > 0) {
      timer = setTimeout(() => {
        setCards(shuffle())
      }, 1000)
      kards.forEach(kard => {
        kard.classList.add('active');
      })
      timer2 = setTimeout(() => {
        kards.forEach(kard => {
          kard.classList.remove('active')
        })
      }, 1000)
    }

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [prevGuess])

  liveCards = cards.slice(0, 4);

  return (
    <div>
      <div className='cards-box'>
        {liveCards.map((value, idx) => {
          return <Card key={idx} info={value} clicked={clicked} />
        })}
      </div>
      <div className='score-box'>
        <div>
          High score: {highScore}
        </div>
        <div>
          Current Streak: {streak}
        </div>
      </div>
    </div>
  );
}

export default Board;
