import React from "react";

export default function Journey(props) {
  return (
    <div className="">
      <div className="day-container">
        <div className="city-date">
          <h1 className="text-5xl font-semibold text-sky-200 mb-8 italic">{props.dayName}</h1>
          <h2 className="text-2xl font-semibold text-sky-200">
            {props.dayDate}
          </h2>
        </div>

        <div className="previsions ">
          <div className="flex justify-center ">
            <img
              src={props.srcIcon}
              className="m-0 "
              alt="Icone"
              onError={(event) => {
                event.target.src = "icons/cloudy.png";
              }}
            ></img>
          </div>

          <h3
            className={
              props.temperature <= 0
                ? "text-cyan-600 font-extrabold text-lg"
                : props.temperature >= 20
                ? "text-red-400 font-extrabold text-lg"
                : "text-sky-200 font-extrabold text-lg"
            }
          >
            {props.temperature}°C
          </h3>
          <p className="text-sky-200 ">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
