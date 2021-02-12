import React from 'react';


const Card = (props) => {
  const requestImage = require.context("../assets/img", true);
  
  let image = requestImage(`./${props.info.pic}.png`).default;
  let nhl = requestImage(`./nhl.png`).default;

  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <button 
            onClick={()=>props.clicked(props.info.idx)}>
            <img src={image}></img>
            {props.info.team}
          </button>
        </div>
        <div className='flip-card-back'>
          <img src={nhl}></img>
        </div>
      </div>
    </div>
    )
  }

export default Card