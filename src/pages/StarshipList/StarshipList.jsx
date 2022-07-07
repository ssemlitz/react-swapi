import { useEffect } from "react";
import { useState } from "react";
import { getAllStarships } from "../../services/sw-api";

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return ( 
    <>
      <h2>Starships</h2>
    </>
  );
}

export default StarshipList;