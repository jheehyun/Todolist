const API_KEY = "0acfefdf48f9232413f4e8e35c819f8f";

function geoGet(pos){
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
    .then(data => {
        const city = document.querySelector('#weather p:first-child');
        const weather = document.querySelector('#weather p:last-child');
        city.innerText = data.name;
        weather.innerText =`${data.weather[0].main} , ${data.main.temp}`;
    });
}

function geoCancle(){
    alert('Sorry, No weather for you!');
}

navigator.geolocation.getCurrentPosition(geoGet,geoCancle);