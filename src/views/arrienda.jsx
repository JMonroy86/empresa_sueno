import React, { Fragment } from "react";
import axios from "axios"

import { Carousel_arrienda } from "../components/Carousel_arrienda";
import { Carousel_dept1 } from "../components/Carousel-dept1";
import { Carousel_dept2 } from "../components/Carousel-dept2";
import { Carousel_dept3 } from "../components/Carousel-dept3";
import { Carousel_dept4 } from "../components/Carousel_dept4";
import { Carousel_dept5 } from "../components/Carousel_dept5";
import MapModal from "../components/map";


export class Arrienda extends React.Component {
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
                <Carousel_arrienda />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 pt-5">
                            <div class="card shadow-large" >
                                <a href="#" data-toggle="modal" data-target=".dept1"><img src="img/dpt1/thumb/5763.jpg" class="card-img-top" alt="..." /></a>
                                <div class="card-body">
                                    <h5 class="card-title title">$25.000,00 clp + IVA</h5>
                                    <h5 class="card-title title pink">Catedral 1289, Santiago Centro</h5>
                                    <ul class="card-text text list-unstyled pl-2 myrentCard-text" style={{ fontSize: "small" }}>
                                        <li>1 Habitación</li>
                                        <li>1 Baño</li>
                                        <li>1 Cocina</li>
                                        <li>TV por cable</li>
                                        <li>WIFI</li>
                                    </ul>
                                    <div className="plus">
                                        <a href="#" data-toggle="modal" data-target=".dept1"><i className="fas fa-plus-circle fa-2x "></i></a>
                                        <div class="modal fade dept1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <Carousel_dept1 />
                                                        <div className="container pt-4">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <h2 className="title text-left">Catedral 1289</h2>
                                                                    <h5 className="title text-left"> Santiago Centro</h5>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <h2 className="text-right pink">$25.000,00 clp + IVA</h2>
                                                                    <h6 className="text-right">CODSUEÑO: 0001</h6>
                                                                </div>
                                                            </div>
                                                            <div className="container pt-4">
                                                                <div className="row">
                                                                    <p className="text-justify">Acogedor y cómodo departamento ubicado en el centro cívico de Santiago,
                                                                     ideal para viajeros y con excelente ubicación, a pasos del metro Santa Ana y Plaza de Armas. Cercano al Palacio de la Moneda,
                                                                      el Museo de Bellas Artes, el Mercado Central y otros sitios de interés. Por su magnífica ubicación, podrás recorrer a pie todo el centro de Santiago,
                                                                      demás encontrarás tiendas de autoservicio, restaurantes y todo lo necesario para tu estadía.</p>
                                                                </div>
                                                                <div className="row pt-4">
                                                                    <div className="col-lg-4 col-6">
                                                                        <ul className="text-left list-unstyled">
                                                                            <li><i class="fas fa-bed fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>1 Habitación</li>
                                                                            <li> <i class="fas fa-bath fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5  pink"></i>1 Baño</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-4 col-6">
                                                                        <ul class="text-left list-unstyled">
                                                                            <li><i class="fas fa-utensils fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>1 Cocina</li>
                                                                            <li> <i class="fas fa-tv fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>TV por cable</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-4 col-6">
                                                                        <ul class="text-left list-unstyled">
                                                                            <li><i class="fas fa-wifi fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>WIFI</li>
                                                                            <li><i class="fas fa-video fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>NETFLIX</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="row pt-4">
                                                                    <p className="text-justify">El edificio cuenta con vigilancia las 24 horas, lavandería, piscina, quincho y gimnasio.
                                                                     El departamento es hermoso y muy cómodo, cuenta con lo necesario para tener la mejor de las estadías, cocina y baño totalmente equipado.
                                                                     La habitación posee una cama de 2 plazas, televisión con cable e internet.</p>
                                                                </div>
                                                                <div className="row pr-4 pink">
                                                                    <p className="text-justify">El anfitrión posee la amabilidad y disposición para que tu estadía resulte una experiencia inolvidable. </p>
                                                                </div>
                                                                <div className="row">
                                                                    <h6>Catedral 1289, Santiago Centro</h6>
                                                                    <div className="col-12">

