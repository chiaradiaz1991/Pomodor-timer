import React, { useState, useEffect } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment)

const Pomodoro = ({ sessionLength, breakLength }) => {
  const [currenSession, setCurrentSesion] = useState('Session')
  const [time, setTime] = useState(sessionLength);
  const [id, setId] = useState(null);

  const pomodoroStarted = id !== null;

  useEffect(() => {
    setTime(sessionLength)
  }, [sessionLength])

  const formattedTime = moment.duration(time, 's').format('mm:ss', { trim: false })

  const handleStart = () => {
    if (pomodoroStarted) {
      clearInterval(id)
      setId(null)
    } else {
      const newId = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime - 1;
          if (newTime >= 0) {
            return prevTime - 1
          }
          if (currenSession === 'Session') {
            setCurrentSesion('Break')
            setTime(breakLength)
          } else if (currenSession === 'Break') {
            setCurrentSesion('Session')
            setTime(sessionLength)
          }
        })
      }, 1000);
      setId(newId)
    }
  }

  return (
    <div>
      <p>{currenSession}</p>
      <p>Time left: {formattedTime} </p>
      <button onClick={handleStart}>{pomodoroStarted ? "Stop" : "Start"}</button>
    </div>
  )
}

export default Pomodoro;