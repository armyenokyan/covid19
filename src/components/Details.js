import React, { Fragment, useEffect, useState } from "react";
import ButtonToHome from "./ButtonToHome";
import Loading from "./Loading";
import DetailsSelect from "./DetailsSelect";
import DetailsStats from "./DetailsStats";
import DetailsTitle from "./DetailsTitle";
import DetailsChartDaily from "./DetailsChartDaily";
import DetailsChartTotal from "./DetailsChartTotal";
import { withRouter } from "react-router";

const Details = ({ countries, loading, history }) => {
  const [date, setDate] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [active, setActive] = useState([]);
  const [newConfirmed, setNewConfirmed] = useState([]);
  const [newRecovered, setNewRecovered] = useState([]);
  const [newDeaths, setNewDeaths] = useState([]);

  useEffect(() => {
    fetch(`https://corona-api.com/countries${history.location.pathname}`)
      .then((res) => res.json())
      .then((res) => {
        setDate(
          res.data.timeline
            .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            .map((el) => el.date.toString().replace("20", ""))
        );
        setActive(
          res.data.timeline
            .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            .map((el) => el.active)
        );
        setRecovered(
          res.data.timeline
            .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            .map((el) => el.recovered)
        );
        setDeaths(
          res.data.timeline
            .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            .map((el) => el.deaths)
        );

        setNewConfirmed(
          res.data.timeline
            .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            .map((el) => el.new_confirmed)
        );
        setNewRecovered(
          res.data.timeline
            .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            .map((el) => el.new_recovered)
        );
        setNewDeaths(
          res.data.timeline
            .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            .map((el) => el.new_deaths)
        );
      });
  }, [history]);

  return loading ? (
    <Loading />
  ) : (
    countries.map((country, index) => {
      return (
        <Fragment key={index}>
          {country.code.toLowerCase() ===
          history.location.pathname.replace("/", "").toLowerCase() ? (
            <div className="container">
              <DetailsTitle country={country} />
              <DetailsStats country={country} />
              <div className="container">
                <div className="row gx-5">
                  <ButtonToHome />
                  <DetailsSelect countries={countries} />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <DetailsChartTotal
                    date={date}
                    active={active}
                    recovered={recovered}
                    deaths={deaths}
                  />
                  <DetailsChartDaily
                    date={date}
                    newrecovered={newRecovered}
                    newconfirmed={newConfirmed}
                    newdeaths={newDeaths}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </Fragment>
      );
    })
  );
};
export default React.memo(withRouter(Details));