                                                                        <MapModal />

                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className=" mx-auto mt-4 title form-sueno">
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 pt-5">
                            <div class="card  shadow-large" >
                                <a href="#" data-toggle="modal" data-target=".dept2"><img src="img/dpt2/thumb/5764.jpg" class="card-img-top w-100" alt="..." /></a>
                                <div class="card-body">
                                    <h5 class="card-title title">$30.000,00 clp + IVA</h5>
                                    <h5 class="card-title title pink">Catedral 1289, Santiago Centro</h5>
                                    <ul class="card-text text list-unstyled pl-2 myrentCard-text" style={{ fontSize: "small" }}>
                                        <li>2 Habitaciones</li>
                                        <li>1 Baño</li>
                                        <li>1 Cocina</li>
                                        <li>TV por cable</li>
                                        <li>WIFI</li>
                                        <li>NETFLIX</li>
                                    </ul>
                                    <div className="plus">
                                        <a href="#" data-toggle="modal" data-target=".dept2"><i className="fas fa-plus-circle fa-2x "></i></a>
                                        <div class="modal fade dept2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <Carousel_dept2 />
                                                        <div className="container pt-4">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <h2 className="title text-left">Catedral 1289</h2>
                                                                    <h5 className="title text-left">Santiago Centro</h5>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <h2 className="text-right pink">$30.000,00 clp + IVA</h2>
                                                                    <h6 className="text-right">CODSUEÑO: 0002</h6>
                                                                </div>
                                                            </div>
                                                            <div className="container pt-4">
                                                                <div className="row">
                                                                    <p className="text-justify">Amplio, impecable y acogedor departamento, ubicado en el centro de Santiago y con excelente conectividad,
                                                                     a pasos del metro Santa Ana y Plaza de Armas. Cerca encontrarás lo necesario para hacer de tu estadía lo más cómoda posible,
                                                                     farmacias, tiendas de autoservicio, restaurante, entre otros. Su privilegiada ubicación permite recorrer los sitios de interés
                                                                      históricos y turísticos a pie. </p>
                                                                </div>
                                                                <div className="row pt-4">
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul className="text-left list-unstyled">
                                                                            <li><i class="fas fa-bed fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>2 Habitación</li>
                                                                            <li> <i class="fas fa-bath fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5  pink"></i>1 Baño</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul class="text-left list-unstyled">
                                                                            <li><i class="fas fa-utensils fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>1 Cocina</li>
                                                                            <li> <i class="fas fa-tv fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>TV por cable</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul class="text-left list-unstyled">
                                                                            <li><i class="fas fa-wifi fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>WIFI</li>
                                                                            <li><i class="fas fa-video fa-2x p-2 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>NETFLIX</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="row pt-4">
                                                                    <p className="text-justify">El departamento cuenta con una magnífica vista de la cordillera de los Andes,
                                                                    perfecta para familias o parejas que quieren disfrutar una estancia inolvidable.
                                                                    Cuenta con dos habitaciones, una cama de 2 plazas, una cama de 1 ½ plaza y un sofá cama para la comodidad de
                                                                    los huéspedes. Baño y cocina totalmente equipados para el bienestar de los huéspedes.
                                                                    El departamento cuenta con TV Cable, internet Y NETFLIX.
                                                                    </p>
                                                                    <p className="text-justify">El edificio cuenta con vigilancia las 24 hrs, lavandería, piscina, quincho,
                                                                    gimnasio y una terraza con vista espectacular.  </p>
                                                                </div>
                                                                <div className="row pr-4 pink">
                                                                    <p className="text-justify">El anfitrión es atento y siempre dispuesto a ayudar a
                                                                    los huéspedes para hacer su estadía más agradable.</p>
                                                                </div>
                                                                <div className="row">
                                                                    <h6>Catedral 1289, Santiago Centro</h6>
                                                                    <div className="col-12">

                                                                        <MapModal />

                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className=" mx-auto mt-4 title form-sueno">
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 pt-5">
                            <div class="card shadow-large" >
                                <a href="#" data-toggle="modal" data-target=".dept3"><img src="img/dpt3/thumb/5764.jpg" class="card-img-top w-100" alt="..." /></a>
                                <div class="card-body">
                                    <h5 class="card-title title">$25.000,00 clp + IVA</h5>
                                    <h5 class="card-title title pink">Mapocho 1522, Santiago Centro</h5>
                                    <ul class="card-text text list-unstyled pl-2 myrentCard-text " style={{ fontSize: "small" }}>
                                        <li>1 Habitación</li>
                                        <li>1 Baño</li>
                                        <li>1 Cocina</li>
                                        <li>TV por cable</li>
                                        <li>WIFI</li>
                                        <li>NETFLIX</li>
                                        <li>Zona de Quincho</li>
                                        <li>Gimnasio</li>
                                        <li>Lavandería</li>
                                    </ul>
                                    <div className="plus">
                                        <a href="#" data-toggle="modal" data-target=".dept3"><i className="fas fa-plus-circle fa-2x "></i></a>
                                        <div class="modal fade dept3" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <Carousel_dept3 />
                                                        <div className="container pt-4">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <h2 className="title text-left">Mapocho 1522</h2>
                                                                    <h5 className="title text-left">Santiago Centro</h5>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <h2 className="text-right pink">$25.000,00 clp + IVA</h2>
                                                                    <h6 className="text-right">CODSUEÑO: 0003</h6>
                                                                </div>
                                                            </div>
                                                            <div className="container pt-4">
                                                                <div className="row">
                                                                    <p className="text-justify">Impecable y hermoso departamento de un dormitorio y un baño.
                                                                    Cuenta con una excelente conectividad, a unas cuadras del metro Cal y Canto y cercano a parques,
                                                                    tiendas de autoservicio y sitios de interés histórico y turístico.  El casco histórico se encuentra a 10 min. a pie.</p>

