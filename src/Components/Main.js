import Header from "./Header";
import DailyForecast from "./DailyForecast";
import {useState} from "react";

export default function Main () {

    const [data, setData] = useState();

    const onDataFetch = (newData) => {
        setData(newData)
    }

    return <div>
        <Header onDataFetch={onDataFetch} />
        <h2 id={"hourly-title"}>  Hourly forecast  for tomorrow</h2>

        <DailyForecast data={data}/>

    </div>
}