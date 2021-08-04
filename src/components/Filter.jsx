import React from "react";

function Filter({
  filterHandle,
  greased,
  sortBy,
  handleSort,
  handleHide,
  show,
}) {
  function handle(e) {
    filterHandle(e);
  }
  return (
    <div className="filterContainer">
      <div className="filter">
        <label id="filterLabel" htmlFor="">
          Greased
        </label>
        <input
          value={greased}
          onChange={handle}
          type="checkbox"
          name=""
          id=""
        />{" "}
      </div>
      <div className="sort">
        <label htmlFor=""> Sort </label>
        <select
          value={sortBy}
          onChange={(e) => handleSort(e)}
          name="name"
          id=""
        >
          <option value="name">name</option>
          <option value="weight">weight</option>
        </select>
      </div>
      <div className={"hide"}>
        <button onClick={handleHide}>
          {" "}
          {show ? "Hide Hogs" : "Show Hogs"}{" "}
        </button>
      </div>
    </div>
  );
}

export default Filter;
