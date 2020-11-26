function getJamatTimes(x) {
    var mosque = x.innerHTML;
    var chosen;
    document.getElementById("dropdown-item").innerHTML = mosque;
    switch (mosque) {
      case "Masjid-e-Noor":
        chosen = "masjidnoorData";
        break;
      case "Jami Mosque":
        chosen = "jamimosqueData";
        break;
      case "Masjid-e-Hidaya":
        chosen = "masjidhidayaData";
        break;
      case "Didsbury Mosque":
        chosen = "didsburymosqueData";
        break;
        case "Portsmouth Central Mosque":
          chosen = "portsmouthcentralmosqueData";
          break;
    }
    fetch(`./mosques/mosqueData.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var times = data[chosen]
        writeJamatTimes(times);
      });
    loadingHide();
  }


  function writeJamatTimes(timings) {
    document.getElementById("fajrjamat").innerHTML = timings.fajr;
    document.getElementById("zuhrjamat").innerHTML = timings.zuhr;
    document.getElementById("asrjamat").innerHTML = timings.asr;
    document.getElementById("maghribjamat").innerHTML = timings.maghrib;
    document.getElementById("ishajamat").innerHTML = timings.esha;
  }

