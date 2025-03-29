// ฟังก์ชันอัปเดตวันที่และเวลา
function updateDateTime() {
    let now = new Date();
    let dateTimeString = now.toLocaleString("th-TH", { 
        dateStyle: "full", 
        timeStyle: "medium" 
    });
    let dateTimeElement = document.getElementById("datetime");
    if (dateTimeElement) {
        dateTimeElement.innerText = "📅 " + dateTimeString;
    }
}

// ฟังก์ชันที่แสดงข้อมูลอุณหภูมิและความดันอากาศบนหน้า `index.html`
function displayWeatherOnIndex() {
    let weatherData = JSON.parse(localStorage.getItem('weatherData')) || [];
    if (weatherData.length > 0) {
        let latestData = weatherData[weatherData.length - 1];
        let temperatureElement = document.getElementById("temperature");
        let pressureElement = document.getElementById("pressure");
        if (temperatureElement && pressureElement) {
            temperatureElement.innerText = `${latestData.temperature} °C`;
            pressureElement.innerText = `${latestData.pressure} hPa`;
        }
    }
}

// ฟังก์ชันที่แสดงข้อมูลแผ่นดินไหวบนหน้า `index.html`
function displayEarthquakeOnIndex() {
    let earthquakeData = JSON.parse(localStorage.getItem('earthquakeData')) || [];
    if (earthquakeData.length > 0) {
        let latestData = earthquakeData[earthquakeData.length - 1];
        let locationElement = document.getElementById("earthquake-location");
        let magnitudeElement = document.getElementById("earthquake-magnitude");
        if (locationElement && magnitudeElement) {
            locationElement.innerText = latestData.location;
            magnitudeElement.innerText = `${latestData.magnitude} ริกเตอร์`;
        }
    }
}

// ฟังก์ชันที่แสดงข้อมูลอุณหภูมิและความดันในตารางบนหน้า `weather.html`
function displayWeatherData() {
    let weatherData = JSON.parse(localStorage.getItem('weatherData')) || [];
    let tableBody = document.getElementById("weather-table-body");
    if (tableBody) {
        tableBody.innerHTML = "";
        weatherData.forEach((data) => {
            let row = document.createElement('tr');
            row.innerHTML = `<td>${data.temperature} °C</td><td>${data.pressure} hPa</td><td>${data.timestamp}</td>`;
            tableBody.appendChild(row);
        });
    }
}

// ฟังก์ชันที่แสดงข้อมูลแผ่นดินไหวในตารางบนหน้า `earthquake.html`
function displayEarthquakeData() {
    let earthquakeData = JSON.parse(localStorage.getItem('earthquakeData')) || [];
    let tableBody = document.getElementById("earthquake-table-body");
    if (tableBody) {
        tableBody.innerHTML = "";
        earthquakeData.forEach((data) => {
            let row = document.createElement('tr');
            row.innerHTML = `<td>${data.location}</td><td>${data.magnitude}</td><td>${data.timestamp}</td>`;
            tableBody.appendChild(row);
        });
    }
}



// อัปเดตวันที่และเวลาทุก 10 วินาที
setInterval(updateDateTime, 1000);
setInterval(displayWeatherOnIndex, 5000);
setInterval(displayEarthquakeOnIndex, 5000);
updateDateTime();
displayWeatherOnIndex();
displayEarthquakeOnIndex();