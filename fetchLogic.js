

document.addEventListener("DOMContentLoaded", function() {
    fetchCityData();
  });
  
  async function fetchCityData() {
    try {
        const newLocal = "https://api.npoint.io/7bbd3a59c401f616bb89";
      const response = await fetch(newLocal);
      const data = await response.json();
      displayCityData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      displayError();
    }
  }
  
  function displayCityData(data) {
    const container = document.getElementById("cities-container");
  
    data.forEach(city => {
      const cityElement = document.createElement("div");
      cityElement.classList.add("city");
  
      const cityName = document.createElement("h2");
      cityName.textContent = city.name;
  
      const cityDetails = document.createElement("p");
      cityDetails.innerHTML = `<strong>State:</strong> ${city.state}<br>
                               <strong>Population:</strong> ${city.population}<br>
                               <strong>Attractions:</strong> ${city.attractions.join(", ")}`;
  
      cityElement.appendChild(cityName);
      cityElement.appendChild(cityDetails);
  
      container.appendChild(cityElement);
    });
  }
  
  function displayError() {
    const container = document.getElementById("cities-container");
    container.innerHTML = "Failed to fetch city data. Please try again later.";
  }
  