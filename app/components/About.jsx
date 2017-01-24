var React = require('react');

var About = React.createClass({
  render: function(){
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>tools used for this site</p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - Javascript framework
        </li>
        <li>
          <a href="https://pokeapi.co/">Pokemon API</a> - Open API used for retrieve pokemon infomation
        </li>
      </ol>
    </div>
  )}
});

module.exports = About;
