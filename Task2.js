class Provider {
  static getWeather(city) {
    return Promise.resolve(`The weather of ${city} is Cloudy`);
  }
  static getLocalCurrency(city) {
    return Promise.resolve(`The local currency of ${city} is GBP`);
  }
  static findCity(long, lat) {
    return Promise.resolve(`London`);
  }
}

Provider.findCity("51.5074r", "0.1278").then((city) => {
  console.log(city);
  Provider.getWeather(city).then((weather) => {
    console.log(weather);
  });
});
Provider.getLocalCurrency("London").then((currency) => {
  console.log(currency);
});
Provider.getWeather("London").then((weather) => {
  console.log(weather);
});
