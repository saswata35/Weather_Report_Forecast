function getWeather() {
  const location = document.getElementById('locationInput').value || 'kolkata';
  const url = `http://api.weatherapi.com/v1/current.json?key=6fca284281654b54bd670456252005&q=${location}&aqi=no`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const { location, current } = data;
      const iconUrl = "https:" + current.condition.icon; // API returns a relative URL

      document.getElementById('weatherResult').innerHTML = `
        <h3>${location.name}, ${location.country}</h3>
        <p><strong>${current.temp_c}°C</strong>, ${current.condition.text}</p>
        <img src="${iconUrl}" alt="weather icon" />
      `;
    })
    .catch(() => {
      document.getElementById('weatherResult').innerHTML = `<p style="color:red;">Location not found!</p>`;
    });  
}
