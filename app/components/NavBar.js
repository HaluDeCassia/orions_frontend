const React = require('react');
const Bootstrap = require('bootstrap/dist/js/+.js');

let logo = {
    title: "Logo Orions",
    src: './arquivos/img/logo_orions.png'
};

let Navbar = React.createClass({
    render: function(){
        let pages = ['Home', 'Quem Somos'];

        let navLinks = pages.map(function(page){
            return (
            <li className="nav-item active">
                <a className="nav-link" href={'/' + page}>{page}</a>
            </li>
            );
        });

        return (
        <nav className="navbar navbar-light navbar-toggleable-sm bg-faded justify-content-center">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a href="/" className="navbar-brand d-flex w-50 mr-auto">
                <img src={logo.src} alt={logo.title}/>
            </a>
            <div className="navbar-collapse collapse" id="collapsingNavbar3">
                <ul className="navbar-nav mx-auto justify-content-center">
                    { navLinks }
                </ul>
            </div>
        </nav>
        );
    }
});

module.exports = Navbar;