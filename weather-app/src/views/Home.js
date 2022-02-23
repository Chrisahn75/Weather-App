import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CityContext } from "../App";
import API from "../components/API";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const cityInfo = useContext(CityContext);
  const [currentSearch, setCurrentSearch] = useState("");

  const handleSearch = (e) => {
    return setCurrentSearch(e.target.value);
  };

  const handleCity = () => {
    cityInfo.setCity(currentSearch);
  };
  const handleFavorites = () => {
    if (cityInfo.favorites.length < 3) {
      cityInfo.setFavorites((prevState) => {
        return [... prevState,cityInfo.city];
      });
      console.log(cityInfo.favorites);
    } else {
      return alert("Sorry you can only have 3 cities in your favorites");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("city", {
            required: "this is required",
          })}
          placeholder="Search a city"
          type="text"
          onChange={handleSearch}
        />
        {<span>{errors.city?.message}</span>}
        <button onClick={handleCity}>Search Location</button>
        <button onClick={handleFavorites}>Put my favorites</button>
      </form>
      <API></API>
    </>
  );
}