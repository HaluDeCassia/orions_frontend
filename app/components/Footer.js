const React = require('react');
const Col = require('react-bootstrap/lib/Col');
const Image = require('react-bootstrap/lib/Image');

let Footer = React.createClass({
    render: function(){
        let logo = {
            title: "Logo Orions",
            src: "../arquivos/img/logo_orions_rodape.png"
        };

        return (
            <footer>
                <link rel="stylesheet" href={"../css/_footer.scss"}/>
                <Col className="alert-info">
                    <Image src={logo.src} alt={logo.title} responsive/>
                </Col>
            </footer>
        );
    }
});

module.exports = Footer;