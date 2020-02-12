import React, { Fragment } from "react";


export class Carousel_mid_home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div id="carousel-2z" className="carousel slide carousel-fade my-carousel" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-2z" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-2z" data-slide-to="1"></li>

                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="img/home/deptoDest1.jpg"
                                alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Santiago, Chile</h5>
                                <p>Hermoso departamento ubicado en el corazón de Santiago para hacer de tu estadía una experiencia inolvidable</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src="img/home/deptoDest2.jpg"
                                alt="Second slide" />
                                <div class="carousel-caption d-none d-md-block">
                                <h5>Viña del Mar, Chile</h5>
                                <p>Disfruta la magia de Viña del Mar en un acogedor departamento pensado para tu comodidad</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-2z" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-2z" role="button" data-slide="next">
                        <span className="carousel-control-next-icon pink" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </Fragment>
        );
    }
}
