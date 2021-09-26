import React from "react";
import { useEffect, useState } from "react";

import Loading from "./Loading";
import Table from "./Table";
import TotalDetails from "./TotalDetails";
import TableInfo from "./TableInfo";
import HomeTitle from "./HomeTitle";
import HomeChart from "./HomeChart";

const Home = ({ countries, setCountries, loading }) => {
  // const [countries, setCountries] = useState([]);
  // const [loading, setIsLoading] = useState(false);
  const [date, setDate] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [active, setActive] = useState([]);

  useEffect(() => {
    fetch("https://corona-api.com/timeline")
      .then((res) => res.json())
      .then((res) => {
        setDate(
          res.data
            .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            .map((el) => el.date.toString().replace("20", ""))
        );
        setActive(
          res.data
            .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            .map((el) => el.active)
        );
        setRecovered(
          res.data
            .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            .map((el) => el.recovered)
        );
        setDeaths(
          res.data
            .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
            .map((el) => el.deaths)
        );
      });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="App">
      <HomeTitle countries={countries} />
      <TotalDetails countries={countries} />
      <HomeChart
        date={date}
        active={active}
        recovered={recovered}
        deaths={deaths}
      />
      <TableInfo />
      <Table countries={countries} setCountries={setCountries} />
    </div>
  );
};
export default Home;
