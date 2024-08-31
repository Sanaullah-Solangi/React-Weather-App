function WeatherTemprature({ onClick, temp }) {
  return (
    <div
      onClick={onClick}
      className="weatherTemprature flex items-center justify-center flex-col gap-1 w-full text-white"
    >
      <div className="temprature text-6xl">{temp}</div>
      <div className="nameOfTemprature text-xs">temprature</div>
    </div>
  );
}
export default WeatherTemprature;
