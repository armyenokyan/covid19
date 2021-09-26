import React from "react";

const DetailsTitle = ({country}) => {
  return (
    <div className="container details-title">
    Details for {country.name.toUpperCase()}
    <img
      src={`https://www.countryflags.io/${country.code.toLowerCase()}/flat/48.png`}
      alt={country.code}
      className="flag"
    />
  </div>
  );
};

export default DetailsTitle;
