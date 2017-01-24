var React = require('react');

var WeatherDisplay = ({name, location}) => {
  return (
      <h3 className="text-center">{location} is {name}</h3>
  )
}

module.exports = WeatherDisplay;
