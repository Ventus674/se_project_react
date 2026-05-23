const coordinates = {
  latitude: 43.707,
  longitude: 116.62,
};

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "	api.wtwr.fivepals.com"
    : "http://localhost:3001";

const APIkey = "9a47480666c6576602cbe5c7243a37e4";

const weatherOptions = {
  day: {
    clear: {
      name: "clear",
      image: new URL("../assets/day/clear.svg", import.meta.url).href,
    },
    cloudy: {
      name: "cloudy",
      image: new URL("../assets/day/cloudy.svg", import.meta.url).href,
    },
    fog: {
      name: "fog",
      image: new URL("../assets/day/fog.svg", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/day/rain.svg", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/day/snow.svg", import.meta.url).href,
    },
    storm: {
      name: "storm",
      image: new URL("../assets/day/storm.svg", import.meta.url).href,
    },
    default: {
      name: "default",
      image: new URL("../assets/day/default.svg", import.meta.url).href,
    },
  },
  night: {
    clear: {
      name: "clear",
      image: new URL("../assets/night/clear.svg", import.meta.url).href,
    },
    cloudy: {
      name: "cloudy",
      image: new URL("../assets/night/cloudy.svg", import.meta.url).href,
    },
    fog: {
      name: "fog",
      image: new URL("../assets/night/fog.svg", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/night/rain.svg", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/night/snow.svg", import.meta.url).href,
    },
    storm: {
      name: "storm",
      image: new URL("../assets/night/storm.svg", import.meta.url).href,
    },
    default: {
      name: "default",
      image: new URL("../assets/night/default.svg", import.meta.url).href,
    },
  },
};

export { weatherOptions, coordinates, APIkey, BASE_URL };
