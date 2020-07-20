import React from 'react';
import moment from 'moment';

const Session = (props)=> {
  const { sessionLength, handleDecrease, handleIncrease } = props;
  
  const converseMinutes = moment.duration(sessionLength, 's').minutes()

  return (
    <>
    <p>{converseMinutes}</p>
    <button onClick={handleDecrease}>-</button>
    <button onClick={handleIncrease}>+</button>
    </>
  )
}

export default Session;