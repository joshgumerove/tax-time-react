import React from "react";

const Headers = () => {
  const headersArray = [
    "Client ID",
    "Return Type",
    "Description",
    "Hours Estimate",
    "Due",
  ];

  return (
    <React.Fragment>
      <tr>
        {headersArray.map((header) => {
          return (
            <th className="header-table" key={header}>
              {header}
            </th>
          );
        })}
      </tr>
    </React.Fragment>
  );
};

export default Headers;
