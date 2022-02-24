import "../styles/API.css";

export default function CityCard(props) {
    return (
        <div className="card">
        <h2 className="title">{props.data.name}</h2>
            <div className="contentWrapper">
                <div className="dataWrapper">
                    <p>
                        Temperature:
                        <span> {Math.round(props.data.temp)}°C</span>
                    </p>
                    <p>
                        <span>
                        t.max:
                        <span className="bold"> {Math.round(props.data.main.temp_max)}°C</span>
                        </span>
                        <span>
                        t.min:
                        <span className="bold"> {Math.round(props.data.main.temp_min)}°C</span>
                        </span>
                    </p>
                    <p>Сloudiness: {props.data.clouds.all} %</p>
                    <p>Longitude: {props.data.coord.lon}°</p>
                    <p>Latitude: {props.data.coord.lat}°</p>
                </div>
                    <div className="imageWrapper">
                        <img
                            className="weatherIcon"
                            src={`http://openweathermap.org/img/wn/${props.data.weather?.[0].icon}@4x.png`}
                            alt="weather"
                        />
                    </div>
            </div>
    </div>
    );
  }