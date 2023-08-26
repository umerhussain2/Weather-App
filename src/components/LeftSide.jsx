import { useWeather } from "../context/Context";
import ReactAnimatedWeather from "react-animated-weather";

const LeftSide = () => {
  const x = useWeather();

  // DATE
  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" });

  return (
    <>
      <div className="d-flex justify-content-center gap-2 flex-column w-100 box">
        <div className="d-flex justify-content-center align-items-center p-2 bg-light bg-opacity-25 rounded">
          <ReactAnimatedWeather icon={x.icon} size={112} color={"white"} />
        </div>

        <div className="d-flex justify-content-center align-items-center p-2 bg-light bg-opacity-25 rounded">
          <h4 className="mb-0 text-white">{x.weather}</h4>
        </div>

        <div className="d-flex justify-content-evenly align-items-center p-2 bg-light bg-opacity-25 rounded">
          <h4 className="mb-0 text-white">{x.city}</h4>
          <h4 className="mb-1 text-white">|</h4>
          <h4 className="mb-0 text-white">{x.country}</h4>
        </div>

        <div className="d-flex justify-content-center p-3 bg-light bg-opacity-25 rounded">
          <p className="mb-0 text-white">
            {day}, {month} {date}, {year}
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
