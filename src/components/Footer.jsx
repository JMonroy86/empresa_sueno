import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

export class Footer extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message, subject } = this.state

        const form = await axios.post('api/form', {
            name,
            email,
            message,
            subject
        })
    }

    render() {
        return (
            <Fragment>
                <section className="pt-5">
                    <footer className="page-footer font-small mdb-color pt-4">
                        <div className="container text-center text-md-left">
                            <div className="row text-center text-md-left mt-3 pb-3">
                                <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 mx-auto mt-4">
                                    <h6 className="text-uppercase mb-4 title">Mapa del sitio</h6>
                                    <ul className="text">
                                        <li><Link className="pt-3" to="/">Inicio<span className=""></span></Link></li>
                                        <li><Link className="pt-3" to="/arrienda">Arrienda</Link></li>
                                        <li><Link className="pt-3" to="/corretaje">Corretaje</Link></li>
                                        <li><Link className="pt-3" to="/comunidad">Comunidad</Link></li>
                                        <li><Link className="pt-3" to="/reinventa">Reinventa</Link></li>
                                        <li><Link className="pt-3" to="/impecable">Impecable</Link></li>
                                        <li><Link className="pt-3" to="descubre-chile">Descubre Chile</Link></li>
                                    </ul>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto col-sm-12 mt-4">
                                    <h6 className="text-uppercase mb-4 title">Contact</h6>
                                    <ul className="text">
                                        <li className="pt-3"><a href=""><i className="fas fa-home mr-3 "></i> New York, NY 10012, US</a></li>
                                        <li className="pt-3"><a href="mailto:"><i className="fas fa-envelope mr-3 "></i> info@empreseasueno.cl</a></li>
                                        <li className="pt-3"><a href="tel:+"><i className="fas fa-phone mr-3 "></i> + 01 234 567 88</a></li>
                                        <li className="pt-3"><a href="tel:+"><i className="fas fa-print mr-3"></i> + 01 234 567 89</a></li>

                                    </ul>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 mx-auto mt-4 title form-sueno">
                                    <form onSubmit={this.handleSubmit} id="contact-form" name="contact-form" action="mail.php" method="POST"
                                        onsubmit="return validateForm()">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="md-form">
                                                    <div class="md-form">
                                                        <input type="text" id="name" name="name" class="form-control" onChange={this.handleChange}></input>
                                                        <label for="name" class="">Nombre</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="md-form">
                                                    <div class="md-form">
                                                        <input type="email" id="email" name="email" class="form-control" onChange={this.handleChange}></input>
                                                        <label for="email" class="">Email</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form">
                                                    <input type="text" id="subject" name="subject" class="form-control" onChange={this.handleChange}></input>
                                                    <label for="subject" class="">Asunto</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form">
                                                    <textarea type="textarea" id="message" name="message"
                                                        class="form-control" onChange={this.handleChange}></textarea>
                                                    <label for="message">Mensaje</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn-sueno">Submit</button>
                                        {/* <br> */}
                                        <div class="status" id="status"></div>
                                    </form>

                                </div>
                            </div>
                            <hr />

                            <div className="row d-flex align-items-center">
                                <div className="col-md-7 col-lg-8">
                                    <p className="text-center text-md-left">© 2018 Copyright:
                                    <a href="http://www.bracket.cl">
                                            <strong> Bracket</strong>
                                        </a>
                                    </p>
                                </div>
                                <div className="col-md-5 col-lg-4 ml-lg-0">
                                    <div className="text-center text-md-right">
                                        <ul className="list-unstyled list-inline ">
                                            <li className="list-inline-item">
                                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                                    <i className="fab fa-facebook-f text-white"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                                    <i className="fab fa-twitter text-white"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                                    <i className="fab fa-google-plus-g text-white"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                                    <i className="fab fa-linkedin-in text-white"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </Fragment>
        );
    }
}
