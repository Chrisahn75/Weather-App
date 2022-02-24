import { useState, useContext, useEffect } from "react";
import { CityContext } from "../App";
import API from "../components/API";
import CityCard from "../components/CityCard";

export default function Favorites() {
  const cityInfo = useContext(CityContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cityInfo.favorites.length > 0) {
      cityInfo.favorites.map((result) => {
        return fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${result}&units=metric&appid=28f9e922c0090ae3953223780b1074c2`
        )
          .then((res) => res.json())
          .then((res) => {
            setLoading(false);
          })
          .catch((err) => console.log(err));
      });
    } else {
      return null;
    }
  }, [cityInfo.favorites]);

  return (
    <p>You have nothing in your favorites</p> 
  )

}