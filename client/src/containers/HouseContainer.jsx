var React = require('react');
var HouseSelector = require('../components/HouseSelector');
var HouseDetail = require('../components/HouseDetail');

var HouseContainer = React.createClass({
  getInitialState: function () {
    return { };
  },
  render: function () {
    return (
      <div>
        <h2>Select a Hogwarts House</h2>
        <HouseSelector />
        <HouseDetail />
      </div>
    );
  }
});

module.exports = HouseContainer;
