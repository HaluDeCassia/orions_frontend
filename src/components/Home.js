const React = require('react');
const Col = require('react-bootstrap/lib/Col');
const Row = require('react-bootstrap/lib/Row');
const Image = require('react-bootstrap/lib/Image');

let Parallax = require('./Parallax');

let Home = React.createClass({
    render: function(){
        let logo = {
            title: "Logo Orions",
            src: "../arquivos/img/logo_orions_rodape.png"
        };
        let today = new Date(), year = today.getFullYear();

        return (
            <Row>
                <Col xs={12}>
                    <link rel="stylesheet" href={"../css/home.css"}/>
                    < Parallax />
                </Col>
            </Row>
        );
    }
});

module.exports = Home;