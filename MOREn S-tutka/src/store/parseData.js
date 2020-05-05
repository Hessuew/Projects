const parseDateTime = {
 parseDateTime(response) {
    let precipitation;
    if (response.rain == null ? precipitation = "Precipipation: 0mm" : precipitation = "Precipipation: " + response.rain["3h"] + "mm");
  
    let weather = [response.name, response.weather[0].description, "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png",
    response.main.temp + "°C", response.dt, "Humidity: " + response.main.humidity + "%", "Wind: " +  response.wind.speed  + "m/s", precipitation, response.id];
    if(weather[0] == "Jyvaeskylae"){
      weather[0] = "Jyväskylä";}
    
    let monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    let date = new Date(weather[4] * 1000);
    let time = ((date.getHours() < 10) ? "0" : "") + date.getHours() +
      ":" + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes();
    date = monthNames[date.getMonth()] + " " + date.getDate();
  
    let exactWeather = { city: weather[0], weatherDescription: weather[1], icon: weather[2], temp: weather[3], date: date, time: time, humidity: weather[5], windSpeed: weather[6], precipitation: weather[7], id: weather[8] };
  
    return exactWeather;
  }
}
const parseData = {
   parseData(response) {
    let time = [];
    let icon = [];
    let temp = [];
    let windSpeed = [];
    let humidity = [];
    let precipitation = [];
    let id = [];
    for (let j = 0; j < 5; j++) {
      time.push(response.list[j].dt_txt.substring(11, 16));
      icon.push(response.list[j].weather[0].icon);
      temp.push(response.list[j].main.temp + "°C");
      windSpeed.push(response.list[j].wind.speed + "m/s");
      humidity.push(response.list[j].main.humidity + "%");
      if (response.list[j].rain == null ? precipitation.push("0mm") : precipitation.push(response.list[j].rain["3h"] + "mm"))
      id.push(response.list[j].id);
      }
  
    let weather;
    let hourlyWeather = []
    for (let j = 0; j < 5; j++) {
      weather = { citysweather: { time: time[j], icon: icon[j], temp: temp[j], windSpeed: windSpeed[j], humidity: humidity[j], precipitation: precipitation[j], id: id[j] }};
      hourlyWeather.push(weather);
    }
    return hourlyWeather;
  }
}

export default {
    parseDateTime,
    parseData,
}