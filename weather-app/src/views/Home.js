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

  const cityInfos = useContext(CityContext);
  const [currentSearch, setCurrentSearch] = useState("");

  const handleCity = () => {
    cityInfos.setCity(currentSearch);
  };

  return (
    <>
      <h1>Home</h1>
    </>
  );
}