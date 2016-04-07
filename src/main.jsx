var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager headingColor="#FF5A5F" title="Ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager headingColor="#007A87" title="ToDos" />, document.getElementById('todos'));
ReactDOM.render(<ListManager headingColor="#9CA299" title="Christmas" />, document.getElementById('christmas'));