import React from "react";
import RecoveredIcon from "../img/recovered.svg";
import DeathIcon from "../img/death.svg";
import ConfirmedIcon from "../img/confirmed.svg";
import CriticalIcon from "../img/critical.svg";
import ActiveIcon from "../img/activecovid.svg";

const DetailsStats = ({ country }) => {
  return (
    <div className="container details margin20">
      <div className="row row-cols-1 row-cols-lg-5 g-3 g-lg-3">
        <div className="col">
          <div className="p-3 border bg-secondary">
            <img src={ActiveIcon} alt="Recovered" height="44" width="44" />
            <p>Active</p>
            <p className="details-count">
              {country.latest_data.confirmed -
                country.latest_data.recovered -
                country.latest_data.deaths}
            </p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-info">
            <img src={ConfirmedIcon} alt="Recovered" height="44" width="44" />
            <p>
              Confirmed (
              {(
                (country.latest_data.confirmed * 100) /
                country.population
              ).toFixed(2)}
              %)
            </p>
            <p className="details-count">{country.latest_data.confirmed}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-success">
            <img src={RecoveredIcon} alt="Recovered" height="44" width="44" />
            <p>
              Recovered (
              {country.latest_data.calculated.recovery_rate?.toFixed(2)}
              %)
            </p>
            <p className="details-count">{country.latest_data.recovered}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-warning">
            <img src={CriticalIcon} alt="Recovered" height="44" width="44" />
            <p>Critical</p>
            <p className="details-count">{country.latest_data.critical}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-danger">
            <img src={DeathIcon} alt="Recovered" height="44" width="44" />
            <p>
              Deaths ({country.latest_data.calculated.death_rate?.toFixed(2)}%)
            </p>
            <p className="details-count">{country.latest_data.deaths}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsStats;
