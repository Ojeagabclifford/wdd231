const url = './data/activites.json';

const dialog = document.getElementById('mydialog');
const container = document.querySelector('.container-main');
const sidebar = document.getElementById('sidebar');
const sidebarContent = document.getElementById('sidebar-content');
const closeSidebarButton = document.getElementById('close-sidebar');

async function getProphetData(url1) {
    const response = await fetch(url1);

    if (response.ok) {
        const data = await response.json();
        // console.log("Data fetched successfully");
        // console.log(data);
        displayActivities(data);
    } else {
        console.log("Failed to fetch data");
    }
}

function displayActivities(activities) {
    // console.log(activities);
    activities.forEach(activity => {
        // console.log(activity.name)
      
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${activity.name}</h2>
            <figure>
                <img src="${activity.photo_url}"loading="lazy"  alt="${activity.name}">
            </figure>
            <p>${activity.description}</p>
            <address>${activity.address}</address>
            <button class="learn-more" data-id="${activity.name.toLowerCase().replace(/\s+/g, '-')}">Learn more</button>
        `;
        container.appendChild(card);
    });

    // Add event listeners to "Learn more" buttons
    const buttons = document.querySelectorAll('.learn-more');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const locationId = e.target.getAttribute('data-id');
            const activity = activities.find(activity => activity.name.toLowerCase().replace(/\s+/g, '-') === locationId);
            if (activity) {
                dialog.innerHTML = `
                    <img src="${activity.photo_url}" alt="${activity.name}">
                    <p>${activity.description}</p>
                    <p>Cost: ${activity.cost}</p>
                    <button id="close">Close</button>
                `;
                dialog.showModal();

                // Add event listener to close button
                document.getElementById('close').addEventListener('click', () => {
                    dialog.close();
                });
            }
        });
    });
}

// Function to display the last visit message
function displayLastVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = new Date();
    let message = '';

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = currentVisit - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            message = 'Back so soon! Awesome!';
        } else if (daysDifference === 1) {
            message = 'You last visited 1 day ago.';
        } else {
            message = `You last visited ${daysDifference} days ago.`;
        }
    } else {
        message = 'Welcome! Let us know if you have any questions.';
    }

    // Update the sidebar content with the message
    if (sidebarContent) {
        sidebarContent.innerHTML = `<p>${message}</p>`;
    }

    // Store the current visit date in localStorage
    localStorage.setItem('lastVisit', currentVisit);
}

// Add event listener for DOMContentLoaded to ensure the script runs after the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display the activities
    // getProphetData(url);
    getProphetData(url);

    // Display the last visit message
    displayLastVisitMessage();

    // Open the sidebar
    sidebar.classList.add('open');

    // Add event listener to close sidebar button
    closeSidebarButton.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
});



const hambutton  = document.querySelector('#mybutton');
const  mainnav = document.querySelector('#animateme');

hambutton.addEventListener('click',() =>{
    
    mainnav.classList.toggle('open'); 
    hambutton.classList.toggle('open');

});