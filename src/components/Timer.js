import React, { useState} from 'react'

const Timer = ({ time }) => {
  const [timerOn, setTimerOn] = useState(false)
  const [timerMinutes, setTimerMinutes] = useState(time)
  const [timerSeconds, setTimerSeconds] = useState('00')

  let Interval

  const startButton = () => {
    clearInterval(Interval)
    Interval = setInterval(startTimer, 1000)
    setTimerOn(true)
  }

  const startTimer = () => {
    if (timerSeconds === 0 || timerSeconds === '00') {
      setTimerMinutes((timerMinutes - 1))
      setTimerSeconds(59)
    } else if (timerSeconds <= 9){
      setTimerSeconds('0' + timerSeconds)
    }
    setTimerSeconds(timerSeconds - 1)
  }

  const pauseTimer = () => {
    setTimerOn(false)
  }

  const addTime = () => {
    console.log(timerMinutes)
    setTimerMinutes((timerMinutes + 3))
  }

  return (
    <div className="timer">
      {timerOn ? 
        <div className="pause-btn" onClick={pauseTimer} >pause</div>
        :
        <div className="start-btn" onClick={startButton} >start</div>
      }
      <div className="time-display">{timerMinutes}:{timerSeconds} </div>
      <div className="add-time" onClick={addTime}>+</div>
    </div>
  )
}

export default Timer
