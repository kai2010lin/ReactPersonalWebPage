var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherDisplay = require('WeatherDisplay');
var PokemonAPI = require('PokemonAPI');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading : false,
      ErrorMessage: undefined,
      location: 'default_location',
      name: 'default_name'
    }
  },
  handleSearch: function(location){
    //this.setState({
    //    location : location,
    //    name: 'balala'
    //});
    this.setState({
      isLoading: true,
      ErrorMessage: undefined,
      location: undefined,
      name: undefined
    });
    var that = this;
    PokemonAPI.getName(location).then(function(name){
      that.setState({
        isLoading : false,
        location : location,
        name: name
      })
    }, function(e){
      that.setState({
        ErrorMessage: e.message,
        isLoading : false
      })
    });
  },
  componentDidMount: function(){
      var number = this.props.location.query.number;

      if(number&&number.length>0)
      {
        this.handleSearch(number);
        window.location.hash = "#/";
      }
  },
  componentWillReceiveProps: function(newProps){
    var number = newProps.location.query.number;

    if(number&&number.length>0)
    {
      this.handleSearch(number);
      window.location.hash = "#/";
    }
  },
  render: function () {
    var {ErrorMessage, isLoading, name, location} = this.state;

    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching Data.....</h3>;
      }
      else if(name&&location){
        return <WeatherDisplay name={name} location={location}/>;
      }
    }

    function renderError(){
      if (typeof(ErrorMessage) === 'string'){
        return <ErrorModal errorMessage={ErrorMessage}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Pokemon</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
