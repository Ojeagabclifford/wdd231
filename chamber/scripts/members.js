



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


const displayProphets = (prophets) => {
    
    console.log(prophets);
    

  prophets.forEach(prophet => {
        
        const card = document.createElement('section');
        let email = document.createElement('p');
        let protrait = document.createElement('img');
        let name = document.createElement('p');
        let links = document.createElement('a');


    
    name.innerHTML=`Name:${prophet.name}`;
    email.textContent =`Email:${prophet.email}`;
    
        protrait.setAttribute('src', prophet.image);
        protrait.setAttribute('alt', `potrait of ${prophet.name}`);
        protrait.setAttribute('loading','lazy');
        protrait.setAttribute('width','200');
        protrait.setAttribute('heigth','100');

        links.setAttribute('href', prophet.website);
        links.textContent=`Website: ${prophet.name}`
 

   

        // details.innerHTML =`Date of birth: ${companys.email
        //     } <p>Place of birth:${prophet.
        //         birthplace
        //         }</p>`
        
        // protrait.setAttribute('src', prophet.imageurl);
        // protrait.setAttribute('alt', `potrait of ${prophet.name}${prophet.lastname}`);
        // protrait.setAttribute('loading','lazy');
        // protrait.setAttribute('width','340');
        // protrait.setAttribute('heigth','440');
 

    
      card.appendChild (protrait);
      card.appendChild(name);
      card.appendChild(email);
      card.appendChild(links);
    
      cards.appendChild(card);

        
    });
  }

getProphetData(url);

// hambuer
const hambutton  = document.querySelector('#mybutton');
const  mainnav = document.querySelector('#nav1');




hambutton.addEventListener('click',() =>{
    mainnav.classList.toggle('open');

    // yes.appendChild(mainnav);
    
    
    hambutton.classList.toggle('open');

});