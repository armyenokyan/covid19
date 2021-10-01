import React from "react";
import RecoveredIcon from "../img/recovered.svg";
import DeathIcon from "../img/death.svg";
import ConfirmedIcon from "../img/confirmed.svg";
import CriticalIcon from "../img/critical.svg";
import ActiveIcon from "../img/activecovid.svg";

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
            <img src={ActiveIcon} alt="Recovered" height="44" width="44" />
            <p>Active</p>
            <p className="details-count">
              {allConfirmed - allRecovered - allDeaths}
            </p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-info">
            <img src={ConfirmedIcon} alt="Recovered" height="44" width="44" />
            <p>Confirmed</p>
            <p className="details-count">{allConfirmed}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-success">
            <img src={RecoveredIcon} alt="Recovered" height="44" width="44" />
            <p>Recovered ({allRecoveredPercent.toFixed(2)}%)</p>
            <p className="details-count">{allRecovered}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-warning">
            <img src={CriticalIcon} alt="Recovered" height="44" width="44" />
            <p>Critical</p>
            <p className="details-count">{allCritical}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-danger">
            <img src={DeathIcon} alt="Recovered" height="44" width="44" />
            <p>Deaths ({(allDeathsPercent / countries.length).toFixed(2)}%)</p>
            <p className="details-count">{allDeaths}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalDetails;
