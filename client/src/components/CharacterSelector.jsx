var React = require('react');

var CharacterSelector = React.createClass({
  getInitialState: function () {
    return { selectedIndex: undefined };
  },
  render: function () {
    var options = this.props.characters.map(function (character, index) {

      return (<option value={index} key={index}>{character.name}</option>);
    });
    return (
      <select 
      id="characters" 
      value={this.state.selectedIndex}
      onChange={this.handleChange}
      >
        {options}
      </select>
    );
  },
  handleChange: function (event) {
    var newIndex = parseInt(event.target.value);
    this.setState({selectedIndex: newIndex});
    var character = this.props.characters[newIndex];
    this.props.selectCharacter(character);
  }
});

module.exports = CharacterSelector;