                                                                    <p className="text-justify">El departamento cuenta con una amplia y cómoda habitación, con una cama de dos plazas y un sofá cama en el living.
                                                                     Ideal para parejas o familias que buscan vivir una experiencia única.
                                                                     El departamento está equipado con TV Cable, internet y NETFLIX. </p>
                                                                </div>
                                                                <div className="row pt-4">
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul className="text-left list-unstyled">
                                                                            <li><i class="fas fa-bed fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>1 Habitación</li>
                                                                            <li> <i class="fas fa-bath fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5  pink"></i>1 Baño</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul class="text-left list-unstyled">
                                                                            <li><i class="fas fa-utensils fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>1 Cocina</li>
                                                                            <li> <i class="fas fa-tv fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>TV por cable</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul class="text-left list-unstyled">
                                                                            <li><i class="fas fa-wifi fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>WIFI</li>
                                                                            <li><i class="fas fa-video fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>NETFLIX</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="row pt-4">
                                                                    <p className="text-justify">La cocina y el baño están equipados con lo necesario para sentirse como en casa.</p>
                                                                    <p className="text-justify">El edificio tiene vigilancia las 24 hrs, gimnasio, lavandería y una terraza con quinchos,
                                                                     que cuenta con una vista privilegiada.</p>

                                                                </div>
                                                                <div className="row pr-4 pink">
                                                                    <p className="text-justify">La anfitriona es atenta y siempre dispuesta a
                                                                    ayudar y orientar a los huéspedes para hacer su estadía de ensueño.</p>
                                                                </div>
                                                                <div className="row">
                                                                    <h6>Mapocho 1522, Santiago Centro</h6>
                                                                    <div className="col-12">

                                                                        <MapModal />

                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className=" mx-auto mt-4 title form-sueno">
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 pt-5">
                            <div class="card shadow-large" >
                                <a href="#" data-toggle="modal" data-target=".dept4"><img src="img/dpt4/thumb/5769.jpg" class="card-img-top w-100" alt="..." /></a>
                                <div class="card-body">
                                    <h5 class="card-title title">Por Temporada</h5>
                                    <h5 class="card-title title pink">Castilla 121, Viña del Mar</h5>
                                    <ul class="card-text text list-unstyled pl-2 myrentCard-text" style={{ fontSize: "small" }}>
                                        <li>2 Habitación</li>
                                        <li>1 Baño</li>
                                        <li>1 Cocina</li>
                                        <li>TV por cable</li>
                                        <li>WIFI</li>
                                    </ul>
                                    <div className="plus">
                                        <a href="#" data-toggle="modal" data-target=".dept4"><i className="fas fa-plus-circle fa-2x "></i></a>
                                        <div class="modal fade dept4" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <Carousel_dept4 />
                                                        <div className="container pt-4">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <h2 className="title text-left">Castilla 121</h2>
                                                                    <h5 className="title text-left">Viña del Mar</h5>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <h2 className="text-right pink">$25.000,00 CLP</h2>
                                                                    <h6 className="text-right">CODSUEÑO: 0004</h6>
                                                                </div>
                                                            </div>
                                                            <div className="container pt-4">
                                                                <div className="row">
                                                                    <p className="text-justify">Departamento nuevo, impecable y equipado para el reposo y la tranquilidad de los huéspedes.
                                                                    Cuenta con excelente conectividad a sitios de interés. Ubicado en el piso 14, cuenta con protecciones en ventanas y terraza,
                                                                    desde la terraza disfrutarás de una hermosa vista y bellos atardeceres.</p>
                                                                    <p className="text-justify">Dispone de una cama matrimonial de dos plazas, dos camas individuales de una plaza y un sofá-cama,
                                                                        ideal para familias que quieran pasar una agradable, cómoda y tranquila estancia en la ciudad jardín de Viña del Mar. </p>
                                                                </div>
                                                                <div className="row pt-4">
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul className="text-left list-unstyled">
                                                                            <li><i class="fas fa-bed fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>2 Habitación</li>
                                                                            <li> <i class="fas fa-bath fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5  pink"></i>1 Baño</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul class="text-left list-unstyled">
                                                                            <li><i class="fas fa-utensils fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>1 Cocina</li>
                                                                            <li> <i class="fas fa-tv fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>TV por cable</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul class="text-left list-unstyled">
                                                                            <li><i class="fas fa-wifi fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>WIFI</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="row pt-4">
                                                                    <p className="text-justify">Cuenta con una cocina totalmente equipada, TV por cable, Internet</p>
                                                                    <p className="text-justify">El edificio tiene vigilancia las 24 hrs, lavandería, piscina, sala de eventos y quinchos. </p>
                                                                    <p className="text-justify">El lugar incluye aparcamiento para un coche. Locomoción a menos de una cuadra.</p>
                                                                </div>
                                                                <div className="row pt-4 ">
                                                                    <p className="text-justify">La anfitriona es atenta y siempre dispuesta a ayudar y orientar a los huéspedes para hacer su estadía inolvidable.</p>
                                                                </div>
                                                                <div className="row pt-4">
                                                                    <p className="text-justify">Cuenta con una cocina totalmente equipada, TV por cable, Internet</p>
                                                                    <p className="text-justify">El edificio tiene vigilancia las 24 hrs, lavandería, piscina, sala de eventos y quinchos. </p>
                                                                    <p className="text-justify">El lugar incluye aparcamiento para un coche. Locomoción a menos de una cuadra.</p>
                                                                    <p className="text-justify pink">Si el huésped lo requiere, contamos con la disponibilidad de recogerlos en el aeropuerto, por una tarifa extra.</p>

