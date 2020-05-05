import { getCity1Exact, getCity2Exact, getCity3Exact, getCity4Exact, getCity1Hourly, getCity2Hourly, getCity3Hourly, getCity4Hourly } from "@/modules/connectionModules/connectionToAPI";

function parseDateTime(response) {
  let weather = [response.name, response.weather[0].description.charAt(0).toUpperCase() + response.weather[0].description.substring(1), "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png",
  Math.round(response.main.temp) + " °C", response.dt, "Humidity: " + response.main.humidity + " %", "Wind: " + response.wind.speed + " m/s", "Precipitation (3 h): ", response.id];
  if (weather[0] == "Jyvaeskylae") {
    weather[0] = "Jyväskylä";
  }

  let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const parsedDate = function (d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  let date = new Date(weather[4] * 1000);
  let time = ((date.getHours() < 10) ? "0" : "") + date.getHours() +
    ":" + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes();
  date = monthNames[date.getMonth()] + " " + date.getDate() + parsedDate(date.getDate());

  let exactWeather = { city: weather[0], weatherDescription: weather[1], icon: weather[2], temp: weather[3], date: date, time: time, humidity: weather[5], windSpeed: weather[6], precipitation: weather[7], id: weather[8] };

  return exactWeather;
}
function parseData(response) {
  let time = [];
  let icon = [];
  let temp = [];
  let windSpeed = [];
  let humidity = [];
  let precipitation = [];
  let id = [];
  for (let j = 0; j < 5; j++) {
    time.push(response.list[j].dt_txt.substring(11, 16));
    icon.push("http://openweathermap.org/img/wn/" + response.list[j].weather[0].icon + "@2x.png");
    temp.push(Math.round(response.list[j].main.temp) + " °C");
    windSpeed.push(response.list[j].wind.speed + " m/s");
    humidity.push(response.list[j].main.humidity + " %");
    if (response.list[j].rain == null ? precipitation.push("0 mm") : precipitation.push(Math.round(response.list[j].rain["3h"]) + " mm"))
      id.push(response.list[j].id);
  }

  let weather;
  let hourlyWeather = []
  for (let j = 0; j < 5; j++) {
    weather = { time: time[j], icon: icon[j], temp: temp[j], windSpeed: windSpeed[j], humidity: humidity[j], precipitation: precipitation[j], id: id[j] };
    hourlyWeather.push(weather);
  }
  return hourlyWeather;
}

export default {
  namespaced: true,
  state: {
    exactWeathers: [],
    hourlyWeathers: [],
    allWeathers: []
  },
  actions: {
    async fetchWeathers({ commit }) {
      let exactWeather;
      let hourlyWeather;

      try {
        const response = await getCity1Exact();
        exactWeather = parseDateTime(response.data);
        commit("SET_EXACTWEATHER", exactWeather);

      } catch (error) {
        window.console.log(error);
      }
      try {
        const response = await getCity1Hourly();
        hourlyWeather = parseData(response.data);
        commit("SET_HOURLYWEATHER", hourlyWeather);

      } catch (error) {
        window.console.log(error);
      }
      exactWeather["hourlyWeather"] = hourlyWeather;
      commit("SET_ALLWEATHERS", exactWeather);

      try {
        const response = await getCity2Exact();
        exactWeather = parseDateTime(response.data);
        commit("SET_EXACTWEATHER", exactWeather);
      } catch (error) {
        window.console.log(error);
      }
      try {
        const response = await getCity2Hourly();
        hourlyWeather = parseData(response.data);
        commit("SET_HOURLYWEATHER", hourlyWeather);

      } catch (error) {
        window.console.log(error);
      }
      exactWeather["hourlyWeather"] = hourlyWeather;
      commit("SET_ALLWEATHERS", exactWeather);

      try {
        const response = await getCity3Exact();
        exactWeather = parseDateTime(response.data);
        commit("SET_EXACTWEATHER", exactWeather);
      } catch (error) {
        window.console.log(error);
      }
      try {
        const response = await getCity3Hourly();
        hourlyWeather = parseData(response.data);
        commit("SET_HOURLYWEATHER", hourlyWeather);

      } catch (error) {
        window.console.log(error);
      }
      exactWeather["hourlyWeather"] = hourlyWeather;
      commit("SET_ALLWEATHERS", exactWeather);

      try {
        const response = await getCity4Exact();
        exactWeather = parseDateTime(response.data);
        commit("SET_EXACTWEATHER", exactWeather);
      } catch (error) {
        window.console.log(error);
      }
      try {
        const response = await getCity4Hourly();
        hourlyWeather = parseData(response.data);
        commit("SET_HOURLYWEATHER", hourlyWeather);

      } catch (error) {
        window.console.log(error);
      }
      exactWeather["hourlyWeather"] = hourlyWeather;
      commit("SET_ALLWEATHERS", exactWeather);
    },
  },
  getters: {
    allExactWeathers(state) { return state.exactWeathers },
    allHourlyWeathers(state) { return state.hourlyWeathers }
  },
  mutations: {
    SET_EXACTWEATHER(state, exactWeathers) {
      state.exactWeathers.push(exactWeathers);
    },
    SET_HOURLYWEATHER(state, hourlyWeather) {
      state.hourlyWeathers.push(hourlyWeather.key1);
    },
    SET_ALLWEATHERS(state, allWeathers) {
      state.allWeathers.push(allWeathers);
    }
  }
}
