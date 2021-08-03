import React from "react";

function AddHogs({ handleForm, formData, handleSubmit }) {
  return (
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
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogs;
