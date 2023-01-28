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

function askCity() {
  let city = prompt("Enter a City");
  city = city.toLowerCase().trim();

  if (city === "paris") {
    alert(
      `It is currently ${Math.round(
        weather["paris"].temp
      )} in Paris with humidity of ${weather.paris.humidity} %`
    );
  } else {
    if (city === "tokyo") {
      alert(
        `It is currently ${Math.round(
          weather["tokyo"].temp
        )} in Tokyo with humidity of ${weather.tokyo.humidity} %`
      );
    } else {
      if (city === "lisbon") {
        alert(
          `It is currently ${Math.round(
            weather["lisbon"].temp
          )} in Lisbon with humidity of ${weather.lisbon.humidity} %`
        );
      } else {
        if (city === "san francisco") {
          alert(
            `It is currently ${Math.round(
              weather["san francisco"].temp
            )} in San Francisco with humidity of ${
              weather["san francisco"].humidity
            } %`
          );
        } else {
          if (city === "oslo") {
            alert(
              `It is currently ${Math.round(
                weather["oslo"].temp
              )} in oslo with humidity of ${weather.oslo.humidity} %`
            );
          } else {
            alert(
              `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney`
            );
          }
        }
      }
    }
  }
}

//askCity();
function formatDate(date) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  return `${day} ${hours}:${minutes}`;
}

let realInfo = document.querySelector("#current-date-time");
let now = new Date();
realInfo.innerHTML = formatDate(now);

function search(event) {
  event.preventDefault();
  let seacrhInput = document.querySelector("#search-city-input");
  let city = document.querySelector("#city");
  city.innerHTML = `${seacrhInput.value}`;

  let apiKey = "745a387cbd32a2ed51308fac14399b48";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${seacrhInput.value}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);
}

function showTemperature(response) {
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  let currentTemperature = document.querySelector("#temp");
  let temperature = Math.round(response.data.main.temp);
  currentTemperature.innerHTML = `${temperature}ºC`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
