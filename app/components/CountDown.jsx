var React = require('react');
var Clock = require('Clock');

var CountDown = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Count down</h1>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});

module.exports = CountDown;
