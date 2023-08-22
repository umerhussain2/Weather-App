import CurrentLocation from "./components/CurrentLocation";
import Forcast from "./components/Forcast";

const App = () => {
  return (
    <>
      <div className="container-fluid main-box">
        <div className="row justify-content-center">
          <div className="p-0 col-12 col-sm-12 col-md-3">
            <Forcast />
          </div>
          <div className="p-0 col-12 col-sm-12 col-md-5">
            <CurrentLocation />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;