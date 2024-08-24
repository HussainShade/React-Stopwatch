import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timeInSeconds: 0,
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  runClock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  startButton = () => {
    this.timerId = setInterval(this.runClock, 1000)
  }

  stopButton = () => {
    clearInterval(this.timerId)
  }

  restartButton = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timerId)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    const displayTime = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="box-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-image"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="timer">{displayTime}</h1>
          <div className="btn-container">
            <button
              type="button"
              className="button start-btn"
              onClick={this.startButton}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop-btn"
              onClick={this.stopButton}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset-btn"
              onClick={this.restartButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
