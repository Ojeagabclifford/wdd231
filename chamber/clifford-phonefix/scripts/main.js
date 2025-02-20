// Function to fetch JSON data
async function fetchPhoneFixData() {
    try {
        const response = await fetch('data/phone-fix.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
        // You can now work with the data
        displayData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

const toolsList = document.getElementById('tools-list');
const stepsList = document.getElementById('how-to');
const dialog = document.getElementById('dialog');
const phoneProblems = document.getElementById('phone-problems');

// Function to display data (example)
function displayData(data) {

    data.repair_messages.forEach(problem => {
        const listItem = document.createElement('div');
        listItem.classList.add('problem');
        listItem.innerHTML = `
            <h2>${problem.title}</h2>
            <p>${problem.message}</p>
            <img src="${problem.img}" width="50"  height="50" alt="${problem.title}">
        `;
        phoneProblems.appendChild(listItem);
       
    });
    const screenReplacement = data.screen_replacement;
    const cleaningChargingPort = data.cleaning_charging_port;

    // Example: Display screen replacement tools
    const howtorepair = document.getElementById('explanation');
    howtorepair.textContent = screenReplacement.instrutions;

    stepsList.addEventListener('click', () => {
        let stepsContent = '<button id="close-dialog">Close</button><h2>Steps</h2>';
        screenReplacement.steps.forEach(step => {
            stepsContent += `<p>${step}</p>`;
        });
        dialog.innerHTML = stepsContent;

        const closeDialog = document.getElementById('close-dialog');
        closeDialog.addEventListener('click', () => {
            dialog.close();
        });
        dialog.showModal();
    });

    toolsList.addEventListener('click', () => {
        dialog.innerHTML = `
            <button id="close-dialog">Close</button>
            <h2>Tools</h2>
            <ul id="full-list"></ul>
        `;
        const closeDialog = document.getElementById('close-dialog');
        closeDialog.addEventListener('click', () => {
            dialog.close();
        });
        const fullList = document.getElementById('full-list');
        screenReplacement.tools.forEach(tool => {
            const listItem = document.createElement('li');
            listItem.textContent = tool;
            fullList.appendChild(listItem);
        });
        dialog.showModal();
    });

    
}

// Call the function to fetch and display data
fetchPhoneFixData();