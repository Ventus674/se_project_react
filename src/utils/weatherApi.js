import { APIkey, coordinates } from "./constants";
import { handleServerResponse } from "./api";

export function getWeatherData() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${APIkey}`,
  )
    .then(handleServerResponse)
    .then((data) => {
      return parseWeatherData(data);
    });
}

function parseWeatherData(data) {
  const parsedData = { temp: {} };
  const fahrenheit = data.main.temp;
  const celsius = ((fahrenheit - 32) * 5) / 9;

  parsedData.city = data.name;
  parsedData.temp.F = Math.round(fahrenheit);
  parsedData.temp.C = Math.round(celsius);
  parsedData.tempCondition = getWeatherTempCondition(parsedData.temp.F);
  parsedData.skyCondition = getWeatherSkyCondition(data.weather[0].id);
  parsedData.period = isDayOrNight(data);
  return parsedData;
}

function getWeatherTempCondition(temp) {
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}

function getWeatherSkyCondition(id) {
  if (id >= 200 && id < 300) {
    return "storm";
  } else if (id >= 300 && id < 600) {
    return "rain";
  } else if (id >= 600 && id < 700) {
    return "snow";
  } else if (id == 741) {
    return "fog";
  } else if (id == 800) {
    return "clear";
  } else if (id > 800 && id < 900) {
    return "cloudy";
  } else {
    return "default";
  }
}

function isDayOrNight(data) {
  const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;
  const now = Math.floor(Date.now() / 1000);
  const isDaytime = now >= sunrise && now < sunset;
  if (isDaytime) {
    return "day";
  } else {
    return "night";
  }
}
