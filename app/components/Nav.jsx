var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(event){
    event.preventDefault();
    var number = this.refs.search.value;
    if(number.length>0)
    {
      this.refs.search.value = "";
      window.location.hash = "#/?number=" + number;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="Menu-text">
              Pokemon App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
                  <li><input ref="search" type="search" placeholder="Enter a number from 1-555"/></li>
                  <li><input type="submit" className="button" value="get Pokemon"/></li>
                </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
