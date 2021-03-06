import React, { useState } from "react";

const Form = () => {
  // const api = "http://localhost:3001/api/clients";
  const api = "https://backend-main-repo123.herokuapp.com/api/clients";

  const [clientId, setClientId] = useState(0);
  const [returnType, setReturnType] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(0);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReturn = {
      client_id: parseInt(clientId),
      return_type: returnType,
      description: description,
      time_estimate: parseInt(time),
      due_date: new Date(date),
    };
    fetch(`${api}/${newReturn.client_id}/returns`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReturn),
    }).then((res) => res.json());
  };
  return (
    <form onSubmit={handleSubmit} className="time-form">
      <div>
        <label>Client ID:</label>
        <input
          type="text"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
        />
      </div>
      <div>
        <label>Return Type</label>
        <input
          type="text"
          value={returnType}
          onChange={(e) => setReturnType(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Hours Estimate</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label>Due Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <input class="btn" type="submit" value="Submit" />
    </form>
  );
};

export default Form;
