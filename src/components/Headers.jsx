import React from "react";

const Headers = () => {
  const headersArray = [
    "Client ID",
    "Return Type",
    "Description",
    "Time Estimate",
    "Due",
  ];

  return (
    <React.Fragment>
      <tr>
        {headersArray.map((header) => {
          return <th>{header}</th>;
        })}
      </tr>
    </React.Fragment>
  );
};

export default Headers;
