import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from '../Icons/search.jpeg' 
import clear_icon from '../Icons/clear.png' 
import cloud_icon from '../Icons/cloud.png' 
import drizzle_icon from '../Icons/drizzle.png' 
import humidity_icon from '../Icons/humidity.png' 
import rain_icon from '../Icons/rain.png' 
import snow_icon from '../Icons/snow.png' 
import wind_icon from '../Icons/wind.png' 

export const WeatherApp = () => {
let API_KEY = "9a755f3a7446da52d3b4bdc793f3fe2f"
const[wicon,setWicon] = useState(cloud_icon);

const search = async ()=>{
      const element = document.getElementsByClassName("cityInput")
      if(element[0].value===''){return 0}

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_KEY}`
      
      let response = await fetch(url);
      let data = await response.json();

      const humidity = document.getElementsByClassName("humidity-percent");
      const wind = document.getElementsByClassName("wind-rate");
      const temp = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");

      humidity[0].innerHTML=data.main.humidity+" %";
      wind[0].innerHTML = data.wind.speed+" km/h";
      temp[0].innerHTML = data.main.temp+" °C";
      location[0].innerHTML = data.name;
     
      if(data.weather[0].icon==="01d" ||data.weather[0].icon==="01n")
      {setWicon(clear_icon)}
      else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n")
      {setWicon(cloud_icon)}
      else if(data.weather[0].icon==="03d" ||data.weather[0].icon==="03n")
      {setWicon(clear_icon)}
      else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n")
      {setWicon(drizzle_icon)}
      else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n")
      {setWicon(rain_icon)}
      else if(data.weather[0].icon==="10d" ||data.weather[0].icon==="10n")
      {setWicon(rain_icon)}
      else if(data.weather[0].icon==="11" ||data.weather[0].icon==="11")
      {setWicon(rain_icon)}
      else if(data.weather[0].icon==="13d" ||data.weather[0].icon==="13n")
      {setWicon(snow_icon)}
      else{setWicon(clear_icon)}

      

}

  return (
    <div className='container'>  
        <div className="topBar">
            <input type="text" className='cityInput' placeholder='Search'/>
            <div className="serach-icon">
                <img src={search_icon} alt="icon"  onClick={search}/>
            </div>
        </div>
        <div className="weather-image">
                <img src={wicon} alt="icon" />
            </div>
            <div className="weather-temp">--</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img className="icon" src={humidity_icon} alt="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                    <div className="element">
                    <img className="icon" src={wind_icon} alt="icon" />
                    <div className="data">
                        <div className="wind-rate">64 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
                </div>
            </div>
            <p className="footer">
            ©Copyrights Reserved by Selva
            </p>
    </div>
  )
}
