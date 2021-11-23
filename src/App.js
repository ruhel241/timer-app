import React  from 'react'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startAction: true
    };
  }

  render() {
    // const countDown;
    var sec = 1800;

    const countDownStart = () => {
      this.setState({
        startAction: false
      })

      this.countDown = setInterval(function () {
          var min = Math.floor(sec / 60);
          var remSec  = sec % 60;
            
            if (remSec < 10) {
              remSec = '0' + remSec;
            }
            if (min < 10) {
              min = '0' + min;
            }

            document.getElementById("timer").innerHTML = min + ":" + remSec;
            
            if (sec > 0) {
                sec = sec - 1;
            } else {
              clearInterval(this.countDown);
              document.getElementById("timer").innerHTML = 'Your Lunch Break Is Finished';
            }
      }, 1000);
    }
    
    // const countDownPause = () => {
    //   clearInterval(this.countDown);
    // }
    
    const countDownReset = () => {
      clearInterval(this.countDown);
      document.getElementById("timer").innerHTML = 30 + ":" + 0+0;
      
      this.setState({
        startAction: true
      })
    }

    return (
      <div className="App">
        <article className="clock">
          <h3>Lunch Break Timer <br/> Apps</h3>
          <div className="count">
            <div id="timer">30:00</div>
          </div>
          {this.state.startAction && (
           <button className="button" onClick={countDownStart}>Start</button>
          )}
          {/* <button onClick={countDownPause}>Pause</button> &nbsp; */}
          {!this.state.startAction && (
            <button className="button button1" onClick={countDownReset}>Reset</button>
          )} 
        </article>
    </div>
    )
  }
} 
export default App;
