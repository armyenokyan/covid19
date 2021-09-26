import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Loading from "./components/Loading";
import Details from "./components/Details";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";

import "./bootstrap-5.1.1/css/bootstrap.css";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://corona-api.com/countries")
      .then((res) => res.json())
      .then((res) => {
        setCountries(
          res.data
            .filter((el) => el.latest_data.confirmed > 0)
            .sort((a, b) =>
              a.latest_data.confirmed < b.latest_data.confirmed
                ? 1
                : b.latest_data.confirmed < a.latest_data.confirmed
                ? -1
                : 0
            )
        );
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              countries={countries}
              setCountries={setCountries}
              loading={loading}
            />
          </Route>
          {countries.map((item) => (
            <Route key={item.code} exact path={`/${item.code}`}>
              <Details countries={countries} loading={loading} />
            </Route>
          ))}

          {loading ? <Loading /> : <Route component={Error404} />}
        </Switch>
      </Router>

      <Footer />
    </>
  );
}
