// SIDEBAR TOGGLE

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if(menuBtn){
menuBtn.addEventListener("click",()=>{
sidebar.classList.toggle("show");
});
}

// ADD MEDICATION ROW

const addBtn = document.querySelector(".add-medication");

if(addBtn){

addBtn.addEventListener("click",()=>{

const table =
document.querySelector("#medicineTable tbody");

const row = document.createElement("tr");

row.innerHTML = `
<td><input type="text" placeholder="Medication Name"></td>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="number"></td>
<td><input type="text"></td>
<td><button type="button" class="remove-btn">Remove</button></td>
`;

table.appendChild(row);

attachRemoveEvents();

});

}

// REMOVE MEDICATION

function attachRemoveEvents(){

document.querySelectorAll(".remove-btn").forEach(btn=>{

btn.onclick = function(){

this.closest("tr").remove();

};

});

}

attachRemoveEvents();

// SAVE PRESCRIPTION

document.querySelector(".save-btn")?.addEventListener("click",()=>{

alert("Prescription Saved Successfully!");

});

// SEND TO PHARMACY

document.querySelector(".send-btn")?.addEventListener("click",()=>{

alert("Prescription Sent to Pharmacy!");

});

// PRINT

document.querySelector(".print-btn")?.addEventListener("click",()=>{

window.print();

});

// SEARCH HISTORY

const search =
document.getElementById("searchPrescription");

if(search){

search.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

document.querySelectorAll("table tbody tr").forEach(row=>{

row.style.display =
row.innerText.toLowerCase().includes(value)
? ""
: "none";

});

});

}