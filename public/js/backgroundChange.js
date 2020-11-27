function getWeatherByCoords() {
    api = "2ca0429921c28bac953e647ade71e1ff";
    url = "https://api.openweathermap.org/data/2.5/weather";
    fetch(`${url}?lat=${Cookies.get("latitude")}&lon=${Cookies.get("longitude")}&appid=${api}&units=metric`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        weatherData = data;
        background();
      });
  }

  function background() {
    var section = document.getElementById('learnsection')
    if (weatherData) {
      if (weatherData.weather[0].icon.endsWith("n")) {

        section.style.backgroundColor = '#303030'

      } else {

        section.style.backgroundColor = 'white'
      }
    }
  }

  getWeatherByCoords()