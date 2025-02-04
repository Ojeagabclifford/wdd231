


// handburgermune





const hambutton  = document.querySelector('#mybutton');
const  mainnav = document.querySelector('#animateme');

hambutton.addEventListener('click',() =>{
    
    mainnav.classList.toggle('open'); 
    hambutton.classList.toggle('open');

});

console.log("love")

const url = './data/members.json';

async function getProphetData1(url) {

    const response = await fetch(url);

    if(response.ok){
        const data = await response.json();
       
    displayProphets(data.companys);
    
       
    }
    else
    {
        console.log("ddddd");
    }
    
}

getProphetData1(url);



const displayProphets = (prophets) => {
    
    
        // Filter gold and silver members
        const eligibleMembers = prophets.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
      
        // Shuffle the eligible members array
        for (let i = eligibleMembers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [eligibleMembers[i], eligibleMembers[j]] = [eligibleMembers[j], eligibleMembers[i]];
        }
      
        // Select two or three random members
        const numberOfSpotlights = Math.floor(Math.random() * 2) + 2; // Randomly select 2 or 3
        const levels = eligibleMembers.slice(0, numberOfSpotlights);
        
      
      
    

    
    const cousreTable = document.getElementById('cards');
    cousreTable.innerHTML ='';

  



    // const cousreTable = document.getElementById('cards');
    //  cousreTable.innerHTML ='';
    
    levels.forEach(prophet => {

            
    
            const templeCard = document.createElement('div');
            templeCard.className ='card';
            templeCard.innerHTML = `

                <div class="buiness"> <h4>${prophet.name}</h4></div>
              
                <img src="${prophet.image}" alt="${prophet.name}" loading="lazy" width="200" height ="100">
              
              
                <p><span>Email:</span>${prophet.email}</p>
            
                <p><span>Phone:</span>${prophet.phone}</p>
                <p><span>URl:</span><a href="${prophet.website}">${prophet.name}</a></p>
                <p><span>Member Level:</span>${prophet.address}</p>
                <p><span>Member Level:</span>${prophet.membershipLevel}</p>
    `
            cousreTable.appendChild(templeCard);


        // }
        // numbercreideit +=courses.credits;
        
    });

    




    
  
        
    };

    document.addEventListener('DOMContentLoaded', displayProphets);
  


// // hambuer


// const displayProphets1 = (prophets) => {
    
//     // console.log(prophets);
    

  



//     const cousreTable1 = document.querySelectorAll('.cards');
//      cousreTable1.innerHTML ='';
     

//     const cousreTable = document.getElementById('card1');
//     cousreTable.innerHTML ='';
    
//     prophets.forEach(prophet => {

            
        
//             const templeCard = document.createElement('div');
//             templeCard.className ='card';
//             templeCard.innerHTML = `
//                 <img src="${prophet.image}" alt="${prophet.name}" width="200" height ="100">
//                 <p>Name:${prophet.name}</p>
//                 <p>Email:${prophet.email}</p>
//                 <a href="${prophet.website}" id="cse-course">${prophet.name}</a>
//     `
//             cousreTable.appendChild(templeCard);


//         // }
//         // numbercreideit +=courses.credits;
        
// });}




