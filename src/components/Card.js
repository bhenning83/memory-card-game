import React from 'react';


const Card = (props) => {
  const requestImage = require.context("../assets/img", true);
  
  let image = requestImage(`./${props.info.pic}.png`).default

  return (
    // <div>
    //   <button 
    //     onClick={()=>props.clicked(props.info.idx)}>
    //     <img src={props.info.pic}></img>
    //     {props.info.team}
    //   </button>
    // </div>
    <img src={image}></img>
    )
  }

export default Card