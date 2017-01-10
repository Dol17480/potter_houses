var React = require('react');

var CharacterDetail = function (props) {
  if (!props.character) {
    return <h4>No character selected</h4>
  }
  return (
   <div className='character-detail'>
   <h4>{props.character.name}</h4>
   <p>House: {props.character.house}</p>
   <p>Species: {props.character.species}</p>
   <img src={props.character.image}/>
   </div>
  );
};

module.exports = CharacterDetail;
