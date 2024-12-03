let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// Ask user to input a city
let city = prompt("Enter a city").toLowerCase();

// Check if the city exists in the weather object
if (weather[city]) {
  let tempCelsius = Math.round(weather[city].temp);
  let tempFahrenheit = Math.round((tempCelsius * 9) / 5 + 32);
  let humidity = Math.round(weather[city].humidity);

  alert(
    `It is currently ${tempCelsius}°C (${tempFahrenheit}°F) in ${
      city.charAt(0).toUpperCase() + city.slice(1)
    } with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
