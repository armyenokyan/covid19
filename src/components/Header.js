import React from "react";
import Logo from "../img/logo.png";
const Header = () => {
  return (
    <div className="row col-md-12 header-ui">
      <div className="col zindex100">
        <a href="/">
          {" "}
          <img className="logo" alt="covid19" width="220" src={Logo} />
        </a>
      </div>
      <div className="col">
        <div className="date"> {Date().slice(4, 15)} </div>
      </div>
    </div>
  );
};

export default Header;
