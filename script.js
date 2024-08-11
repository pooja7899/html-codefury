// Fetch real-time alerts using a simple example
document.addEventListener("DOMContentLoaded", function () {
  fetch("/api/alerts")
    .then((response) => response.json())
    .then((alerts) => {
      const alertContainer = document.getElementById("alert-container");
      alerts.forEach((alert) => {
        const alertDiv = document.createElement("div");
        alertDiv.textContent = alert.message;
        alertContainer.appendChild(alertDiv);
      });
    })
    .catch((error) => console.error("Error fetching alerts:", error));

  // Initialize map using Leaflet.js
  const map = L.map("map-container").setView([51.505, -0.09], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
});
