import { useState } from "react";
import { useWeather } from "../context/Context";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Loader from "../components/Loader";

const Home = () => {
  const x = useWeather();
  const [search, setsearch] = useState("");

  const handleOnSearch = () => {
    x.fetchData(search);
    setsearch("");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-3">
            <div className="d-flex justify-content-center align-items-center gap-3 rounded py-2">
              <div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}
                  className="form-control"
                  placeholder="Search any city"
                  required
                />
              </div>
              <div>
                <button
                  className="btn btn-outline-light"
                  onClick={() => handleOnSearch()}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="box-1 d-flex justify-content-center align-items-center w-100 bg-light bg-opacity-10 rounded p-3">
              {x.tempC ? <LeftSide /> : <Loader />}
            </div>
          </div>

          <div className="col-12 col-lg-8 mt-3 mt-lg-0">
            <div className="box-1 d-flex justify-content-center align-items-center w-100 bg-light bg-opacity-10 rounded p-3">
              {x.tempC ? <RightSide /> : <Loader />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
