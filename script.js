const apiKey = "Your-Api-key";
const url = "weatherapi-url";

document
  .getElementById("get-weather-btn")
  .addEventListener("click", async () => {
    const cityName = document.getElementById("city-input").value;
    if (!cityName) {
      alert("Please enter a city name.");
      return;
    }
    const requestUrl = `${url}?key=${apiKey}&q=${cityName}&aqi=yes`;

    try {
      const response = await fetch(requestUrl);
      const data = await response.json();

      if (response.ok) {
        displayWeatherInfo(data);
      } else {
        alert("City not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  });

function displayWeatherInfo(data) {
  document.getElementById(
    "city-name"
  ).textContent = `City: ${data.location.name}`;
  document.getElementById(
    "temperature"
  ).textContent = `Temperature: ${data.current.temp_c}°C`;
  document.getElementById(
    "wind-speed"
  ).textContent = `Wind Speed: ${data.current.wind_kph} kph`;
  document.getElementById("weather-info").style.display = "block";
}
