import { useState } from "react";
import { useWeather } from "../context/Context";
import ReactAnimatedWeather from "react-animated-weather";

const Forcast = () => {
  const x = useWeather();
  const [search, setSearch] = useState("");

  console.log(search);
  return (
    <>
      <div className="d-flex justify-content-center f-wrapper px-2 py-1">
        <div className="d-flex flex-column align-items-center w-100">
          {/* ICON */}
          <div className="forcast-icon py-1 border-bottom">
            <ReactAnimatedWeather
              size={122}
              color={"white"}
              icon={x.icon}
              animate={true}
            />
          </div>

          {/* WEATHER */}
          <div className="forcast-weather py-2 border-bottom">
            <h3 className="mb-0 text-white">weather</h3>
          </div>

          {/* SEARCH BAR */}
          <div className="forcast-search py-2 border-bottom d-flex justify-content-between align-items-center">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar form-control"
              placeholder="Search any city"
            />
            <button className="search-btn">Search</button>
          </div>

          {/* CITY */}
          <div className="forcast-city py-4 border-bottom w-100 d-flex justify-content-evenly align-items-center">
            <h3 className="mb-0 text-white">city</h3>
            <h3 className="mb-0 text-white">
              <span className="fw-light">|</span>
            </h3>
            <h3 className="mb-0 text-white">country</h3>
          </div>

          {/* FORCAST DATA */}

          {/* TEMP */}
          <div className="w-100 py-2 border-bottom d-flex justify-content-between align-items-center">
            <p className="mb-0 text-white">Temparature</p>
            <p className="mb-0 text-white">temperatureC&deg;C</p>
          </div>

          {/* HUMIDITY */}
          <div className="w-100 py-2 border-bottom d-flex justify-content-between align-items-center">
            <p className="mb-0 text-white">Humidity</p>
            <p className="mb-0 text-white">humidity%</p>
          </div>

          {/* VISIBILITY */}
          <div className="w-100 py-2 border-bottom d-flex justify-content-between align-items-center">
            <p className="mb-0 text-white">Visibility</p>
            <p className="mb-0 text-white">visibility mi</p>
          </div>

          {/* WIND SPEED */}
          <div className="w-100 py-2 border-bottom d-flex justify-content-between align-items-center">
            <p className="mb-0 text-white">Wind Speed</p>
            <p className="mb-0 text-white">WIND Km/h</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forcast;
