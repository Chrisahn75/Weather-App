import { useEffect, useContext,useState } from "react";
import { CityContext } from "../App";
import "../styles/API.css";

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
        })
        .catch((err) => console.log(err));
    }, [cityInfo.city]);

    return loading ? (
        <p>On loading...</p>
      ) : (
        <div className="card">
            <h2 className="title">{weather.name}</h2>
                <div className="contentWrapper">
                    <div className="dataWrapper">
                        <p>
                            Temperature:
                            <span> {Math.round(weather.main.temp)}°C</span>
                        </p>
                        <p>
                            <span>
                            t.max:
                            <span className="bold"> {Math.round(weather?.main.temp_max)}°C</span>
                            </span>
                            <span>
                            t.min:
                            <span className="bold"> {Math.round(weather?.main.temp_min)}°C</span>
                            </span>
                        </p>
                        <p>Сloudiness: {weather?.clouds.all} %</p>
                        <p>Longitude: {weather?.coord.lon}°</p>
                        <p>Latitude: {weather?.coord.lat}°</p>
                    </div>
                        <div className="imageWrapper">
                            <img
                                className="weatherIcon"
                                src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@4x.png`}
                                alt="weather"
                            />
                        </div>
                </div>
        </div>
    );
}