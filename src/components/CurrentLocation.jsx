const CurrentLocation = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-between p-3 cl-wrapper">
        <div className="align-self-end">
          <div className="text-end">
            <p className="mb-0 text-white">City</p>
            <p className="mb-0 text-white">Country</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <p className="mb-0 text-white">08 : 58 : 09</p>
            <p className="mb-0 text-white">Wednesday, August 23, 2023</p>
          </div>
          <div className="text-end">
            <h2 className="mb-0 text-white">32&deg;C</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentLocation;
