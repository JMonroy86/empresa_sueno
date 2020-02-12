import React, { Fragment } from "react";
import { Carousel_reinventa } from "../components/Carousel-reinventa";




export class Reinvent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <Carousel_reinventa />
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12 text-center title pink">
                            <h2>ACERCA DEL SERVICIO</h2>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12">
                            <h3 className="text-center title pink">¿Qué esperas para convertir tu casa, oficina o negocio en un lugar acogedor y moderno?</h3>

                        </div>
                    </div>
                    <div className="row pt-5">
                            <div className="col-md-8 col-lg-8  col-sm-12">
                                <p className="text-justify title" style={{ fontSize: "20px" }}>En Empresas Sueño nos encanta cumplir tus sueños, por eso, contamos con
                                servicio de remodelación y decoración de tu hogar, negocio y/o lugar de trabajo,
                            buscando siempre la satisfacción de nuestros clientes.  </p>
                            </div>
                            <div className="col-md-4 col-lg-4  col-sm-12 justify-content-center text-center">
                                <img src="img/reinventa/reinventa.jpg" alt="..." class="rounded-circle shadow-large" />
                            </div>
                        </div>
                    <div className="row pt-5">
                        <div className="col-md-4 col-lg-4 col-sm-12 pt-3" >
                            <div class="card shadow-large" >
                                <img src="img/reinventa/remodelacion.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title title pink">REMODELACIÒN Y DECORACIÒN</h5>
                                    <p class="card-text text">Selección y cambio de pisos, muebles, camas, cortinas, sillas, elementos decorativos, muebles a la medida, cubiertas de cocina. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 pt-3">
                            <div class="card shadow-large" >
                                <img src="img/reinventa/pintura.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title  title pink">PINTURA</h5>
                                    <p class="card-text text">El servicio de pintura tiene un costo extra y se calcula dependiendo de la superficie.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 pt-3">
                            <div class="card shadow-large" >
                                <img src="img/reinventa/remodelacionexp.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title  title pink">SERVICIO EXPRESS</h5>
                                    <p class="card-text text">Remodelaciones express, el hogar de tus sueños en 30 días.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}