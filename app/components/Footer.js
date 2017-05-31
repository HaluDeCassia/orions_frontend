const React = require('react');
const Col = require('react-bootstrap/lib/Col');
const Row = require('react-bootstrap/lib/Row');
const Image = require('react-bootstrap/lib/Image');

let Footer = React.createClass({
    render: function(){
        let logo = {
            title: "Logo Orions",
            src: "../arquivos/img/logo_orions_rodape.png"
        };

        return (
            <footer>
                <Row className="bg-footer">
                    <link rel="stylesheet" href={"../css/_footer.scss"}/>
                    <Col className="jumbotron">
                        <Image src={logo.src} alt={logo.title} responsive/>
                        <p className="tt-footer">2017</p>
                        <Row>
                            <Col xs={6} pullRight>
                                <a className="a-footer" href="">
                                    <i className="fa fa-facebook-square" aria-hidden="true">
                                    </i>
                                </a>
                            </Col>
                            <Col xs={6}>
                                <a className="a-footer" href="">
                                    <i className="fa fa-instagram" aria-hidden="true">
                                    </i>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </footer>
        );
    }
});

module.exports = Footer;