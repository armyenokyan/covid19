import React from "react";

const DetailsTitle = ({ country }) => {
  return (
    <div className="container details-title">
      Details for {country.name.toUpperCase()}
    </div>
  );
};

export default DetailsTitle;
