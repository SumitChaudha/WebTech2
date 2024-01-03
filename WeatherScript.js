let apikey = "eeb0e81706668596fa16ed5b1aa2f48b";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humidity_info");
let windInfo = document.getElementById("wind_info");
let weatherImage = document.getElementById(".weather_img")


async function getWeatherData(){
    if(userCity.value=="")
    {
        alert("ENTER A CITY NAME")
    }
    else
    {
        city = userCity.value;
        let responce =await fetch(
           ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        );
        let data = await responce.json();
        ct.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        windInfo.innerHTML = data.wind.speed + "km/h";
        userCity.value="";
        if(data.weather[0].main=="Clear"){
            weatherImage.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png";
        }else if(data.weather[0].main=="Snow"){
            weatherImage.src = "https://w7.pngwing.com/pngs/212/586/png-transparent-weather-clouds-snow-winter-weather-color-icon.png";
        }else if(data.weather[0].main=="Clouds"){
            weatherImage.src = "https://img1.pnghut.com/21/18/1/RYWn9kXQVC/storm-wet-season-symbol-climate-cloud.jpg";
        }else if(data.weather[0].main=="Drizzels"){
            weatherImage.src = "https://i.pinimg.com/originals/de/4f/61/de4f618c20951e5c725511c9e2c69649.png";
        }else if(data.weather[0].main=="Mist"){
            weatherImage.src = "https://cdn-icons-png.flaticon.com/512/1197/1197102.png";
        }else if(data.weather[0].main=="Rain"){
            weatherImage.src = "https://w7.pngwing.com/pngs/49/967/png-transparent-rain-rain-blue-cloud-drop-thumbnail.png";
        }
        console.log(data)
    }
}