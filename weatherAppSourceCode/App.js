//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import { useState, useEffect } from "react";

import axios from "axios";

import Weather from "./components/Weather";
// import { latitude, longitude } from 'use-position';


const  App=() => {
    const [weather,setWeather]= useState();
    const latitude  =   39.925533;
    const longitude =   32.866287;
    const getWeatherData = async (lat, lon ) => {
    const key= process.env.REACT_APP_WEATHER_API_KEY;
    const lang=navigator.language.split("-")[0];
    
    try{
            const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`);
            setWeather(data);
        }catch{
            alert("Veri alınırken hata oluştu..");
        }
    };

    useEffect(() => {
            latitude && longitude && getWeatherData(latitude,longitude);
        }, [latitude, longitude])


    return <div>
       <h2>Hava Durumu</h2>
       <Weather weather={weather}/>
    </div>
}
export default   App;