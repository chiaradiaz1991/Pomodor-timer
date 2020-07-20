import React, { useState } from 'react';
import './App.css';
import Pomodoro from './Components/Pomodoro/Pomodoro';
import Break from './Components/Break/Break';
import Session from './Components/Session/Session';

const App = () => {
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);

  const handleDecreaseBreak = () => {
    const newBreak = breakLength - 60;

    if (newBreak < 0) {
      setBreakLength(0)
    } else {
      setBreakLength(newBreak)
    }
  };

  const handleIncreaseBreak = () => {
    setBreakLength(breakLength + 60);
  };

  const handleDecrease = () => {
    const newSession = sessionLength - 60;

    if (newSession < 0) {
      setSessionLength(0)
    } else {
      setSessionLength(newSession)
    }
  };

  const handleIncrease = () => {
    setSessionLength(sessionLength + 60);
  };

  return (
    <div className="App">
      <div role="main" className="main-container">
        <Break
          breakLength={breakLength}
          handleDecreaseBreak={handleDecreaseBreak}
          handleIncreaseBreak={handleIncreaseBreak}
        />
        <Pomodoro
          sessionLength={sessionLength}
          breakLength={breakLength}
        />
        <Session
          sessionLength={sessionLength}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
      </div>
    </div>
  );
}

export default App;
