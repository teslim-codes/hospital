// SIDEBAR TOGGLE

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("show");

});

}

// EXPORT REPORT

document.querySelector(".export-btn")
.addEventListener("click",()=>{

alert("Generating PDF Report...");

});

// GENERATE REPORT

document.querySelector(".generate-btn")
.addEventListener("click",()=>{

alert("Analytics Report Generated Successfully");

});

// PATIENT VISIT CHART

new Chart(
document.getElementById("patientChart"),
{
type:"line",
data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{
label:"Patient Visits",
data:[50,70,60,85,90,78,95],
borderColor:"#0B4DBA",
fill:false
}]
}
}
);

// PRESCRIPTION CHART

new Chart(
document.getElementById("prescriptionChart"),
{
type:"bar",
data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{
label:"Prescriptions",
data:[30,45,50,60,55,70,68],
backgroundColor:"#00B074"
}]
}
}
);

// PHARMACY CHART

new Chart(
document.getElementById("pharmacyChart"),
{
type:"doughnut",
data:{
labels:["Dispensed","Pending","Processing"],
datasets:[{
data:[65,15,20],
backgroundColor:[
"#00B074",
"#F59E0B",
"#0B4DBA"
]
}]
}
}
);

// DEPARTMENT CHART

new Chart(
document.getElementById("departmentChart"),
{
type:"pie",
data:{
labels:[
"General",
"Pediatrics",
"Cardiology",
"Laboratory"
],
datasets:[{
data:[40,20,25,15],
backgroundColor:[
"#0B4DBA",
"#00B074",
"#F59E0B",
"#8B5CF6"
]
}]
}
}
);