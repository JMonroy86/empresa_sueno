import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {width: 'auto', height: '200px', 'top': '1.5rem', position:"unset"};

export class MapModal extends Component {
  render() {
    return (
      <div id="mapBox">
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBakTVugpt-IL8F7YSQsp2IYPgMiYBo6UE'
})(MapModal);

