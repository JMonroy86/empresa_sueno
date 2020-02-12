import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Carousel } from '../components/Carousel';
import { Carousel_mid_home } from "../components/Carousel_mid_home"

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Carousel />
                <div className="container">
                    <h4 className="title pt-5 pink">Recomendados</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="img/home/DescubreChile.jpg" className="card-img h-100" alt="Cordillera de los Andes" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title title pink">Cordillera los Andes</h5>
                                            <p className="card-text text myminiCard-text- text-justify">Vive experiencias inolvidables explorando la cordillera de los Andes,
                                             recorriendo los viñedos y degustando los mejores vinos chilenos y aventurándote en las hermosas playas del océano pacífico.</p>
                                            <p className="card-text text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="img/home/santiago.jpg" className="card-img h-100" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title title pink">Santiago y sus maravillas</h5>
                                            <p className="card-text text myminiCard-text text-justify">Situada entre la hermosa cordillera de los Andes, Santiago de Chile
                                            es una de las ciudades más vanguardistas, innovadoras, modernas y culturales de América Latina.</p>
                                            <p className="card-text text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="title pink">Departamentos destacados</h4>
                    <Carousel_mid_home />
                    <h4 className="pt-5 title pink">Nuestros Servicios</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card mb-3" >
                                <a href="#"><img src="img/home/A1267.jpg" class="card-img-top" alt="..." /></a>
                                <div class="card-body min-vh-10">
                                    <h5 class="card-title title pink">Arrienda</h5>
                                    <p class="card-text mycard-text text text-justify">Ponemos a tu disposición acogedores departamentos en los mejores destinos de Chile para hacer de tu estancia una experiencia mágica.</p>
                                    <div className="plus">
                                        <Link className="nav-link active" to="/arrienda"><i class="fas fa-plus-circle fa-2x"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card mb-3" >
                                <img src="img/home/homecorretaje.jpg" class="card-img-top w-100" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title title pink">Corretaje</h5>
                                    <p class="card-text mycard-text text text-justify">Encuentra la propiedad de tus sueños con nuestro servicio, en donde te ofrecemos propiedades altamente deseables y atractivas para ti que buscas comprar o vender. Te asesoramos en todo el proceso de compra/venta.</p>
                                    <div className="plus">
                                        <Link className="nav-link" to="/corretaje"><i class="fas fa-plus-circle fa-2x"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card mb-3" >
                                <img src="img/home/homecomunidad.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title title pink">Comunidad</h5>
                                    <p class="card-text mycard-text text text-justify">Te invitamos a formar parte de nuestra comunidad. Arrienda tu departamento, casa o loft con nosotros. </p>
                                    <div className="plus">
                                        <Link className="nav-link" to="/comunidad"><i class="fas fa-plus-circle fa-2x"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card mb-3" >
                                <img src="img/home/homereinventa.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title title pink">Reinventa</h5>
                                    <p class="card-text mycard-text text text-justify">En Empresas Sueño convertimos tu hogar, negocio o lugar
                                     de trabajo en el espacio de tus sueños con nuestro servicio de remodelación y decoración. </p>
                                    <div className="plus">
                                        <Link className="nav-link" to="/reinventa"><i class="fas fa-plus-circle fa-2x"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card mb-3" >
                                <img src="img/home/homeimpecable.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title title pink">Impecable</h5>
                                    <p class="card-text mycard-text text text-justify">Más de 3 años de experiencia nos respaldan para lograr al
                                    mismo tiempo una limpieza rápida y de calidad. </p>
                                    <div className="plus">
                                        <Link className="nav-link" to="/impecable"><i class="fas fa-plus-circle fa-2x"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card mb-3" >
                                <img src="img/home/DescubreChile2.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title title pink">Descubre Chile</h5>
                                    <p class="card-text mycard-text text text-justify">Te llevamos a descubrir los destinos más emblemáticos y extraordinarios de Chile.
                                     Disfruta de los bellos paisajes y atrévete a vivir una experiencia que no olvidarás.  </p>
                                    <div className="plus">
                                        <Link className="nav-link" to="/descubre-chile"><i class="fas fa-plus-circle fa-2x"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}