const menuBtn =
document.querySelector(".menu-btn");

const sidebar =
document.querySelector(".sidebar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("show");

});

}

const searchPatient =
document.getElementById("searchPatient");

if(searchPatient){

searchPatient.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let rows =
document.querySelectorAll("#historyTable tbody tr");

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

alert("Opening Patient History Details");

});

});