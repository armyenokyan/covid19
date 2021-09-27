import React from "react";
import { withRouter } from "react-router";

const DetailsSelect = ({ countries, history }) => {
  const changeSelect = (ev) => {
    history.push(`/${ev.target.value.toLowerCase()}`);
  };
  return (
    <div className="col">
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        onChange={changeSelect}
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
