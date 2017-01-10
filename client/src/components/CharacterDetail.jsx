var React = require('react');

var CharacterDetail = function (props) {
  if (!props.character) {
    return <h4>No character selected</h4>
  }
  return (
   <div className='character-detail'>
   <a href={props.character.name}>{props.character.name}</a>
   <p>
   <a href={props.character.house}>{props.character.house}</a>
   </p>
   <img src={props.character.image}/>
   </div>
  );
};

module.exports = CharacterDetail;
