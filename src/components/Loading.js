import React from "react";
import loadingGif from "../img/loading.gif";

const Loading = () => {
  return (
    <div className="row details">
      <div>
        <img alt="loading" src={loadingGif} width="300" />
      </div>
    </div>
  );
};

export default Loading;
