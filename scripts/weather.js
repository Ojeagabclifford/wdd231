
// declearing some varables

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const lat = 49.77;
const  lon= 6.65;

const aplkey='58327b3f9ba002136c2861e4aecf7851';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${aplkey}`;


// fecthing the data

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            
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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].
    description;
    weatherIcon.setAttribute('alt', data.weather[0].description);
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
  }