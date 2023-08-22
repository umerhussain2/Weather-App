const Forcast = () => {
  return (
    <>
      <div className="d-flex justify-content-center f-wrapper p-2">
        <div className="d-flex flex-column align-items-center w-100">
          {/* ICON */}
          <div className="forcast-icon py-4 border-bottom w-100">
            <h1 className="mb-0 text-white">ICON</h1>
          </div>
          {/* WEATHER */}
          <div className="forcast-weather py-3 border-bottom w-100">
            <h3 className="mb-0 text-white">WEATHER</h3>
          </div>

          {/* SEARCH BAR */}
          <div className="forcast-search py-2 border-bottom w-100">
            <h1 className="mb-0 text-white">SEARCH</h1>
          </div>

          {/* CITY */}
          <div className="forcast-city py-4 border-bottom w-100">
            <h3 className="mb-0 text-white">KARACHI</h3>
          </div>

          {/* FORCAST DATA */}

          {/* TEMP */}
          <div className="w-100 py-2 border-bottom d-flex justify-content-between align-items-center">
            <p className="mb-0 text-white">Temparature</p>
            <p className="mb-0 text-white">32&deg;C</p>
          </div>

          {/* HUMIDITY */}
          <div className="w-100 py-2 border-bottom d-flex justify-content-between align-items-center">
            <p className="mb-0 text-white">Humidity</p>
            <p className="mb-0 text-white">23%</p>
          </div>

          {/* VISIBILITY */}
          <div className="w-100 py-2 border-bottom d-flex justify-content-between align-items-center">
            <p className="mb-0 text-white">Visibility</p>
            <p className="mb-0 text-white">300 mi</p>
          </div>

          {/* WIND SPEED */}
          <div className="w-100 py-2 border-bottom d-flex justify-content-between align-items-center">
            <p className="mb-0 text-white">Wind Speed</p>
            <p className="mb-0 text-white">32 Km/h</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forcast;
