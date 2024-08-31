import { useEffect, useState } from "react";
import WeatherSearchBar from "./components/WeatherSearchBar";
import WeatherTemprature from "./components/WeatherTemprature";
import CityName from "./components/CityName";
import AdditionalDetails from "./components/AdditionalDetails";
import "./App.css";

function App() {
  //! VARIABLE TO STORE INPUT VALUE
  const [cityName, setCityName] = useState("karachi");
  const [weather, setWeather] = useState({
    weather: [],
  });
  const temp = Math.round(weather?.main?.temp - 273.15) || "";
  const feelsLike = Math.round(weather?.main?.feels_like - 273.15);
  const humidity = weather?.main?.humidity;
  const windSpeed = weather?.wind?.speed;
  const name = weather.name;
  function getWeatherData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1818bdc7b4b77ef30d448a7e2ea8b141`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeather(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getWeatherData();
  }, [cityName]);

  return (
    <div className="appContainer rounded-3xl overflow-hidden m-auto flex items-center justify-start gap-4 flex-col py-9">
      {/* <!--?=== SEARCH BAR ===--> */}
      <WeatherSearchBar
        onKeypress={(event) => {
          if (event.code == "Enter") {
            setCityName(event.target.value);
            event.target.value = "";
          }
        }}
        onClick={() => {
          getWeatherData();
        }}
      />

      {/* <!--?=== WEATHER TEMPRATURE ===--> */}
      <WeatherTemprature
        onClick={() => {
          getWeatherData();
        }}
        temp={temp}
      />
      {/* <!--?=== CITY NAME ===--> */}
      <CityName name={name} />
      {/*=== ADDITIONAL DETAILS ===*/}
      <AdditionalDetails humidity={humidity} windSpeed={windSpeed} />
    </div>
  );
}

export default App;
