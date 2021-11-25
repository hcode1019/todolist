const API_KEY = "8eb7f138b6bf37b684923fd758829864";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(url);
}
function onGeoError() {
  alert("Can't finnd you. No weather for you.Sorry");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
