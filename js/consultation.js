// ======================
// SIDEBAR TOGGLE
// ======================

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        sidebar.classList.toggle("show");

    });

}

// ======================
// SAVE CONSULTATION
// ======================

const saveBtn =
document.querySelector(".save-btn");

if(saveBtn){

saveBtn.addEventListener("click",()=>{

    alert(
    "Consultation Saved Successfully!"
    );

});

}

// ======================
// SEND TO PRESCRIPTION
// ======================

const sendBtn =
document.querySelector(".send-btn");

if(sendBtn){

sendBtn.addEventListener("click",()=>{

    alert(
    "Consultation Sent To Prescription Desk Successfully!"
    );

});

}

// ======================
// SEARCH CONSULTATIONS
// ======================

const searchInput =
document.getElementById("searchConsultation");

if(searchInput){

searchInput.addEventListener("keyup",function(){

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

// ======================
// VIEW BUTTONS
// ======================

const viewBtns =
document.querySelectorAll("table button");

viewBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Opening Consultation Details");

});

});