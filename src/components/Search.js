import { useState } from "react";

import styles from '../styles/Search.module.css'

const API_KEY = ''; // Fill here with you API key from OpenWeatherMap

export function Search() {
  const [cityName, setCityName] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('http://openweathermap.org/img/wn/02d@2x.png');
    
  async function getWeather() {
    if (!cityName) return
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod != 200) {
      alert("City not found!");
      return;
    }
    setWeatherDescription(`Current weather in ${cityName} is ${data.weather[0].description}`)
    setWeatherIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  }

  return (
    <div className={styles.container}>
      <img src={weatherIcon} alt="weather"/>
      <p>{weatherDescription}</p>
      <input 
        type="text"
        placeholder="Type your city name"
        onChange={(e) => setCityName(e.target.value)}
        value={cityName}
        className={styles.input}
      />
      <button 
        type="submit"
        onClick={getWeather}
        className={styles.button}
      >
        Check Weather
      </button>
    </div>
  );
}