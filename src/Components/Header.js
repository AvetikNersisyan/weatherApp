import {useEffect, useState} from "react";
import Forecast from "./Forecast";
import location from "../img/location.png";


export default function Header() {
    const [text, setText] = useState("Yerevan");
    const [data, setData] = useState();
    const [message, setMessage] = useState("");


    useEffect(() => {
        let id = setTimeout(() => {
            if (!text.trim()) return;
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=27c4826a9f004c8796a155048212912&q=${text}&days=2&aqi=no&alerts=no`)
                .then((resp) => resp.json())
                .then((data) => {
                    setData(data);
                    if (text.trim() === "") {
                        setMessage("");
                    } else if (data?.error?.code === 1006) {
                        setMessage(<div> Check city name, it seems you typed a wrong name</div>);
                    } else {
                        setMessage(<div className={"current"}>

                                <h3> Just now at
                                    <img src={location} width={"16px"}/> {data?.location?.name}, {data?.location?.country}
                                </h3>
                                <h1> {data?.current?.temp_c}  &#8451; {data?.[0]?.name}

                                   {<img src={data?.current.condition.icon}/>} {data?.current?.condition.text}
                                </h1>
                                <h3> Feels like {data?.current?.feelslike_c}  &#8451; {data?.[0]?.name}</h3>
                            </div>
                        );
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, [text]);


    return (<div className={"header"}>
        <input value={text} onChange={event => setText(event.target.value)} placeholder={"Search"}/>

        {message}
        <div className={"forecast-container"}>
            {data?.forecast?.forecastday.map((item, idx) => {
                return <Forecast key={idx} idx={idx} day={data?.forecast?.forecastday[idx].date} data={data}/>;
            })}
        </div>

    </div>);
}