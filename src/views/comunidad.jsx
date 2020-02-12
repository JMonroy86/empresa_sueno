import React, { Fragment } from "react";
import { MapModal } from "../components/map";
import { Carousel_comunidad } from "../components/Carousel_comunidad";

export class Community extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <Carousel_comunidad />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 class="text-center title pt-5" >
                                ¿Te interesa arrendar tu departamento y volverte un anfitrión? ¡Anúnciate con nosotros!
                                Te invitamos a formar parte de nuestra comunidad, arrienda tu departamento, casa o loft y comienza a generar ganancias.
                        </h3>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-12">
                            <h1 className="title h3 text-center font-weight-bold pink">Contactanos</h1>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6 col-lg-6 col-sm-12 pt-5">
                            <div className="text-center">
                                <img src="../img/corretaje/ana.jpg" alt="..." class="rounded-circle shadow-large" />
                                <h3 className="title font-weight-bold pink"></h3>
                                <i className="fas fa-phone pt-3 pink">
                                    <a href="tel:+" className="pink title font-weight-bold pl-2 text-info">Ana Sanchez Bello</a>
                                </i>
                                
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 pt-5">
                            <div className="text-center">
                                <img src="../img/corretaje/andre.jpg" alt="..." class="rounded-circle shadow-large" />
                                <h3 className="title font-weight-bold pink"></h3>
                                <i className="fas fa-phone pt-3 pink">
                                    <a href="tel:+" className="pink title font-weight-bold pl-2 text-info">Andre Rossel Sanchezj</a>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}