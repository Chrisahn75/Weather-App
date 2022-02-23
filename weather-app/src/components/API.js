import { useEffect, useContext,useState } from "react";
import { CityContext } from "../App";

export default function Api() {
    const cityInfo = useContext(CityContext);
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityInfo.city}&limit=5&appid=28f9e922c0090ae3953223780b1074c2&units=metric`
        )
        .then((res) => res.json())
        .then((res) =>
            fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lon}&appid=28f9e922c0090ae3953223780b1074c2&units=metric`
            )
        )
        .then((res) => res.json())
        .then((result) => {
            setWeather(result);
            setLoading(false);
            console.log(result);
        });
        
    }, [cityInfo.city]);

    return loading ? (
        <p>On loading...</p>
      ) : (
        <div>
            <p>{weather.name}</p>
            <p>{weather?.main?.temp}</p>
            <p>{weather.weather[0]?.main}</p>
        </div>
    );
}