import React from "react";

function HogCard({ hogs, setDetails, setShowDetails }) {
  function handleDetails() {
    setDetails(hogs);
    setShowDetails(true);
  }
  return (
    <div
      style={{ background: "#cccc" }}
      onClick={handleDetails}
      className="ui eight wide column card "
    >
      <div>
        <img src={hogs.image} alt="" />{" "}
      </div>
      <div>
        <h2> {hogs.name} </h2>
      </div>
    </div>
  );
}

export default HogCard;
