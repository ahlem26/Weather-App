async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "e3a9eee8b393b2db41909c973157062a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        const icon = data.weather[0].icon; // Récupère l'ID de l'icône météo
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        const result = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="${iconUrl}" alt="${data.weather[0].description}">
      <p>${data.weather[0].description}</p>
      <p>🌡 Temp: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind: ${data.wind.speed} km/h</p>
    `;

        document.getElementById("weatherResult").innerHTML = result;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
