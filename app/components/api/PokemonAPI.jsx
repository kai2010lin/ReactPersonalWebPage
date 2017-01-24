var React = require('react');
var axios = require('axios');

const OPEN_POKEMON_URL = 'http://pokeapi.co/api/v2/pokemon/';

module.exports = {
  getName : function(number){
      var encodeLocation = encodeURIComponent(number);
      var requestURL = `${OPEN_POKEMON_URL}${number}/`;

      return axios.get(requestURL).then(function(res){
        if(res.data.cod && res.data.message){
          throw new Error(res.data.message);
        }
        else{
          return res.data.name;
        }
      }, function(err){
        //throw new Error(err.response.data.message);
        throw new Error("Unable to fetch the Pokemon you requested");
      })
  }
}
