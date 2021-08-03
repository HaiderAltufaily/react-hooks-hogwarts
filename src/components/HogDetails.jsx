import React from "react";

function HogDetails({ hog, setShowDetails }) {
  function handleQuitBtn() {
    setShowDetails(false);
  }
  return (
    <div className=" hogDetails">
      <button onClick={handleQuitBtn} className="quit"></button>
      <div className="image">
        <img src={hog.image} alt="" />
      </div>
      <div>
        <h2> {hog.name} </h2>
        <h4>Specialty: {hog.specialty}</h4>
        <h4>Greased: {hog.greased ? "No" : "Yes"}</h4>
        <h4>Weight: {hog.weight}</h4>
      </div>
    </div>
  );
}

export default HogDetails;
