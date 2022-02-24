import { useState, useContext, useEffect } from "react";
import { CityContext } from "../App";
import API from "../components/API"
import CityCard from "../components/CityCard";

export default function Favorites() {
  const cityInfo = useContext(CityContext);
  const [dataCity, setDataCity] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cityInfo.favorites.length > 0) {
      cityInfo.favorites.map((result) => {
        return fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${result}&limit=5&appid=28f9e922c0090ae3953223780b1074c2&units=metric`
        )
          .then((res) => res.json())
          .then((res) =>
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lon}&appid=28f9e922c0090ae3953223780b1074c2&units=metric`
            )
          )
          .then((res) => res.json())
          .then((res) => {
            setLoading(false);
        })
          .then((res) => handleDataCity(res))
          .catch((err) => console.log(err));
      });
    } else {
      return null;
    }
  }, [cityInfo.favorites]);

  function handleDataCity(data) {
    return setDataCity((prevState) => {
      return [...prevState, data];
    });
  }
  const fav = () => {
    return dataCity.length > 0
      ? dataCity.map((res, i) => {
          return <CityCard key={i}  data={res}/>;
        })
      : null;
  };

  return loading ? (
    <p>You have nothing in your favorites</p> 
   ) : (
    <div>
        {fav()}
    </div>
  );
}