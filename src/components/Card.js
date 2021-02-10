import React from 'react';

const Card = (props) => {

  return (
    <div>
      <button onClick={()=>props.clicked(props.info.idx)}>{props.info.num}</button>
    </div>
  )
}

export default Card