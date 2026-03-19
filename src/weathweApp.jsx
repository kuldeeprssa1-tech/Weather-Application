import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherinfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike: 24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.04,
        humidity:47,
        weather:"haze",
    })
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <p style={{fontSize:"20px", marginBottom:"20px"}}>Real-Time Weather forecast </p>
            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo}/> 
        </div>
    )
}