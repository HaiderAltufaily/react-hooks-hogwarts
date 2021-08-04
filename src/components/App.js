import React, { useState } from "react";
import Nav from "./Nav";
import HogLists from "./HogLists";
import hogs from "../porkers_data";
import Filter from "./Filter";
import AddHogs from "./AddHogs";

function App() {
  const [greased, setGreased] = useState(false);

  const [sortBy, setSortBy] = useState("name");
  const [show, setShow] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    image: "",
    "highest medal achieved": "",
  });

  const [newArray, setNewArray] = useState(hogs);
  const [addMenu, setAddMenu] = useState(false);

  function filterHandle(e) {
    setGreased(e.target.checked);
  }

  const displayHogs = newArray
    .filter((hog) => (greased ? hog.greased : true))
    .filter((hog) => show)
    ?.sort((a, b) => {
      if (sortBy === "weight") return a.weight - b.weight;
      else if (sortBy === "name") {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        else return -1;
      }
    });
  function handleHide(e) {
    setShow(!show);
  }

  function handleSort(e) {
    setSortBy(e.target.value);
  }
  function handleForm(e) {
    const name = e.target.name;
    let value = e.target.value;
    if (name === greased) {
      value = e.target.checked;
    }
    console.log(value);
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    setNewArray([...newArray, formData]);
    setFormData({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      image: "",
      "highest medal achieved": "",
    });
  }
  function handleShowMenu() {
    setAddMenu(!addMenu);
  }

  return (
    <div className="App">
      <Nav />
      <Filter
        filterHandle={filterHandle}
        greased={greased}
        setGreased={setGreased}
        handleSort={handleSort}
        sortBy={sortBy}
        handleHide={handleHide}
        show={show}
      />
      <AddHogs
        handleSubmit={handleSubmit}
        handleForm={handleForm}
        formData={formData}
        handleShowMenu={handleShowMenu}
        addMenu={addMenu}
      />

      <HogLists show={show} hogs={displayHogs} />
    </div>
  );
}

export default App;
