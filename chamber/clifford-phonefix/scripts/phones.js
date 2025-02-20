import { phones } from "../data/phones.mjs";



const container = document.querySelector('.phone-container');

displayActivities(phones);


function displayActivities(activities) {
    activities.forEach(activity => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${activity.name}</h2>
            <figure>
                <img src="${activity.picture}" loading="lazy" alt="${activity.name}">
            </figure>
            <p>${activity.price}</p>
            
        `;
        container.appendChild(card);
    })};
