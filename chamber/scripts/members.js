



const url = './data/members.json';
const cards = document.querySelector('#cards');


async function getProphetData(url) {

    const response = await fetch(url);

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

async function getProphetData1(url) {

    const response = await fetch(url);

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

            
        //     const templeCard = document.createElement('div');
        //     templeCard.className ='container';
        //     templeCard.innerHTML = `<div class='more-d-container' >
        //     <h3>${courses.subject} ${courses.number}</h3>`


        // cousreTable.appendChild(templeCard);}
        // else{
            const templeCard = document.createElement('div');
            templeCard.className ='card';
            templeCard.innerHTML = `
                <img src="${prophet.image}" alt="${prophet.name}" width="200" height ="100">
                <p>Name:${prophet.name}<p/>
                <p>Email:${prophet.email}<p/>
                <a href="${prophet.website}" id="cse-course">${prophet.name}</a>
    `
            cousreTable.appendChild(templeCard);


        // }
        // numbercreideit +=courses.credits;
        
    });

    
        
    //     const card = document.querySelector('#cards');
    //     // let email = document.createElement('p');
    //     // let protrait = document.createElement('img');
    //     // let name = document.createElement('p');
    //     // let links = document.createElement('a');




    
    
//    ${email.textContent=`${prophet.email}`}``
    
//         protrait.setAttribute('src', prophet.image);
//         protrait.setAttribute('alt', `potrait of ${prophet.name}`);
//         protrait.setAttribute('loading','lazy');
//         protrait.setAttribute('width','200');
//         protrait.setAttribute('heigth','100');

//         links.setAttribute('href', prophet.website);
//         links.textContent=`Website: ${prophet.name}`
 

   

        // details.innerHTML =`Date of birth: ${companys.email
        //     } <p>Place of birth:${prophet.
        //         birthplace
        //         }</p>`
        
        // protrait.setAttribute('src', prophet.imageurl);
        // protrait.setAttribute('alt', `potrait of ${prophet.name}${prophet.lastname}`);
        // protrait.setAttribute('loading','lazy');
        // protrait.setAttribute('width','340');
        // protrait.setAttribute('heigth','440');
 

     
    //   card.appendChild (protrait);
    //   card.appendChild(name);
    //   card.appendChild(email);
    //   card.appendChild(links);
    
    //   cards.appendChild(card);

        
    };
  


// hambuer


const displayProphets1 = (prophets) => {
    
    console.log(prophets);
    

  



    const cousreTable1 = document.getElementById('cards');
     cousreTable1.innerHTML ='';
     

    const cousreTable = document.getElementById('card1');
    cousreTable.innerHTML ='';
    
    prophets.forEach(prophet => {

            
        //     const templeCard = document.createElement('div');
        //     templeCard.className ='container';
        //     templeCard.innerHTML = `<div class='more-d-container' >
        //     <h3>${courses.subject} ${courses.number}</h3>`


        // cousreTable.appendChild(templeCard);}
        // else{
            const templeCard = document.createElement('div');
            templeCard.className ='card';
            templeCard.innerHTML = `
                <img src="${prophet.image}" alt="${prophet.name}" width="200" height ="100">
                <p>Name:${prophet.name}<p/>
                <p>Email:${prophet.email}<p/>
                <a href="${prophet.website}" id="cse-course">${prophet.name}</a>
    `
            cousreTable.appendChild(templeCard);


        // }
        // numbercreideit +=courses.credits;
        
});}






document.getElementById('list').addEventListener('click', (Event)=>{
    Event.preventDefault();
    // const cousreTable = document.getElementById('cards');
    // cousreTable.innerHTML ='';
     
    // const ss = document.createElement('div');
    // ss.className ='card1';
    // const d = document.querySelector('.card1')
    // d.innerHTML = getProphetData(url);
    // cousreTable.appendChild(ss);

   
    
  
    


    getProphetData1(url);
     console.log(ss);

  
     


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
