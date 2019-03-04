import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Map from './components/Map';
import posed from 'react-pose';
import SimpleMap from './components/Map';

class App extends React.Component{

  constructor(props) {
		super(props);
    this.state = {
      isOpen: false,
      active : false,
      temperature: undefined,
      wind: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,

      center : {
        lat: 46.38,
        lon: 2.34,
      },
      zoom : 3
    }
	}

  getWeather = async (e) => {

    e.preventDefault();

    var city = e.target.elements.city.value;

    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&lang=fr&units=metric&appid=5ab3db59a354fa044611674b32c93d1a');

    const response = await api_call.json();

    if(city){
      this.setState({
        temperature: response.main.temp,
        wind: response.wind.speed,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: "",
        center : {
          lat: response.coord.lat,
          lon: response.coord.lon,
        },
        zoom : 11,
     
      })

      this.toggle();

    }else{
        this.setState({
          error: "Le champ est vide..."
        })
    }
  }

 toggle(){

   if(this.state.isOpen === false){
     document.getElementById('btn').value = "OK";
     document.getElementById('input').style.opacity = 0;
     document.getElementById('content_map').style.transform = "translateX(100vw)";
     document.getElementById('content_map').style.transition = "all 1s";
     document.getElementById('content_meteo').style.transform = "translateX(0)";
     document.getElementById('content_meteo').style.transition = "all 1s";
     this.setState({ isOpen: true });

   }else{
     document.getElementById('btn').value = "OK";
     document.getElementById('input').style.opacity = 1;
     document.getElementById('content_map').style.transform = "translateX(0)";
     document.getElementById('content_map').style.transition = "all 1s";
     document.getElementById('content_meteo').style.transform = "translateX(-100vw)";
     document.getElementById('content_meteo').style.transition = "all 1s";

     this.setState({ isOpen: false });
   }
}



   render(){
     const { isOpen } = this.state;
    return(
      <div id="content_all">

          <Titles/>
            <Form loadWeather={this.getWeather}
                  error={this.state.error}

            />
        <div id="content_flex">
            <Weather
              isOpen = {this.state.isOpen}
              temperature={this.state.temperature}
              wind={this.state.wind}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}

            />

            <SimpleMap
              latitude = {this.state.center.lat}
              longitude = {this.state.center.lon}
              ville = {this.state.city}
              center = {this.state.center}
              zoom = {this.state.zoom}
              
             />

        </div>
      </div>
   )
  }
}
export default App;
