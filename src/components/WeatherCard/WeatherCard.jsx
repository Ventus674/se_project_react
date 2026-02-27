import "./WeatherCard.css";
import { useContext } from "react";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext.js";
import { weatherOptions } from "../../utils/constants.js";

function WeatherCard({ weatherData }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);

  return (
    <section className="weather-card">
      <img
        className="weather-card__image"
        src={
          weatherOptions[`${weatherData.period}`][`${weatherData.skyCondition}`]
            .image
        }
        alt={`${weatherOptions.day.cloudy.name}`}
      />
      <p className="weather-card__temp">
        {weatherData.temp[currentTempUnit]}&deg; {currentTempUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
