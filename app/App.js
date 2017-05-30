const React = require('react');
const ReactDOM = require('react-dom');

let NavBar = require('./components/NavBar');
let Footer = require('./components/Footer');

let App = React.createClass({
    render: function () {
        return (
            <div>
                < NavBar />
                < Footer />
            </div>
        );
    }
});
ReactDOM.render(< App />, document.getElementById('app'));
