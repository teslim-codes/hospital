// SIDEBAR TOGGLE

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("show");

});

}

//send button
const sendBtn =
document.querySelector(".send-btn");

if(sendBtn){

sendBtn.addEventListener("click",()=>{

    alert(
    "Consultation Sent To Prescription Desk Successfully!"
    );

});

}

//save button
const saveBtn =
document.querySelector(".save-btn");

if(saveBtn){

saveBtn.addEventListener("click",()=>{

    alert(
    "Consultation Saved Successfully!"
    );

});

}
//print button
const printBtn =
document.querySelector(".print-btn");

if(printBtn){

printBtn.addEventListener("click",()=>{

    alert(
    "Consultation printed Successfully!"
    );

});

}

// LIVE DATE & TIME

function updateDateTime(){

const now = new Date();

const options = {
weekday:'long',
year:'numeric',
month:'long',
day:'numeric'
};

const date = now.toLocaleDateString('en-US',options);
const time = now.toLocaleTimeString();

const datetime =
document.getElementById("datetime");

if(datetime){

datetime.innerHTML = `
${date}<br>${time}
`;

}

}

setInterval(updateDateTime,1000);

// SEARCH TABLE

const search =
document.getElementById("search");

if(search){

search.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let rows =
document.querySelectorAll("tbody tr");

rows.forEach(row=>{

row.style.display =
row.innerText.toLowerCase().includes(value)
? ""
: "none";

});

});

}

// QUICK ACTIONS

document
.querySelectorAll(".action-card")
.forEach(card=>{

card.addEventListener("click",()=>{

alert(card.innerText);

});

});

// DEMO NOTIFICATION

setTimeout(()=>{

alert("New Prescription Received");

},5000);