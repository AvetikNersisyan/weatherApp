import {useEffect, useState} from "react";

export default function  Forecast({data, day, idx}) {
    const [message, setMessage] = useState("")



    return (<div className={"forecast"}>
        <h3> Forecast for  {day}  </h3>
        <div className={"icon"}>
            <p>{data?.forecast?.forecastday[idx].day.condition.text}</p>
            <img src={data?.forecast?.forecastday[idx].day.condition.icon }/>

        </div>

        <div>
            <p>Max {data?.forecast?.forecastday[idx].day.maxtemp_c } &#8451; </p>
            <p>Min {data?.forecast?.forecastday[idx].day.mintemp_c } &#8451; </p>
        </div>

        <div>
            <p>Sunrise at {data?.forecast?.forecastday[idx].astro.sunrise} </p>
            <p>Max wind speed {data?.forecast?.forecastday[idx].day.maxwind_kph} kph   </p>
        </div>
        <div>
            <p>Sunrise at {data?.forecast?.forecastday[idx].astro.sunrise} </p>
            <p>Sunset at {data?.forecast?.forecastday[idx].astro.sunset} </p>
        </div>
<div className={"chance-div"}>
    <p>Rain chance {data?.forecast?.forecastday[idx].day.daily_chance_of_rain}% </p>
    <p>Snow chance {data?.forecast?.forecastday[idx].day.daily_chance_of_snow}% </p>
</div>


    </div>)
}