
// declearing some varables
const currentTemp = document.querySelector('#current');
const weatherIcon = document.querySelector('#weather-icon');
const weather = document.querySelector('#weather');
const captionDesc = document.querySelector('figcaption');
const lat = 8.99;
const  lon=7.78;
const date = Math.floor(Date.now() / 1000) - (3 * 24 * 60 * 60); 

const aplkey='58327b3f9ba002136c2861e4aecf7851';
const url1= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${aplkey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${aplkey}`;





// fecthing the data

async function apiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            
            displayResults(data);
            
            
          
        }
        else{
            throw Error(await response.text());
        }
        
    } catch (error) {
        console.log(error);
        
    }
    
}
apiFetch();
// displaying data

function displayResults(data) {

    const dateString = data.list[8].dt_txt;
const date2 = new Date(dateString);

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek1 = daysOfWeek[date2.getDay()];

const dateString2 = data.list[18].dt_txt;
const date22 = new Date(dateString2);

const daysOfWeek2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek12 = daysOfWeek2[date22.getDay()];

// Output will be the day of the week (e.g., "Tuesday")

    


    weather.innerHTML = `<p>Today:${data.list[0].main.temp} &deg;F</p>
    <p>${dayOfWeek1}: ${data.list[8].main.temp}&deg;F</p>
     <p>${dayOfWeek12}:${data.list[18].main.temp}&deg;F</p>
    `;
   

    const unixTimestamp = data.city.sunrise;
const date = new Date(unixTimestamp * 1000); 

const hours = date.getUTCHours().toString().padStart(2, '0');
const minutes = date.getUTCMinutes().toString().padStart(2, '0');

const unixTimestamp1 = data.city.sunset;
const date1 = new Date(unixTimestamp1 * 1000); 

const hours1 = date1.getUTCHours().toString().padStart(2, '0');
const minutes1= date1.getUTCMinutes().toString().padStart(2, '0');
const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
let desc = data.list[0].weather[0].description;



    currentTemp.innerHTML = `
     <img id="weather-icon"  src="${iconsrc}"  alt="${desc}">
    
    <p>${data.list[1].main.temp}&deg;F</p>
    <p>${data.list[1].weather[0].description}</p>
    <p> High:${data.list[1].main.temp_max}&deg;</p>
     <p>Low:${data.list[1].main.temp_min}&deg;</p>
    
     <p>Humidity:${data.list[0].main.humidity}%</p>
     <p>Sunrise:${hours}:${minutes} am</p>
     <p>Humidity:${hours1}:${minutes1}pm</p>
     
    
    `;
    // const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    // let desc = data.list[0].weather[0].description;
    // weatherIcon.setAttribute('alt', desc);
    // weatherIcon.setAttribute('src', iconsrc);


    // weather.innerHTML = `<p>fff</p> 
    // `;
  }

  
// const apiKey = '58327b3f9ba002136c2861e4aecf7851';

// // Historical Weather Data (example for one specific past date)
// const date = Math.floor(Date.now() / 1000) - (3 * 24 * 60 * 60); // 3 days ago
// // const historicalUrl = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${date}&appid=${apiKey}`;

// console.log(`Current Weather URL: ${currentWeatherUrl}`);
// console.log(`Forecast Weather URL: ${forecastUrl}`);
// console.log(`Historical Weather URL: ${historicalUrl}`);
