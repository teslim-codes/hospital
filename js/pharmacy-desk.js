const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("show");

});

}

const searchInput =
document.getElementById("searchPrescription");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value = this.value.toLowerCase();

let rows =
document.querySelectorAll("#prescriptionTable tbody tr");

rows.forEach(row=>{

row.style.display =
row.innerText.toLowerCase().includes(value)
? ""
: "none";

});

});

}

document.querySelectorAll(".view-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Opening Prescription Details");

});

});

document.querySelector(".process-btn")
.addEventListener("click",()=>{

alert("Prescription marked as Processing");

});

document.querySelector(".dispense-btn")
.addEventListener("click",()=>{

alert("Prescription marked as Dispensed");

});

document.querySelector(".print-btn")
.addEventListener("click",()=>{

window.print();

});

document.querySelector(".pdf-btn")
.addEventListener("click",()=>{

alert("Downloading PDF...");

});