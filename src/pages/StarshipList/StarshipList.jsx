import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <h3>Starship List</h3>
      <div className="icon-container">
        {starships.map(starship =>
          <Link key={starship.index} to='/starship' state={{ starship }}>
            <div className="starship-div">
              {starship.name}
            </div>
          </Link>
        )}
      </div>
    </div>
    </>
  );
}

export default StarshipList;