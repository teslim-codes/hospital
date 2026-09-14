// SIDEBAR TOGGLE

const menuBtn =
document.querySelector(".menu-btn");

const sidebar =
document.querySelector(".sidebar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("show");

});

}

// SEARCH RECORDS

const searchInput =
document.getElementById("searchRecord");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let rows =
document.querySelectorAll("#recordsTable tbody tr");

rows.forEach(row=>{

row.style.display =
row.innerText.toLowerCase().includes(value)
? ""
: "none";

});

});

}

// VIEW RECORD

document.querySelectorAll(".view-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Opening Record Details");

});

});

// EXPORT BUTTON

document.querySelector(".export-btn")
.addEventListener("click",()=>{

alert("Exporting Records...");

});