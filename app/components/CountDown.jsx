var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');
var Controls = require('Controls');

var CountDown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started' :
              this.startTimer();
            break;
        case 'stopped':
              this.setState({count:0});
        case 'paused':
              clearInterval(this.timer);
              this.timer = undefined;
              break;

      }
    }
  },

  componentWillUpdate: function(nextProps, nextState) {

  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount ===0){
        this.setState({countdownStatus:'stopped'})
      }
    }, 1000);
  },
  handleSetCountDown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
  },

  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    })
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  componentWillMount: function () {
    console.log("component will mount");
  },
  componentDidMount: function() {
    console.log("componetDidMount")
  },
  render: function(){
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if(countdownStatus !== 'stopped')
      {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountDownForm onSetCountDown={this.handleSetCountDown}/>
      }
    };
    return (
      <div>
        <h1 className="page-title">Count Down App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = CountDown;
