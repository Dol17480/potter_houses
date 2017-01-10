var React = require('react');
var ReactDOM = require('react-dom');

var HouseContainer = require('./containers/HouseContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <HouseContainer />,
    document.getElementById('app')
  );
};
