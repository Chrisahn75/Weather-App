import { useContext, useEffect } from "react";
import { CityContext } from "../App";
import CityCard from "../components/CityCard";
    
export default function Favorites() {
    const cityInfo = useContext(CityContext);

    useEffect(() => [cityInfo.city]);

    return(
        <>
            <h1>Favorites</h1>
        </>
    )
}