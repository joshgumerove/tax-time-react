import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Client ID:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Return Type</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Hours Estimate</label>
        <input
          type="number"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Hours Estimate</label>
        <input
          type="date"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
