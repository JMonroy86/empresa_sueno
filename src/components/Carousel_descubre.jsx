import React, { Fragment } from "react";


export default class Carousel_descubre extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div id="carousel-topdescubre" className="carousel slide carousel-fade my-carouse shadow" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-topdescubre" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-topdescubre" data-slide-to="1"></li>
                        <li data-target="#carousel-topdescubre" data-slide-to="1"></li>
                        
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="img/descubre/slidedescubrechile1.jpg"
                                alt="First slide" />
                            
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src="img/descubre/slidedescubrechile2.jpg"
                                alt="Second slide" />
                                
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="img/descubre/slidedescubrechile3.jpg"
                                alt="Third slide" />
                                
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="img/descubre/slidedescubrechile4.jpg"
                                alt="fourth slide" />
                                
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-topdescubre" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-topdescubre" role="button" data-slide="next">
                        <span className="carousel-control-next-icon pink" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </Fragment>
        );
    }
}