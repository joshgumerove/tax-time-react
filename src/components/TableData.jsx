// import React from "react";
import React, { useEffect, useState } from "react";

const TableData = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3001/api/returns")
    fetch("https://backend-main-repo123.herokuapp.com/api/returns")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <React.Fragment>
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
