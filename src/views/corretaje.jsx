import React, { Fragment } from "react";
import { Carousel_corretaje } from "../components/Carousel_corretaje";

export class Brokerage extends React.Component {
    constructor() {
        super();

    }


    render() {
        return (
            <Fragment>
                <Carousel_corretaje />
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <p className="text-center title" >Red sueño cuenta con propiedades altamente deseables, atractivas y de primer nivel para ti que buscas comprar o vender.</p>
                            <h1 className="my-text pink pt-5">VENTAS</h1>
                            <p className="title pink ">Me interesa vender mi propiedad</p>
                            <p className="text-justify text">Ofrecemos los servicios necesarios para que tu propiedad se venda al mejor precio posible:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 pt-4">
                            <img src="../img/corretaje/sesionfoto.jpg" className="card-img shadow-large w-100" alt="..." />
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="card-body">
                                <h2 className="card-title pink pt-3">SESIÓN <br></br> FOTOGRAFICA</h2>
                                <p className="card-text text-justify text pt-3">En Empresas Sueño apoyamos a los propietarios con una sesión de fotos y video de las propiedades,
                                incluyendo las zonas como áreas comunes, la cercanía a locomoción,
                                     tiendas de autoservicio y otros sitios de interés previamente identificados.</p>
                                <p className="card-text text">Precio <br></br></p>
                                <p className="card-text text">$40.000 pesos chilenos por sesión fotográfica y de video.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12  pt-4">
                            <img src="../img/corretaje/gestionmarketing.jpg" className="card-img shadow-large w-100" alt="..." />
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="card-body">
                                <h2 className="card-title pink pt-3">GESTIÓN <br></br>DE MARKETING</h2>
                                <p className="card-text text-justify text pt-3">Asesoramos a los propietarios para crear el departamento más atractivo posible, resaltando sus características y beneficios</p>
                                <p className="card-text text">Precio <br></br></p>
                                <p className="card-text text">4% del valor del inmueble</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 pt-4">
                            <img src="../img/corretaje/gestioninmobiliaria.jpg" className="card-img shadow-large w-100" alt="..." />
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="card-body">
                                <h2 className="card-title  pink pt-3">GESTIÓN <br></br> INMOBILIARIA</h2>
                                <p className="card-text text-justify  text pt-3">En Empresas Sueño acompañamos el proceso de compra/venta, desde la publicación hasta la venta.
                                    Asesoramos al vendedor sobre los pasos a seguir.</p>
                                <p className="card-text text">Precio <br></br></p>
                                <p className="card-text text">4% del valor del inmueble</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h2 className="my-text pink">COMPRAS</h2>
                            <p className=" title">Me interesa comprar una propiedad.</p>
                            <p className="text text-justify">Empresas Sueño pone a tu disposición las mejores
                            propiedades para que encuentres el hogar de tus sueños. Te acompañamos y
                                    asesoramos  en todo el proceso. Agenda día y hora para encontrar el hogar de tus sueños.</p>
                        </div>
                    </div>
                    <div className="row">
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