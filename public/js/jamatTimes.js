function getJamatTimes(x) {
    id = document.getElementById("mosquedropdown").value
    fetch("data/mosqueData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var times = data[id]
        writeJamatTimes(times);
      });
  }


  function writeJamatTimes(timings) {
    document.getElementById("fajrjamat").innerHTML = timings.fajr;
    document.getElementById("zuhrjamat").innerHTML = timings.zuhr;
    document.getElementById("asrjamat").innerHTML = timings.asr;
    document.getElementById("maghribjamat").innerHTML = timings.maghrib;
    document.getElementById("ishajamat").innerHTML = timings.esha;
  }


  function displayCityMosques(city){
    fetch("data/mosqueData.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const mosques = Object.values(data);
      localMosques = []
      for (const key of mosques) {
        if (key.city === Cookies.get("city") || key.city === city)
          localMosques.push([key.dropdownid,key.value])
      }
      var dropdown = document.getElementById("mosquedropdown")
      dropdownLength = document.getElementById("mosquedropdown").options.length
      for (const element of localMosques) {
        var option = document.createElement("option")
        option.value = element[1]
        option.text = element[0]
        if (dropdownLength !== localMosques.length+1){
          dropdown.add(option) 
        }
      }
    });
  }
  displayCityMosques()

