import React from 'react';
import moment from 'moment';
import './styles.css'

const Break = (props)=> {
  const { breakLength, handleDecreaseBreak, handleIncreaseBreak } = props;

  const converseMinutes = moment.duration(breakLength, 's').minutes()

  return (
    <div role="main" className="break-container">
    <p>{converseMinutes}</p>
    <button onClick={handleDecreaseBreak}>-</button>
    <button onClick={handleIncreaseBreak}>+</button>
    </div>
  )
}

export default Break;