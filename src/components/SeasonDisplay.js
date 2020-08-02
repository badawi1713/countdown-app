import React from "react";

import "./SeasonDisplay.css";

const getSeason = (latitude, month) => {
  console.log(latitude);
  if (month > 2 && month < 9) {
    console.log(month);
    return latitude > 0 ? "summer" : "summer";
  } else {
    return latitude < 0 ? "summer" : "summer";
  }
};

const seasonConfig = {
  summer: {
    seasonTime: "Summer",
    text: "Let's hit the beach, Bob!",
    icon: "sun",
    color: "orange",
  },
  winter: {
    seasonTime: "Winter",
    text: "Hi Bob. Brr, it is freezing this morning!",
    icon: "snowflake",
    color: "teal",
  },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, props.month);

  const { text, icon, seasonTime, color } = seasonConfig[season];

  return (
    <div className="season-display">
      {/* <i className={`icon-left massive ${icon} icon`}></i> */}
      <h1 className={`ui text ${color}`}>
        {seasonTime} Time{" "}
        <span>
          <i className={`large ${icon} icon ${color}`}></i>
        </span>
      </h1>
      <h1>{text}</h1>
      {/* <i className={`icon-right massive ${icon} icon`}></i> */}
    </div>
  );
};

export default SeasonDisplay;
