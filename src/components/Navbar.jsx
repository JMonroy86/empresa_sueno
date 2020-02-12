import React, { Fragment } from "react";
import { Link } from "react-router-dom";




export class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light nw-navbar" >
                    <Link className="navbar-brand" to="/"><img className="d-block logo" src="img/logo_blanco.png"
                        alt="LogoSueño" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio<span className=""></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/arrienda">Arrienda</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/corretaje">Corretaje</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/comunidad">Comunidad</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/reinventa">Reinventa</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/impecable">Impecable</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="descubre-chile">Descubre Chile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/fb"><i className="fab fa-facebook"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ins"><i className="fab fa-instagram"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tw"><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ty"><i className="fab fa-youtube"></i></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        );
    }
}

