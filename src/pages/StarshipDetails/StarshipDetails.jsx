import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return ( 
    <>
      <div className="icon-container">
        {starshipDetails.name ?
        <div className="starship-div">
          <h2>Name: {starshipDetails.name}</h2>
          <h2>Model: {starshipDetails.model}</h2>
          <Link to='/starship-list'>Return</Link>
        </div>
        :
        <>
          <p>Loading...</p>
        </>
        }
      </div>
    </>
  );
}

export default StarshipDetails;
