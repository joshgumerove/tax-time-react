// import React from "react";
import React, { useEffect, useState } from "react";

const TableData = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/returns")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <React.Fragment>
      {/* <td>Fake ID</td>
        <td>1040</td>
        <td>A very Difficult Return</td>
        <td>10</td>
        <td>4/15/2021</td> */}
      {data.map(
        ({
          client_id,
          due_date,
          return_type,
          description,
          time_estimate,
          id,
        }) => {
          return (
            <tr key={id}>
              <td>{client_id}</td>
              <td>{return_type}</td>
              <td>{description}</td>
              <td>{time_estimate}</td>
              <td>{due_date}</td>
            </tr>
          );
        }
      )}
    </React.Fragment>
  );
};

export default TableData;
