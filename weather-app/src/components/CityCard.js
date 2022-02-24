import { useState } from "react";
import "../styles/API.css";
import Favorites from "../views/Favorites";

export default function CityCard() {
    const [weather] = useState({});
    return (
        <div className="card">
        <h2 className="title">{weather.info.name}</h2>
            <div className="contentWrapper">
                <div className="dataWrapper">
                    <p>
                        Temperature:
                        <span> {Math.round(weather.info.temp)}°C</span>
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