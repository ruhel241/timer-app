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
   
    const countDownStart = () => {
      this.setState({
        startAction: false
      })
      
      var added30Min = new Date().getTime() + (30*60*1000);

      this.countDown =  setInterval( () => {
          const startTime = new Date().getTime();
          const timeleft = added30Min - startTime;
          
          const minutes = Math.floor((timeleft  / (1000 * 60)));
          const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
              
          // Result is output to the specific element
          document.getElementById("timer").innerHTML = minutes + ":" + seconds
          
            if (timeleft < 0) {
              clearInterval(this.countDown);
              document.getElementById("timer").innerHTML = 'Your Lunch Break Is Over';
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
