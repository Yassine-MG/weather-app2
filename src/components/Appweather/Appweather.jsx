import React, { useEffect, useState } from "react";
import Journey from "../Journey/Journey";

export default function Appweather() {
  const [search, setSearch] = useState("");
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState([]);
  const [dayArray, setDayArray] = useState([]);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [temp2, setTemp2] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      setUpdate(true);
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}/next7days?unitGroup=uk&key=VJ3DZUDUFNBGMJT5A8CCQNU3B&contentType=json`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    }
  };

  //   console.log();
  // data.currentConditions.temp
  useEffect(() => {
    if (update) {
      setDayArray(data.days);
      setCity(data.address);
      setTemp(data.currentConditions.temp);
      setTemp2(data.currentConditions.temp + "°");
    }
    setSearch("");
  }, [data]);

  return (
    <div className="">
      <h1 className="text-center md:text-6xl text-2xl tracking-wide font-semibold text-sky-300">
        Weather App
      </h1>
      <h2
        id="Degre"
        className={
          temp < 0
            ? "text-cyan-600 font-bold md:text-6xl lg:text-9xl fixed text-2xl italic"
            : temp >= 20
            ? "text-red-400 font-bold md:text-6xl lg:text-9xl fixed text-2xl italic"
            : "text-sky-200 font-bold md:text-6xl lg:text-9xl fixed text-2xl italic"
        }
      >
        {temp2}
      </h2>

      <form onSubmit={handleSubmit} className="flex mb-20 justify-center mt-20">
        <input
          className="px-5 py-2 text-lg outline-none tracking-wider md:w-3/12 w-3/6"
          type="text"
          placeholder="Enter city..."
          onChange={handleInput}
          value={search}
        />
        <button
          className="px-5 hover:bg-red-400 hover:shadow-red-900/50 ease-out duration-500 bg-teal-300 rounded-r-lg text-white font-bold text-lg shadow-lg shadow-cyan-500/50"
          type="submit"
        >
          Search
        </button>
      </form>
      <h1 className="text-center font-bold p-10 text-white md:text-6xl text-2xl">
        {city}
      </h1>
      <div className="flex bg-black/25 justify-center flex-wrap">
        {dayArray.map((dayItem, index) => {
          const dayWeek = dayArray[index].datetime;
          console.log(dayWeek);
          let dayName = new Date(dayWeek).toString().split(" ");
          console.log(dayName);
          return (
            <div
              key={`${index}`}
              className="text-center w-screen md:w-1/4 lg:w-1/5 border-2 my-6 mx-5 p-10 border-solid border-sky-200 rounded-lg"
            >
              <Journey
                dayName={dayName[0]}
                dayDate={dayArray[index].datetime}
                temperature={dayArray[index].temp}
                srcIcon={`icons/${dayArray[index].icon}.png`}
                description={dayArray[index].description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
