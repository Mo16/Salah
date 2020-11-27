var longitude,latitude;




function getLocation() {
    loadShow();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(savePosition, showError);
    } else { 
        makeAlert("Geolocation is not supported by this browser Please enter manually.");
    }
}

function savePosition(position) {
    latitude = position.coords.latitude
    longitude = position.coords.longitude
    Cookies.set("longitude",longitude,{expires: 9999})
    Cookies.set("latitude",latitude,{expires: 9999})
    getBeginningTimes()
    findClosestMosque()
    loadHide();
}



function showError(error) {
    loadHide();
    switch(error.code) {
        case error.PERMISSION_DENIED:
            makeAlert("Permission was denied.");
            break;
        case error.POSITION_UNAVAILABLE:
            makeAlert("Your position is unavailable");
            break;
        case error.TIMEOUT:
            makeAlert("The request to get the location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            makeAlert("An unknown error occurred.");
            break;
    }
}