const React = require('react');
const Navbar = require('react-bootstrap/lib/Navbar');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const Col = require('react-bootstrap/lib/Col');
const Image = require('react-bootstrap/lib/Image');

let NavBar = React.createClass({
    render: function(){
        let logo = {
            title: "Logo Orions",
            src: "../arquivos/img/logo_orions.png"
        };
        let pages = ['Home', 'Quem Somos'];
        let i = 0;
        let navLinks = pages.map(function(page){
            return (
                <NavItem eventKey={i++} href={'/' + page}>{page}</NavItem>
            );
        });

        return (
            <div>
                <link rel="stylesheet" href={"../css/navbar.css"}/>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">
                                <Image src={logo.src} alt={logo.title} responsive />
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Col mdOffset={6}>
                            <Nav>
                                { navLinks }
                            </Nav>
                        </Col>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
});

module.exports = NavBar;