import React, { Fragment } from "react";

import Carousel_descubre from "../components/Carousel_descubre"

export class Discover extends React.Component {

    render() {
        return (
            <Fragment>
                <Carousel_descubre />
                <div className="container ">
                    <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12 mr-auto ml-auto pt-5">
                            <img src="img/logo_rosa1.png" className="w-50" alt="" style={{
                                marginLeft: "auto",
                                display: "block",
                                marginRight: "auto"
                            }} />
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-12 pt-5">
                        <p className="text-justify  title">Empresas Sueño te acerca al mejor servicio para hacer 
                        de tu viaje una experiencia inolvidable. Descubre los lugares más emblemáticos y extraordinarios de Chile.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h2 className="title pink text-center">Te llevamos a descubrir los destinos más emblemáticos y extraordinarios de Chile.</h2>
                            <h3 className="h3 pink text-left pt-5"> Reserva y disfruta de:</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-sm-12 pt-3">
                            <div class="card shadow-large" >
                                <img src="img/descubre/CajonMaipo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold title pink">Cajón del Maipo</h5>
                                    <p class="card-text text text-justify">Los hermosos paisajes de “El Cajón de Maipo”, el Embalse del Yeso </p>
                                    <h2 className="title font-weight-bold pink text-right">$ 27.000,00 CLP</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-12 pt-3">
                            <div class="card shadow-large" >
                                <img src="img/descubre/valpoyviña.JPG" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold title pink">Viña del Mar y Valparaiso</h5>
                                    <p class="card-text text text-justify">Las emblemáticas ciudades de Viña del Mar y Valparaíso</p>
                                    <h2 className="title font-weight-bold pink text-right">$ 22.000,00 CLP</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-12 pt-3">
                            <div class="card shadow-large" >
                                <img src="img/descubre/Safari.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold title pink">Parque Safari</h5>
                                    <p class="card-text text text-justify">Aventúrate en el Parque Safari y vuélvete parte de la naturaleza</p>
                                    <h2 className="title font-weight-bold pink text-right">$ 50.000,00 CLP</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-lg-3 col-sm-12 pt-3">
                            <div class="card shadow-large" >
                                <img src="img/descubre/Islanegra.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold title pink">Isla Negra y Pomaire</h5>
                                    <p class="card-text text text-justify">Descubre la magia de Pablo Neruda en Isla Negra y Pomaire</p>
                                    <h2 className="title font-weight-bold pink text-right">$ 45.000,00 CLP</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-sm-12 pt-3">
                            <div class="card shadow-large" >
                                <img src="img/descubre/Viñas.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold title pink">Viñedos</h5>
                                    <p class="card-text text text-justify">Recorre y vive una experiencia única en los viñedos más representativos de Chile</p>
                                    <h6 className="text pink text-right">Undurraga: $25.000,00 CLP </h6>
                                    <h6 className="text pink text-right">Santa Rita: $27.000,00 CLP </h6>
                                    <h6 className="text pink text-right">Concha y Toro: $25.000,00 CLP </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-12 pt-3">
                            <div class="card shadow-large" >
                                <img src="img/descubre/ValleNevado.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold title pink">Valle Nevado y Farellones</h5>
                                    <p class="card-text text text-justify">Diviértete en Valle Nevado y Farellones $20.000 por traslado. Entrada + equipamiento + clases colectivas 2 horas </p>
                                    <h2 className="title font-weight-bold pink text-right">$ 45.000,00 CLP</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-12 pt-3">
                            <div class="card shadow-large" >
                                <img src="img/descubre/BaliHai.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold title pink">Bali Hai</h5>
                                    <p class="card-text text text-justify">Disfruta de una experiencia cultural y culinaria en Bali Hai</p>
                                    <h2 className="title font-weight-bold pink text-right">$ 50.000,00 CLP</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-12 pt-3">
                            <div class="card shadow-large" >
                                <img src="img/descubre/transporte.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold title pink">Transporte</h5>
                                    <p class="card-text text text-justify">También realizamos tours personalizados y servicios de transporte al Aeropuerto Internacional de Santiago de Chile</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}
