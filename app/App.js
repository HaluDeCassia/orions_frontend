const React = require('react');
const ReactDOM = require('react-dom');

let NavBar = require('./components/NavBar');
let App = React.createClass({
    render: function () {
        return (
            < NavBar />
        );
    }
});
ReactDOM.render(< App />, document.getElementById('app'));
