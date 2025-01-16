const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {

    const response = await fetch(url);

    if(response.ok){
        const data = await response.json();
       displayProphets(data.prophets);
       
    }
    else
    {
        console("ddddd");
    }
    
}

// function getData(data){
//     const results = data;
//     return results;
// }


const displayProphets = (prophets) => {
    
    //console.log(prophets);
    

    prophets.forEach(prophet => {
        console.log(prophet.
            birthdate
            );
        
        const card = document.createElement('section');
        let fullName = document.createElement('h2');
        let protrait = document.createElement('img');
        let details = document.createElement('p');


        fullName.textContent=`${prophet.name} ${prophet.lastname}`;
        details.innerHTML =`Date of birth: ${prophet.
            birthdate
            } <p>Place of birth:${prophet.
                birthplace
                }</p>`
        
        protrait.setAttribute('src', prophet.imageurl);
        protrait.setAttribute('alt', `potrait of ${prophet.name}${prophet.lastname}`);
        protrait.setAttribute('loading','lazy');
        protrait.setAttribute('width','340');
        protrait.setAttribute('heigth','440');
 

    
        
      card.appendChild(fullName);
      card.appendChild(details)
      card.appendChild (protrait);
      cards.appendChild(card);

        
    });
  }

getProphetData(url);