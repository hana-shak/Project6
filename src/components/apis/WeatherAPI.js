// import React, { Component } from 'react'

// export class WeatherAPI extends Component {
    
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             temprature : '',
//             city: '',
//             country: '',
//             latitude:null,
//             longitude:null,
//             humidity: '',
//             description: '',
//             error:'',
//         }

//         window.navigator.geolocation.getCurrentPosition(
    
//             (position) => {
//                 this.setState({
//                     latitude:position.coords.latitude,
//                     longitude:position.coords.longitude
//                 })

//             },

//             (err)=>{
//                 this.setState({
//                     errMsg:"Can't get your location! Please try again later"
//                 })
//             }
//         )
//     }

    
//     // const API_KEY = "260331c980f988747d85addcabe877ff",
//     getWeatheGeolocation = async (lat, lon) => {
    
//     const API_KEY = "f1958565a5a6a00d52f54e60c6eb4f36"
//     // const latitude = this.state.latitude
//     // const longitude = this.state.longitude
 
//     const api = await fetch(`api.openweathermap.org/data/2.5/forecast?lat={${lat}}&lon={${lon}}&appid={f1958565a5a6a00d52f54e60c6eb4f36}`);
//     const data = await api.json();

//     // api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid={API key}
//     // api.openweathermap.org/data/2.5/weather?lat={${this.state.latitude}}&lon={${this.state.latitude}}&appid={260331c980f988747d85addcabe877ff}
//     // 
//     console.log(data);
//     }
    
    
    
    
//     render() {
        

//         return (
//             <div>
//                 <h1>{this.state.latitude}</h1><br /><h1>
//                 {this.state.longitude}{this.state.errMsg}</h1>
//                 <button onClick={this.getWeatheGeolocation(31.9715942,35.8716873)}>GET Weather</button>

//             </div>
//         )
//     }
// }

// export default WeatherAPI






import React, { Component } from 'react';
import "../Weather.css"


const API_KEY = "f1958565a5a6a00d52f54e60c6eb4f36";

class WeatherAPI extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            temprature : '',
            city: '',
            country: '',
            latitude:null,
            longitude:null,
            humidity: '',
            description: '',
            error:'',
            icon:"",
            data:'',
        }

        window.navigator.geolocation.getCurrentPosition(
    
            (position) => {
                this.setState({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                })

            },

            (err)=>{
                this.setState({
                    errMsg:"Can't get your location! Please try again later"
                })
            }
        )
    }


   

  getWeather = async (e) => {
    // e.preventDefault();
    const lat = this.state.latitude;
    const lon = this.state.longitude;
    // console.log(city,country);
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await api.json();
    console.log(data);
    this.setState({
        icon:data.weather[0].icon,
    })

    console.log("weather");
    if (lat && lon) {
      this.setState({
        temprature: data.main.temp,
        maxtemprature: data.main.temp_max,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        windspeed: data.wind.speed,
        error: '',
      });
    } else {
      this.setState({
        temprature: '',
        maxtemprature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        windspeed:'',
        error: "can't get your location",
      });
    }   
  }


  
  componentDidMount() {
        window.addEventListener('load', this.getWeather);
 }
  
  render(){
      
      const iconurl = "http://openweathermap.org/img/w/"+this.state.icon+".png";
  return (
    <>
       {/* <h1>{this.state.icon}</h1>
       <img src={iconurl} /> */}
       {/* <div className="weather-wrapper">
            <div className="weather-card madrid"> */}
            {/* <div className="weather-icon sun" /> */}
            {/* <img src={iconurl} />
            <h1>{this.state.temprature}</h1>
            <p>{this.state.city}</p>
        </div>
        </div> */}
        
        {/* <article className="widget">
  <div className="weatherIcon"><img src={iconurl} /></div>
  <div className="weatherInfo">
    <div className="temperature"><span>{this.state.temprature}</span></div>
    <div className="description">    
      <div className="weatherCondition">CLOUDY</div>    
      <div className="place">{this.state.city}</div>
    </div>
  </div>
  <div className="date">1st Jan</div>
</article> */}


<div id="weather_wrapper">
  {/* <div className="weatherCard"> */}
    {/* <div className="currentTemp">
      <span className="temp">{this.state.temprature}</span>
      <span className="location">{this.state.city}</span> 
    </div>*/}
    {/* <div className="currentWeather"> */}
      {/* <div className=""> */}
      {/* <span className="location">{this.state.city}</span>
      <span className="temp">{this.state.temprature}</span> */}
      {/* </div> */}
      {/* <span className="">{this.state.temprature}</span> */}
      {/* <span >{this.state.city}</span> */}
      <div className="info">
        <span className="desc">{this.state.city}</span>
        
        {/* <span className="">{this.state.temprature}</span> */}
        {/* <span>{this.state.city}</span> */}
        <img style={{height:'3.5em'}} src={iconurl} />
        
        <span className="temp">{this.state.temprature} °C</span>
      </div>
    </div>
  {/* </div> */}
{/* </div> */}


    </>
  );
}
}
export default WeatherAPI;