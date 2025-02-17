const dialog = document.getElementById('dialog');





// Display all membership details
function displayMembershipDetails(memberships) {
    const np = document.getElementById('np');
    // np.innerHTML = ''; // Clear existing content
    memberships.forEach(membership => {
        np.innerHTML += `
        <div class="memeberships">
          <h2>${membership.name}</h2>
          <p>${membership.details}</p>
          <a href="${membership.link}" class="learn-more" data-id="${membership.id}">Learn more about ${membership.name}</a>
          
        </div>`;
    });

    // Add event listeners to "Learn more" buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const membershipId = e.target.getAttribute('data-id');
            const membership = memberships.find(m => m.id === membershipId);
            if (membership) {
                if (membership.id === "silver") {
                    dialog.innerHTML = `
                        <p>${membership.description}</p>
                        <button id="close">Close</button>
                    `;
                } else if (membership.id === "gold") {
                    dialog.innerHTML = `
                        <p>${membership.description}</p>
                        <button id="close">Close</button>
                    `;
                } else {
                    dialog.innerHTML = `
                        <p>${membership.description}</p>
                        <button id="close">Close</button>
                    `;
                }
                dialog.showModal();

                // Add event listener to close button
                document.getElementById('close').addEventListener('click', () => {
                    dialog.close();
                });
            }
        });
    });

    // Add event listener to close button
    dialog.addEventListener('click', (e) => {
        if (e.target.id === 'close') {
            dialog.close();
        }
    });
}

// Example usage
const memberships = [
    {
        id: 'np',
        name: 'NP Membership',
        description: 'Non-Profit, No Fee',
        details: 'NP Membership (Non-Profit, No Fee)',
        link: 'https://np-membership.com'
    },
    {
        id: 'bronze',
        name: 'Bronze Membership',
        description: 'This membership level is for small businesses and includes a listing in the directory and access to events.',
        details: 'Bronze Membership - This membership level is for small businesses and includes a listing in the directory and access to events.',
        link: 'https://bronze-membership.com'
    },
    {
        id: 'silver',
        name: 'Silver Membership',
        description: 'This membership level is for medium-sized businesses and includes a listing in the directory, access to events, and a discount on event tickets.',
        details: 'Silver Membership - This membership level is for medium-sized businesses and includes a listing in the directory, access to events, and a discount on event tickets.',
        link: 'https://silver-membership.com'
    },
    {
        id: 'gold',
        name: 'Gold Membership',
        description: 'This membership level is for large businesses and includes a listing in the directory, access to events, a discount on event tickets, and a featured listing in the directory.',
        details: 'Gold Membership - This membership level is for large businesses and includes a listing in the directory, access to events, a discount on event tickets, and a featured listing in the directory.',
        link: 'tt'
    }
];

// Display all membership details
displayMembershipDetails(memberships);


const hambutton  = document.querySelector('#mybutton');
const  mainnav = document.querySelector('#animateme');

hambutton.addEventListener('click',() =>{
    
    mainnav.classList.toggle('open'); 
    hambutton.classList.toggle('open');

});
