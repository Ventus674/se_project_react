import "./WeatherCard.css";
import cloudy from "../../assets/cloudy.svg";

function WeatherCard() {
  return (
    <section className="weather-card">
      <img className="weather-card__image" src={cloudy} alt="cloudy sky" />
      <p className="weather-card__temp">75&deg; F</p>
    </section>
  );
}

export default WeatherCard;
