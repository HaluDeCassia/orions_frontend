const React = require('react');
const ReactDOM = require('react-dom');

let Navbar = require('./components/NavBar');
let App = React.createClass({
    render: function () {
        return (
            < Navbar />
        );
    }
});
ReactDOM.render(< App />, document.getElementById('app'));
