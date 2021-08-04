import React, { useState } from "react";
import HogCard from "./HogCard";
import { v4 as uuid } from "uuid";
import HogDetails from "./HogDetails";

function HogLists({ hogs, show }) {
  const [details, setDetails] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  function handle() {
    showDetails ? setShowDetails(false) : setShowDetails(true);
  }
  console.log(hogs);
  return (
    <div>
      {show ? (
        <h2 style={{ marginTop: "100px" }}>Click The Hog For Details!</h2>
      ) : null}
      <div
        style={{ marginTop: "100px" }}
        onClick={handle}
        className="ui grid container"
      >
        {hogs.map((hogs) => {
          return (
            <HogCard
              setShowDetails={setShowDetails}
              setDetails={setDetails}
              key={uuid()}
              hogs={hogs}
            />
          );
        })}
      </div>{" "}
      {showDetails ? (
        <HogDetails setShowDetails={setShowDetails} hog={details} />
      ) : null}
    </div>
  );
}

export default HogLists;
