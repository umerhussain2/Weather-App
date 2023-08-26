import loader from "../images/WeatherIcons.gif";

const Loader = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center p-0 w-100 bg-light bg-opacity-50 rounded p-3">
        <img src={loader} alt="loader" width="300" className="img-fluid" />
      </div>
    </>
  );
};

export default Loader;
