import React, { Fragment } from "react";
import { Carousel_impecable } from "../components/Carousel-impecable";



export class Impecable extends React.Component {
    render() {
        return (
            <Fragment>
                <Carousel_impecable />
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-lg-5 pt-5">
                            <img src="../img/impecable/deptolimpio.jpg" className="card-img shadow-large" alt="..." />
                        </div>
                        <div className="col-md-7 col-sm-12 col-lg-7 pt-3 pt-5">
                            <h2 className="title pink font-weight-bold ">¿Quieres tu departamento limpio? </h2>
                            <p className="title text-justify pt-2" style={{ fontSize: "20px" }}> Más de 3 años de experiencia trabajando con departamentos publicitados tanto en booking como AIRBNB nos respaldan,
                             somos capaces de lograr al mismo tiempo una limpieza rápida y de calidad.
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-lg-4 col-sm-4 text-center pt-4">
                                        <img src="../img/bedroom.png" className="img-fluid w-50" />
                                        <h5 className="text pt-2">DORMITORIOS Ó LIVING</h5>
                                        <h5 className="title pink">$5.000 CLP</h5>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-sm-4 text-center pt-4">
                                        <img src="../img/living-room.png" className="img-fluid w-50" />
                                        <h5 className="text pt-2">TERRRAZA</h5>
                                        <h5 className="title pink">$2.000 CLP</h5>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-sm-4 text-center pt-4">

                                        <img src="../img/clean.png" className="img-fluid w-50" />
                                        <h5 className="text pt-2">BAÑO</h5>
                                        <h5 className="title pink">$4.000 CLP</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row ">
                        <div className="col-12 text-center pt-5">
                            <p style={{ fontSize: "25px" }}>Cotiza con nosotros para lograr la limpieza de tus sueños ¡Contáctanos!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pt-5">
                            <div className="text-center pink">
                                <img src="../img/depto1.jpg" alt="..." class="rounded-circle shadow-large" />
                                <p className="text-center pt-3" style={{ fontSize: "25px" }}>
                                    Pedro Pérez
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}