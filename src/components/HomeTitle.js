import React from "react";

const HomeTitle = ({ countries }) => {
  return (
    <div className="container ">
      <div className="home-title header-gradient">
        Confirmed territories in total <b>{countries.length}</b>
      </div>
    </div>
  );
};

export default HomeTitle;
