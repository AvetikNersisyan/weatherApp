export default function DailyForecast({data}) {
    return <div className={"hourly-whole"}>
        {data?.forecast.forecastday[0].hour.map((item, idx) => <span className={"hourly-forecast"} key={idx}>
                <img src={item?.condition.icon}/>

            {item.temp_c} &#8451;
            <span> {item.time.substr(item.time.indexOf(" "))} </span>
        </span>)
        }
    </div>;
}
