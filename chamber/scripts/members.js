
const url = '';
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