                                                                </div>
                                                                <div className="row">
                                                                    <h6>Castilla 121, Viña del Mar</h6>
                                                                    <div className="col-12">

                                                                        <MapModal />

                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className=" mx-auto mt-4 title form-sueno">
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

                                                                            </form>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 pt-5">
                            <div class="card shadow-large" >
                                <a href="#" data-toggle="modal" data-target=".dept5"><img src="img/dpt5/thumb/5773.jpg" class="card-img-top w-100" alt="..." /></a>
                                <div class="card-body">
                                    <h5 class="card-title title">25.000,00 CLP</h5>
                                    <h5 class="card-title title pink">Morande 617, Santiago</h5>
                                    <ul class="card-text text list-unstyled pl-2 myrentCard-text" style={{ fontSize: "small" }}>
                                        <li>1 Habitación</li>
                                        <li>1 Baño</li>
                                        <li>1 Cocina</li>
                                        <li>TV por cable</li>
                                        <li>WIFI</li>

                                    </ul>
                                    <div className="plus">
                                        <a href="#" data-toggle="modal" data-target=".dept5"><i className="fas fa-plus-circle fa-2x "></i></a>
                                        <div class="modal fade dept5" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <Carousel_dept5 />
                                                        <div className="container pt-4">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <h2 className="title text-left">Morande 617 </h2>
                                                                    <h5 className="title text-left">Santiago</h5>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <h2 className="text-right pink">$25.000,00 CLP</h2>
                                                                    <h6 className="text-right">CODSUEÑO: 0005</h6>
                                                                </div>
                                                            </div>
                                                            <div className="container pt-4">
                                                                <div className="row">
                                                                    <p className="text-justify">Hermoso Departamento 1 dormitorio y un baño. Ubicado en pleno centro de Santiago a 3 cuadras de la Plaza de Armas y a solo dos cuadras del metro.
En los alrededores se ubican múltiples casas de cambio y agencias turísticas así como deliciosos restaurantes y útiles tiendas de tecnología así como supermercado y almacenes.</p>
                                                                    <p className="text-justify">El departamento está full equipado.
Toallas, ropa de cama, refrigerador, secador de pelo, hervidor y cocina con horno además de todos los utensilios necesarios para cocinar.</p>
                                                                </div>
                                                                <div className="row pt-4">
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul className="text-left list-unstyled">
                                                                            <li><i class="fas fa-bed fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>1 Habitación</li>
                                                                            <li> <i class="fas fa-bath fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5  pink"></i>1 Baño</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul class="text-left list-unstyled">
                                                                            <li><i class="fas fa-utensils fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>1 Cocina</li>
                                                                            <li> <i class="fas fa-tv fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>TV por cable</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                                        <ul class="text-left list-unstyled">
                                                                            <li><i class="fas fa-wifi fa-2x p-3 col-sm-12 col-md-6 col-lg-6 pt-5 pink"></i>WIFI</li>

                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <div className="row pt-4">

                                                                    <p className="text-justify pink">El living cuenta con cocina, ollas y vajilla, así como con cubiertos y vasos.
                                                                        Tiene además televisor, refrigerador, un hervidor y una terraza.
                                                                        El baño cuenta con toallas, jabón y secador de pelo mientras que el dormitorio cuenta con veladores, lamparas y cojines.</p>
                                                                </div>
                                                                <div className="row">
                                                                    <h6>Morande 617, Santiago</h6>
                                                                    <div className="col-12">

                                                                        <MapModal />

                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className=" mx-auto mt-4 title form-sueno">
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

                                                                            </form>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

