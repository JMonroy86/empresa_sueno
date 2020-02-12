import React, { Fragment } from "react";


export class Carousel_comunidad extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div id="carousel-topcomunidad" className="carousel slide carousel-fade my-carousel" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-topcomunidad" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-topcomunidad" data-slide-to="1"></li>
                        <li data-target="#carousel-topcomunidad" data-slide-to="2"></li>
                        <li data-target="#carousel-topcomunidad" data-slide-to="3"></li>

                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="img/comunidad/slidecomunidad1.jpg"
                                alt="First slide" />
                            
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src="img/comunidad/slidecomunidad2.jpg"
                                alt="Second slide" />
                                
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="img/comunidad/slidecomunidad3.jpg"
                                alt="Third slide" />
                                
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="img/comunidad/slidecomunidad4.jpg"
                                alt="Fourth slide" />
                                
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-topcomunidad" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-topcomunidad" role="button" data-slide="next">
                        <span className="carousel-control-next-icon pink" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </Fragment>
        );
    }
}