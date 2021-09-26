import React from "react";
import { withRouter } from "react-router";

const DetailsSelect = ({ countries, history }) => {
  const changeOption = (ev) => {
    history.push(`/${ev.target.value.toLowerCase()}`);
  };
  return (
    <div className="col">
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        onChange={changeOption}
        defaultValue={`${history.location.pathname
          .replace("/", "")
          .toLowerCase()}`}
      >
        {countries.map((item) => (
          <option key={item.name} value={item.code.toLowerCase()}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default withRouter(DetailsSelect);
