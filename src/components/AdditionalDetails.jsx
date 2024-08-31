function AdditionalDetails({ humidity, windSpeed }) {
  return (
    // <!--?=== ADDITIONAL CONDITIONS ===-->
    <div className="aditionalDetails w-full  flex justify-center items-center text-white">
      {/* <!--!== HUMIDITY ===--> */}
      <div className="humidityContainer w-full  flex flex-col justify-center items-center">
        {/* <!--?=== ICON  ===--> */}
        <div className="humidityContent   flex justify-center items-center gap-2">
          <i className="fa-solid fa-water text-3xl"></i>

          <div className="humidityLevel text-3xl">{humidity}%</div>
        </div>
        {/* <!--?=== TEXT ===--> */}
        <div className="humidityName text-xs">humidity</div>
      </div>
      {/* <!--!== WIND SPEED ===--> */}
      <div className="windContainer w-full  flex flex-col justify-center items-center">
        {/* <!--?=== ICON ===--> */}
        <div className="windContent   flex justify-center items-center gap-2">
          <i className="fa-solid fa-wind text-3xl"></i>
          <div className="windLevel text-3xl">{windSpeed} km/h</div>
        </div>
        {/* <!--?=== TEXT ===--> */}
        <div className="windName text-xs">wind speed</div>
      </div>
    </div>
  );
}
export default AdditionalDetails;
