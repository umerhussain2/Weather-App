import { useWeather } from "../context/Context";

const RightSide = () => {
  const x = useWeather();

  let tC = x.tempC - (273.15).toFixed(1);
  let tF = (tC * 9) / 5 + 32;

  return (
    <>
      <div className="d-flex flex-wrap align-items-center w-100 box">
        <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center w-100 px-2 py-3 bg-light bg-opacity-25 rounded">
          <h4 className="mb-0 text-white">Temperature</h4>
          <div className="d-flex align-items-center gap-3">
            <h4 className="mb-0 text-white">{Math.round(tC)}&deg;C</h4>
            <h4 className="mb-1 text-white">|</h4>
            <h4 className="mb-0 text-white"> {Math.round(tF)}&deg;F</h4>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center w-100 px-2 py-3 bg-light bg-opacity-25 rounded gap-3">
          <h4 className="mb-0 text-white">Humidity</h4>
          <div>
            <h4 className="mb-0 text-white">{x.humidity}%</h4>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center w-100 px-2 py-3 bg-light bg-opacity-25 rounded  gap-3">
          <h4 className="mb-0 text-white">Wind</h4>
          <h4 className="mb-0 text-white">{x.wind} km/h</h4>
        </div>

        <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center w-100 px-2 py-3 bg-light bg-opacity-25 rounded gap-3">
          <h4 className="mb-0 text-white">Visibility</h4>
          <h4 className="mb-0 text-white">{x.visibility} mi</h4>
        </div>
      </div>
    </>
  );
};

export default RightSide;
