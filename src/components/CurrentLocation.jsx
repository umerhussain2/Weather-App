import axios from "axios";
import API from "../API";
import loder from "../images/WeatherIcons.gif";
import { React, useState, useEffect } from "react";
import { useWeather } from "../context/Context";
import ReactAnimatedWeather from "react-animated-weather";

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

const Hours = new Date().getHours();
const Mins = new Date().getMinutes();

const defaults = {
  color: "white",
  size: 112,
  animate: true,
};

// MAIN COMPONENT ------------------------------------

const CurrentLocation = () => {
  const [data, setData] = useState(null);
  const x = useWeather();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setTimeout(
        () =>
          x.getCurrentLocation(
            position.coords.latitude,
            position.coords.longitude
          ),
        1000
      );
    });
  }, []);

  const sendW = (w) => {
    x.getIcon(w);
  };

  useEffect(() => {
    sendW(x.weather);
    setData(x.city);
  }, [x.weather]);

  return (
    <>
      {data ? (
        <>
          <div className="d-flex flex-column justify-content-center align-items-center p-2 cl-wrapper">
            {/* Heading */}
            <div className="d-flex justify-content-center align-self-start">
              <h3 className="mb-0- text-dark border-bottom border-dark pb-2">
                Current Location
              </h3>
            </div>

            <div className="cl-inner-wrapper">
              {/* Weather Icon */}
              <div className="py-2">
                <ReactAnimatedWeather
                  size={defaults.size}
                  color={"black"}
                  animate={defaults.animate}
                  icon={x.icon}
                />
              </div>

              <div className="py-2">
                <h2 className="mb-0 text-dark">{x.weather}</h2>
              </div>

              <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                <div className="text-start">
                  <p className="mb-0 text-dark border-bottom border-dark py-1">
                    {x.country}
                  </p>
                  <p className="mb-0 text-dark border-bottom border-dark py-1">
                    {x.city}
                  </p>
                  <p className="mb-0 text-dark border-bottom border-dark py-1">
                    {dateBuilder(new Date())}
                  </p>
                </div>
                <div className="text-end">
                  <h2 className="mb-0 text-dark  border-bottom border-dark py-1">
                    {x.temperatureC}&deg;C
                  </h2>
                  <h2 className="mb-0 text-dark  border-bottom border-dark py-1">
                    {x.temperatureF}&deg;F
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center align-items-center bg-dark bg-opacity-75">
            <img src={loder} alt="loder" className="img-fluid" />
          </div>
        </>
      )}
    </>

    // -----------------------------------------------------------------
    // <>
    //   <div className="d-flex flex-column justify-content-between p-3 cl-wrapper">
    //     <div className="align-self-end">
    //       <div className="text-end">
    //         <p className="mb-0 text-white">{x.city}</p>
    //         <p className="mb-0 text-white">{x.country}</p>
    //       </div>
    //     </div>

    //     <div className="align-self-center">
    //       <ReactAnimatedWeather
    //         size={defaults.size}
    //         color={defaults.color}
    //         animate={defaults.animate}
    //         icon={x.icon}
    //       />
    //       <h3 className="mb-0 text-white">{x.weather}</h3>
    //     </div>

    //     <div className="d-flex justify-content-between align-items-center">
    //       <div className="text-start">
    //         <p className="mb-0 text-white">
    //           {Hours} : {Mins}
    //         </p>
    //         <p className="mb-0 text-white">{dateBuilder(new Date())}</p>
    //       </div>
    //       <div className="text-end">
    //         <h2 className="mb-0 text-white">{x.temperatureC}&deg;C</h2>
    //         <h2 className="mb-0 text-white">{x.temperatureF}&deg;F</h2>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default CurrentLocation;
