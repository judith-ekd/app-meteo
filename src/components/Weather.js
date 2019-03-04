import React from 'react';
import classnames from 'classnames';
import cloud from '../assets/images/cloud.svg';
import sun from '../assets/images/sun.svg';
import mist from '../assets/images/mist.svg';
import snow from '../assets/images/snow.svg';
import rain from '../assets/images/rain.svg';
import humidity from '../assets/images/humidity.png';
import wind from '../assets/images/wind.png';

var icon = undefined;

class Weather extends React.Component{

  icon(){
    var desc = this.props.description;

    switch (desc) {
      case "couvert":
        icon = cloud;
        break;
      case "nuageux":
        icon = cloud;
        break;
      case "partiellement nuageux":
        icon = cloud;
        break;
      case "ciel dégagé":
        icon = sun;
        break;
      case "peu nuageux":
        icon = sun;
        break;
      case "légère pluie":
        icon = rain;
        break;
      case "pluie modérée":
        icon = rain;
        break;
      case "brume sèche":
        icon = mist;
        break;
      case "brume":
        icon = mist;
        break;
      case "légères chutes de neige":
        icon = snow;
        break;

      default:
        icon = undefined;
        }
  }

  render() {
    this.icon();
    return(

         <div id="content_meteo">
         
          {this.props.city && <p id="city" className="mb-4">{this.props.city}</p>}
          <div className="mb-3">
            {this.props.temperature && <p id="temp">{this.props.temperature}°C</p>}
            {this.props.description && <img id="icon" src={icon}></img>}
          </div>
          <section id="additionnal_content">
            <div className="add_info">
              <img src={humidity} alt="icon humidity"/>
              {this.props.humidity && <p>{this.props.humidity} %</p>}
            </div>
            <div className="add_info">
              <img src={wind} alt="icon wind"/>
              {this.props.wind && <p>{this.props.wind}km/h</p>}
            </div>
          </section>
         </div>

     )
   }
}
export default Weather;
