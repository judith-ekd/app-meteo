import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

 

const Marker = ({ marker }) => <div id="marker">
                                
                              </div>;
    
 
class SimpleMap extends React.Component {
	
  render() {
    return (
      // Important! Always set the container height explicitly
      <section id="content_map">
        
        <div id="map">
           <div style={{ height: '100%', width: '100%' }}>

            <GoogleMap
              bootstrapURLKeys={{ key:"AIzaSyBVfxFvA_jqVrjqydbm3SNb9vJSQ-ewvC4"}}
              center={{ 
                        lat: this.props.latitude, 
                        lng: this.props.longitude
                    }}
              zoom={this.props.zoom}
              mapTypeId='satelite'
            >
            <Marker
              lat={this.props.latitude}
              lng={this.props.longitude}
              text={this.props.ville}
            />

            </GoogleMap>

          </div>
        </div>
        </section>
     
    );
  }
}
 
export default SimpleMap;