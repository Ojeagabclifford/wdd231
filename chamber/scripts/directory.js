

const url1 = './data/members.json';

async function getProphetData1(url1) {

    const response = await fetch(url1);

    if(response.ok){
        const data = await response.json();
       
    displayProphets1(data.companys);
    
       
    }
    else
    {
        console.log("ddddd");
    }
    
}




const displayProphets1 = (prophets) => {
    
    console.log(prophets);
    

    
    const cousreTable = document.getElementById('card1');
    cousreTable.innerHTML ='';

  



    const cousreTable1= document.getElementById('cards');
    cousreTable1.innerHTML ='';
    
    prophets.forEach(prophet => {

            
    
            const templeCard = document.createElement('div');
            templeCard.className ='card';
            templeCard.innerHTML = `

                <div class="buiness"> <p>${prophet.name}</p></div>
                <img src="${prophet.image}" alt="${prophet.name}" loading="lazy" width="200" height ="100">
              
                <p><span>Email:</span>${prophet.email}</p>
            
                <p><span>URl:</span>${prophet.phone}</p>
                <p><span>URl:</span><a href="${prophet.website}">${prophet.name}</a></p>
                <p><span>Member Level:</span>${prophet.address}</p>
                <p><span>Member Level:</span>${prophet.membershipLevel}</p>
    `
            cousreTable1.appendChild(templeCard);
        
    });    
    };


  
    document.getElementById('grid').addEventListener('click', (Event)=>{
        Event.preventDefault();
      
       getProphetData1(url1);
    });
    
    
    document.getElementById('list').addEventListener('click', (Event)=>{
        Event.preventDefault();
      
const url1 = './data/members.json';

async function getProphetData1(url1) {

    const response = await fetch(url1);

    if(response.ok){
        const data = await response.json();
       
    displayProphets1(data.companys);
    
       
    }
    else
    {
        console.log("ddddd");
    }
    
}




const displayProphets1 = (prophets) => {
    
    console.log(prophets);
    

    
    const cousreTable = document.getElementById('cards');
    cousreTable.innerHTML ='';

  



    const cousreTable1= document.getElementById('card1');
    cousreTable1.innerHTML ='';
    
    prophets.forEach(prophet => {

            
    
            const templeCard = document.createElement('div');
            templeCard.className ='card1';
            templeCard.innerHTML = `

                <div class="buiness1"> <p>${prophet.name}</p></div>
                
                <p><span>Email:</span>${prophet.email}</p>
            
                <p><span>URl:</span>${prophet.phone}</p>
                <p><span>URl:</span><a href="${prophet.website}">${prophet.name}</a></p>
                <p><span>Member Level:</span>${prophet.address}</p>
                <p><span>Member Level:</span>${prophet.membershipLevel}</p>
    `
            cousreTable1.appendChild(templeCard);
        
    });    
    };
  

    getProphetData1(url1);
    
    
    });

    getProphetData1(url1);
    




const hambutton  = document.querySelector('#mybutton');
const  mainnav = document.querySelector('#animateme');

hambutton.addEventListener('click',() =>{
    
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');

});

const currentYear = document.querySelector('#currentyear');
const today = new Date();
currentYear.innerHTML= new Intl.DateTimeFormat('en-US',{
    dateStyle:"medium"
}).format(today);