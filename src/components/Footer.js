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
        let today = new Date(), year = today.getFullYear();

        return (
            <footer className="bg-footer">
                <Row>
                    <Col xs={12}>
                        <link rel="stylesheet" href={"../css/footer.css"}/>
                        <Col xs={2} xsPush={5}>
                            <Image src={logo.src} alt={logo.title} responsive/>
                        </Col>
                        <Row>
                            <Col xs={12}>
                                <p className="tt-footer">&copy; { year } </p>
                            </Col>
                        </Row>
                        <Col xs={12}>
                            <Col xs={6} className="facebook">
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
                        </Col>
                    </Col>
                </Row>
            </footer>
        );
    }
});

module.exports = Footer;