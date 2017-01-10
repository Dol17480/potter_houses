var React = require('react');

var HouseSelector = React.createClass({
  render: function () {
    return (
      <select id="houses">
        <option>House Selector</option>
      </select>
    );
  }
});

module.exports = HouseSelector;
