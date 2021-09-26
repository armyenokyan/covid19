import React from "react";

const TotalDetails = ({ countries }) => {
  const allConfirmed = countries.reduce(
    (count, currentValue) => count + currentValue.latest_data.confirmed,
    0
  );
  const allDeaths = countries.reduce(
    (count, currentValue) => count + currentValue.latest_data.deaths,
    0
  );

  const allDeathsPercent = countries.reduce(
    (count, currentValue) =>
      count + currentValue.latest_data.calculated.death_rate,
    0
  );
  const allRecovered = countries.reduce(
    (count, currentValue) => count + currentValue.latest_data.recovered,
    0
  );
  const allRecoveredPercent = (allRecovered * 100) / allConfirmed;

  const allCritical = countries.reduce(
    (count, currentValue) => count + currentValue.latest_data.critical,
    0
  );

  return (
    <div className="container details">
      <div className="row row-cols-1 row-cols-lg-5 g-3 g-lg-3">
        <div className="col">
          <div className="p-3 border bg-secondary">
            Active
            <p className="details-count">
              {allConfirmed - allRecovered - allDeaths}
            </p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-info">
            Confirmed
            <p className="details-count">{allConfirmed}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-success">
            Recovered ({allRecoveredPercent.toFixed(2)}%)
            <p className="details-count">{allRecovered}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-warning">
            Critical
            <p className="details-count">{allCritical}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-danger">
            Deaths ({(allDeathsPercent / countries.length).toFixed(2)}%)
            <p className="details-count">{allDeaths}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalDetails;
