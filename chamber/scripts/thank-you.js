
const memebersInfomartion = window.location.href;
console.log(memebersInfomartion);
const spereate = memebersInfomartion.split('?');
console.log(spereate);
const formatdata = spereate[1].split('&');
console.log(formatdata);

function getMemeberName(data) {
    formatdata.forEach(element => {
       if(element.startsWith(data)) {
        result = element.split('=')[1].replace("%40", "@");
    
       }
    });
    return (result);
}



function formatTimestamp(timestamp) {
    const decodedTimestamp = decodeURIComponent(timestamp);
    const date = new Date(decodedTimestamp);
    return date.toLocaleString(); // Format the date and time as a readable string
}

// }
getMemeberName("phone");
const np = document.getElementById('rececive');
np.innerHTML += `
     <div class="memeberships">
           <h2>New memebr: ${getMemeberName("first")}, ${getMemeberName("last")}</h2>
           <p>Phone: ${getMemeberName("phone")}</p>
            <p>Email: ${getMemeberName("email")}</p>
            <p>Organizational title: ${getMemeberName("orgTitle")}</p>
            <p> Business/Organization's name: ${getMemeberName("organization")}</p>
            <p> membership level: ${getMemeberName("Bronze")}</p>
           <p> description: ${getMemeberName("description")}</p>
           <p>Time registered: ${formatTimestamp(getMemeberName("timestamp"))}</p>
          
        </div>`;




const memebername = formatdata[0,8].split('=');

