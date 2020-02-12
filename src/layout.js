import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { Navbar } from './components/Navbar';
// import { Carousel } from './components/Carousel';
import { Footer } from './components/Footer';

import { Home } from "../src/views/home";
import { Community } from "../src/views/comunidad";
import { Reinvent } from "../src/views/reinventa";
import { Discover } from "../src/views/descubre_chile";
import { Brokerage } from "../src/views/corretaje";
import { Arrienda } from "../src/views/arrienda";
import { Impecable } from "../src/views/impecable";



export default class Layout extends React.Component {

    render() {
        return (
            <BrowserRouter>
                
                    <Navbar />
                    <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/comunidad" component={Community}></Route>
                    <Route path="/reinventa" component={Reinvent}></Route>
                    <Route path="/descubre-chile" component={Discover}></Route>
                    <Route path="/corretaje" component={Brokerage}></Route>
                    <Route path="/arrienda" component={Arrienda}></Route>
                    <Route path="/impecable" component={Impecable}></Route>
                    </Switch>
                    <Footer />
               
            </BrowserRouter>
        );
    }
}

