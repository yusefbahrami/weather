let cityInput = document.getElementById("textbox");
let btnSreach = document.getElementById("btnSearch");
let cityName = document.querySelector(".city");
let temp = document.querySelector(".temp");
let description = document.querySelector(".description");
const key = "7a87e42df4f1c82f6375b6df77b747ff";

async function getWeather() {
  let weatherResult = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${key}`
    )
  ).json();
  setInfo(weatherResult);
}
function setInfo(data) {
  if (data.cod == 200) {
    cityName.innerHTML = data.name;
    temp.innerHTML = `${(data.main["temp"] - 273.15).toFixed(2)} ${"&#8451;"}`;
    description.innerHTML = data.weather[0].description;
  } else {
    cityName.innerHTML = data.cod;
    temp.innerHTML = data.message;
  }
  cityInput.focus();
}
window.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    getWeather();
  }
});
btnSreach.addEventListener("click", getWeather);
