


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
    
    console.log(prophets);
    

    
    const cousreTable = document.getElementById('cards');
    cousreTable.innerHTML ='';

  



    // const cousreTable = document.getElementById('cards');
    //  cousreTable.innerHTML ='';
    
    prophets.forEach(prophet => {

            
    
            const templeCard = document.createElement('div');
            templeCard.className ='card';
            templeCard.innerHTML = `

                <div class="buiness"> <h4>${prophet.name}</h4></div>
              
                <img src="${prophet.image}" alt="${prophet.name}" loading="lazy" width="200" height ="100">
              
              
                <p><span>Email:</span>${prophet.email}</p>
            
                <p><span>URl:</span>${prophet.phone}</p>
                <p><span>URl:</span><a href="${prophet.website}">${prophet.name}</a></p>
    `
            cousreTable.appendChild(templeCard);


        // }
        // numbercreideit +=courses.credits;
        
    });

    




    
  
        
    };
  


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




