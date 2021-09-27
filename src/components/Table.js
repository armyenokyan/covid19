import React, { useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import sortAsc from "../img/sort-asc.svg";
import sortDesc from "../img/sort-desc.svg";
import { withRouter } from "react-router";

const Table = ({ countries, setCountries, history }) => {
  const [sort, setSort] = useState(false);
  const toLink = (ev) => {
    history.push(`/${ev.currentTarget.getAttribute("id").toLowerCase()}`);
  };

  const sortTerritory = () => {
    sort
      ? setCountries(
          countries.sort((a, b) =>
            a.name < b.name ? 1 : b.name < a.name ? -1 : 0
          )
        )
      : setCountries(
          countries.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          )
        );

    setSort(!sort);
  };

  const sortTotalCases = () => {
    sort
      ? setCountries(
          countries.sort((a, b) =>
            a.latest_data.confirmed < b.latest_data.confirmed
              ? 1
              : b.latest_data.confirmed < a.latest_data.confirmed
              ? -1
              : 0
          )
        )
      : setCountries(
          countries.sort((a, b) =>
            a.latest_data.confirmed > b.latest_data.confirmed
              ? 1
              : b.latest_data.confirmed > a.latest_data.confirmed
              ? -1
              : 0
          )
        );

    setSort(!sort);
  };

  const sortNewCases = () => {
    sort
      ? setCountries(
          countries.sort((a, b) =>
            a.today.confirmed < b.today.confirmed
              ? 1
              : b.today.confirmed < a.today.confirmed
              ? -1
              : 0
          )
        )
      : setCountries(
          countries.sort((a, b) =>
            a.today.confirmed > b.today.confirmed
              ? 1
              : b.today.confirmed > a.today.confirmed
              ? -1
              : 0
          )
        );

    setSort(!sort);
  };

  const sortTotalDeaths = () => {
    sort
      ? setCountries(
          countries.sort((a, b) =>
            a.latest_data.deaths < b.latest_data.deaths
              ? 1
              : b.latest_data.deaths < a.latest_data.deaths
              ? -1
              : 0
          )
        )
      : setCountries(
          countries.sort((a, b) =>
            a.latest_data.deaths > b.latest_data.deaths
              ? 1
              : b.latest_data.deaths > a.latest_data.deaths
              ? -1
              : 0
          )
        );

    setSort(!sort);
  };

  const sortTotalRecovered = () => {
    sort
      ? setCountries(
          countries.sort((a, b) =>
            a.latest_data.recovered < b.latest_data.recovered
              ? 1
              : b.latest_data.recovered < a.latest_data.recovered
              ? -1
              : 0
          )
        )
      : setCountries(
          countries.sort((a, b) =>
            a.latest_data.recovered > b.latest_data.recovered
              ? 1
              : b.latest_data.recovered > a.latest_data.recovered
              ? -1
              : 0
          )
        );

    setSort(!sort);
  };

  const sortNewDeaths = () => {
    sort
      ? setCountries(
          countries.sort((a, b) =>
            a.today.deaths < b.today.deaths
              ? 1
              : b.today.deaths < a.today.deaths
              ? -1
              : 0
          )
        )
      : setCountries(
          countries.sort((a, b) =>
            a.today.deaths > b.today.deaths
              ? 1
              : b.today.deaths > a.today.deaths
              ? -1
              : 0
          )
        );

    setSort(!sort);
  };

  return (
    <div className="container table-responsive">
      <table className="table table-hover pointer margin20">
        <thead>
          <tr>
            <th onClick={sortTerritory} scope="col">
              Territory
              <div className="float-right">
                <img
                  src={sort ? sortAsc : sortDesc}
                  alt="sorting"
                  width={
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
                      navigator.userAgent
                    )
                      ? "12"
                      : "24"
                  }
                />
              </div>
            </th>
            <th onClick={sortTotalCases} scope="col">
              Total Cases
              <div className="float-right">
                <img
                  src={sort ? sortAsc : sortDesc}
                  alt="sorting"
                  width={
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
                      navigator.userAgent
                    )
                      ? "12"
                      : "24"
                  }
                />
              </div>
            </th>
            <th onClick={sortNewCases} scope="col">
              New Cases
              <div className="float-right">
                <img
                  src={sort ? sortAsc : sortDesc}
                  alt="sorting"
                  width={
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
                      navigator.userAgent
                    )
                      ? "12"
                      : "24"
                  }
                />
              </div>
            </th>
            <th onClick={sortTotalDeaths} scope="col">
              Total Deaths
              <div className="float-right">
                <img
                  src={sort ? sortAsc : sortDesc}
                  alt="sorting"
                  width={
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
                      navigator.userAgent
                    )
                      ? "12"
                      : "24"
                  }
                />
              </div>
            </th>
            <th onClick={sortNewDeaths} scope="col">
              New Deaths
              <div className="float-right">
                <img
                  src={sort ? sortAsc : sortDesc}
                  alt="sorting"
                  width={
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
                      navigator.userAgent
                    )
                      ? "12"
                      : "24"
                  }
                />
              </div>
            </th>
            <th onClick={sortTotalRecovered} scope="col">
              Total Recovered
              <div className="float-right">
                <img
                  src={sort ? sortAsc : sortDesc}
                  alt="sorting"
                  width={
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
                      navigator.userAgent
                    )
                      ? "12"
                      : "24"
                  }
                />
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {countries.map((item) => (
            <tr
              key={item.name}
              id={item.code}
              onClick={toLink}
              className="pointer"
            >
              <th>
                <Link className="link" to={`/${item.code.toLowerCase()}`}>
                  {item.name}
                </Link>
              </th>
              <td>{item.latest_data.confirmed}</td>
              <td
                className={
                  (
                    (item.today.confirmed * 100) /
                    item.latest_data.confirmed
                  ).toFixed(2) >= 2.5 &&
                  (
                    (item.today.confirmed * 100) /
                    item.latest_data.confirmed
                  ).toFixed(2) < 5
                    ? "bg-gray-200"
                    : (
                        (item.today.confirmed * 100) /
                        item.latest_data.confirmed
                      ).toFixed(2) >= 5 &&
                      (
                        (item.today.confirmed * 100) /
                        item.latest_data.confirmed
                      ).toFixed(2) < 6
                    ? "bg-gray-400"
                    : (
                        (item.today.confirmed * 100) /
                        item.latest_data.confirmed
                      ).toFixed(2) >= 6
                    ? "bg-gray-800"
                    : ""
                }
              >
                {item.today.confirmed ? (
                  <>
                    +&nbsp;<b>{item.today.confirmed}</b>
                    <span className="small-percent">
                      (
                      {(
                        (item.today.confirmed * 100) /
                        item.latest_data.confirmed
                      ).toFixed(2)}
                      %)
                    </span>
                  </>
                ) : (
                  <b>0</b>
                )}
              </td>
              <td>
                {item.latest_data.deaths ? (
                  <>
                    <b>{item.latest_data.deaths}</b>
                    <span className="small-percent">
                      ({item.latest_data.calculated.death_rate?.toFixed(2)}%)
                    </span>
                  </>
                ) : (
                  <>
                    <b>0</b>
                  </>
                )}
              </td>
              <td
                className={
                  (
                    (item.today.deaths * 100) /
                    item.latest_data.confirmed
                  ).toFixed(2) >= 0.2 &&
                  (
                    (item.today.deaths * 100) /
                    item.latest_data.confirmed
                  ).toFixed(2) < 0.5
                    ? "bg-red-200"
                    : (
                        (item.today.deaths * 100) /
                        item.latest_data.confirmed
                      ).toFixed(2) >= 0.5 &&
                      (
                        (item.today.deaths * 100) /
                        item.latest_data.confirmed
                      ).toFixed(2) < 0.75
                    ? "bg-red-400"
                    : (
                        (item.today.deaths * 100) /
                        item.latest_data.confirmed
                      ).toFixed(2) >= 0.75
                    ? "bg-red-800"
                    : ""
                }
              >
                {item.today.deaths ? (
                  <>
                    +&nbsp;<b>{item.today.deaths}</b>
                    <span className="small-percent">
                      (
                      {(
                        (item.today.deaths * 100) /
                        item.latest_data.confirmed
                      ).toFixed(2)}
                      %)
                    </span>
                  </>
                ) : (
                  <>
                    <b>0</b>
                  </>
                )}
              </td>
              <td>
                {item.latest_data.recovered ? (
                  <>
                    <b>{item.latest_data.recovered}</b>
                    <span className="small-percent">
                      ({item.latest_data.calculated.recovery_rate?.toFixed(2)}
                      %)
                    </span>
                  </>
                ) : (
                  <>
                    <b>0</b>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(withRouter(Table));
