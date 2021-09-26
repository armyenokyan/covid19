import React from "react";

const DetailsStats = ({ country }) => {
  return (
    <div className="container details margin20">
      <div className="row row-cols-1 row-cols-lg-5 g-3 g-lg-3">
        <div className="col">
          <div className="p-3 border bg-secondary">
            Active
            <p className="details-count">
              {country.latest_data.confirmed -
                country.latest_data.recovered -
                country.latest_data.deaths}
            </p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-info">
            Confirmed (
            {(
              (country.latest_data.confirmed * 100) /
              country.population
            ).toFixed(2)}
            %)
            <p className="details-count">{country.latest_data.confirmed}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-success">
            Recovered (
            {country.latest_data.calculated.recovery_rate?.toFixed(2)}
            %)
            <p className="details-count">{country.latest_data.recovered}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-warning">
            Critical
            <p className="details-count">{country.latest_data.critical}</p>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-danger">
            Deaths ({country.latest_data.calculated.death_rate?.toFixed(2)}%)
            <p className="details-count">{country.latest_data.deaths}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsStats;
