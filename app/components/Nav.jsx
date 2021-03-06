var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
                <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link">Countdown</ Link>
            </li>

          </ul>
        </div>
        <div className="top-bar-right">
          <p className="menu-text">Created by <a href="http://www.basicgaming.com.au" target="_blank">Andrew Day</a></p>
        </div>
      </div>
    );
  }
})

module.exports = Nav;
