import React, { Fragment } from "react";
import { NONAME } from "dns";

const Colapse = (props) => {
  return (
    <Fragment>
      <div>
      <div class="accordion" id={"accordionExample" + props.idNumber}>
        <div class="card">
          <img src="img/depa.jpg" class="img-fluid" alt="Responsive image" />
          <div class="card-header title pink text-uppercase" id={props.collapseName} style={{backgroundColor: "#1110"}}>
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target={"#" + props.id} aria-expanded="false" aria-controls={props.id}>
                Cajon del Maipo y Embalse del Yeso
        </button>
            </h2>
          </div>
          <div id={props.id} class="collapse" aria-labelledby={props.collapseName} data-parent={"#accordionExample" + props.idNumber}>
            <div class="card-body text-justify">
              <div class="row">
                <div class="col-md-8">
                  <h2 className="h2-text">Itinierario:</h2>
                  <ul class="list-unstyled">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit</li>
                  </ul>
                  <h5 class="h2-text">Dudas Frecuentes</h5>
                  <ul class="list-unstyled">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit</li>
                  </ul>
                </div>
                <div class="col-md-4 text-right">
                  <p class="p-price">$27.000,00 CLP</p>
                  <p class="p-cod">COD-SUENO</p>
                  <p class="p-id">0001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
}

export default Colapse;