const React = require('react');

let Parallax = React.createClass({
    render: function(){
        return (
            <div className="parallax">
                <div className="parallax__layer parallax__layer--back">
                    ...
                </div>
                <div className="parallax__layer parallax__layer--base">
                    ...
                </div>
            </div>
        );
    }
});

module.exports = Parallax;
