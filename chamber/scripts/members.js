



const url = './data/members.json';
const cards = document.querySelector('#cards');


async function getProphetData(url1) {

    const response = await fetch(url1);

    if(response.ok){
        const data = await response.json();
       displayProphets(data.companys);
       


        console.log("ddddd");
       
    }
    else
    {
        console.log("ddddd");
    }
    
}

async function getProphetData1(url2) {

    const response = await fetch(url2);

    if(response.ok){
        const data = await response.json();
       
       displayProphets1(data.companys);


        console.log("ddddd");
       
    }
    else
    {
        console.log("ddddd");
    }
    
}



const displayProphets = (prophets) => {
    
    console.log(prophets);
    

    
    const cousreTable1 = document.getElementById('card1');
    cousreTable1.innerHTML ='';

  



    const cousreTable = document.getElementById('cards');
     cousreTable.innerHTML ='';
    
    prophets.forEach(prophet => {

            
    
            const templeCard = document.createElement('div');
            templeCard.className ='card';
            templeCard.innerHTML = `
                <img src="${prophet.image}" alt="${prophet.name}" loading="lazy" width="200" height ="100">
                <p>Name:${prophet.name}</p>
                <p>Email:${prophet.email}</p>
                <a href="${prophet.website}" id="cse-course">${prophet.name}</a>
                <p><span>Member Level:</span>${prophet.membershipLevel}</p>
                <p><span>Member Level:</span>${prophet.address}</p>
                
    `
            cousreTable.appendChild(templeCard);


        // }
        // numbercreideit +=courses.credits;
        
    });

    




    
  
        
    };
  


// hambuer


const displayProphets1 = (prophets) => {
    
    // console.log(prophets);
    

  



    const cousreTable1 = document.getElementById('cards');
     cousreTable1.innerHTML ='';
     

    const cousreTable = document.getElementById('card1');
    cousreTable.innerHTML ='';
    
    prophets.forEach(prophet => {

            
        
            const templeCard = document.createElement('div');
            templeCard.className ='card';
            templeCard.innerHTML = `
                <img src="${prophet.image}" alt="${prophet.name}" width="200" height ="100">
                <p>Name:${prophet.name}</p>
                <p>Email:${prophet.email}</p>
                <a href="${prophet.website}" id="cse-course">${prophet.name}</a>
                <p><span>Member Level:</span>${prophet.membershipLevel}</p>
    `
            cousreTable.appendChild(templeCard);


        // }
        // numbercreideit +=courses.credits;
        
});}






document.getElementById('list').addEventListener('click', (Event)=>{
    Event.preventDefault();
  
   
    
  
    


    getProphetData1(url);
    

  
     


});


document.getElementById('grid').addEventListener('click', (Event)=>{
    Event.preventDefault();
  
    getProphetData(url);


});

 getProphetData(url);
const hambutton  = document.querySelector('#mybutton');
const  mainnav = document.querySelector('.menulinks');

hambutton.addEventListener('click',() =>{
    mainnav.classList.toggle('open'); 
    hambutton.classList.toggle('open');

});

const currentYear = document.querySelector('#currentyear');
const today = new Date();
currentYear.innerHTML= new Intl.DateTimeFormat('en-US',{
    dateStyle:"medium"
}).format(today);






// const currentTemp = document.querySelector('#current');
// const weatherIcon = document.querySelector('#weather-icon');
// // const weather = document.querySelector('#weather')
// // const captionDesc = document.querySelector('figcaption');
// const lat = 9.84;
// const lon = 7.35;


// const aplkey='58327b3f9ba002136c2861e4aecf7851';
// const url52 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${aplkey}`;
// // 9.844804876861431, 7.354156181597328

// // fecthing the data

// async function apiFetch() {
//     try {
//         const response = await fetch(url52);
//         if (response.ok){
//             const data = await response.json();
//             console.log(data)
            
//             // displayResults(data);
            
            
          
//         }
//         else{
//             throw Error(await response.text());
//         }
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// apiFetch();


// function displayResults(data) {
//     currentTemp.innerHTML = `${data.main.temp}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let desc = data.weather[0].
//     description;
//     weatherIcon.setAttribute('alt', data.weather[0].description);
//     weatherIcon.setAttribute('src', iconsrc);
//     captionDesc.textContent = `${desc}`;
//   }