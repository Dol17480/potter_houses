var React = require('react');
var CharacterSelector = require('../components/CharacterSelector');
var CharacterDetail = require('../components/CharacterDetail');

var CharacterContainer = React.createClass({
  getInitialState: function () {
    return { characters: [],
    focusCharacter: null 
  };
  },
componentDidMount: function () {
  var url = "http://hp-api.herokuapp.com/api/characters";
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function (){
    var data = JSON.parse(request.responseText);
  this.setState({
    characters: data, 
    focusCharacter: data[0]
  });
  }.bind(this);
  request.send(null);
},
  render: function () {
    return (
      <div>
        <h2>Potter Characters</h2>
        <CharacterSelector 
        characters={this.state.characters}
        selectCharacter={this.setFocusCharacter}
        />
        <CharacterDetail 
        character={this.state.focusCharacter}
        />
      </div>
    );
  },
  setFocusCharacter: function (character) {
    this.setState({focusCharacter: character})
  }
});

module.exports = CharacterContainer;
