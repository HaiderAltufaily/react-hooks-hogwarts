import React from "react";

function AddHogs({
  handleForm,
  formData,
  handleSubmit,
  handleShowMenu,
  addMenu,
}) {
  const showForm = addMenu ? (
    <form onSubmit={(e) => handleSubmit(e)} action="">
      <div className="container">
        <label htmlFor="">Name</label>
        <input
          required
          onChange={(e) => handleForm(e)}
          value={formData.name}
          type="text"
          name="name"
          id=""
        />
      </div>
      <div className="container">
        <label htmlFor="">Specialty</label>
        <input
          required
          onChange={(e) => handleForm(e)}
          value={formData.specialty}
          type="text"
          name="specialty"
          id=""
        />
      </div>
      <div className="container">
        <label htmlFor="">Greased</label>
        <input
          onChange={(e) => handleForm(e)}
          value={formData.greased}
          type="checkbox"
          name="greased"
          id=""
        />
      </div>
      <div className="container">
        <label htmlFor="">Weight</label>
        <input
          required
          onChange={(e) => handleForm(e)}
          value={formData.weight}
          type="text"
          name="weight"
          id=""
        />
      </div>
      <div className="container">
        <label htmlFor="">Image</label>
        <input
          onChange={(e) => handleForm(e)}
          value={formData.image}
          type="text"
          name="image"
          id=""
        />
      </div>
      <div className="container">
        <label htmlFor="">Highest Medal</label>
        <input
          required
          onChange={(e) => handleForm(e)}
          value={formData["highest medal achieved"]}
          type="text"
          name="highest medal achieved"
          id=""
        />
      </div>
      <div className="btn">
        <button type="submit">Add </button>
      </div>
    </form>
  ) : null;
  return (
    <div className="formContainer">
      <button onClick={handleShowMenu}>Add Hog</button>

      {showForm}
    </div>
  );
}

export default AddHogs;
