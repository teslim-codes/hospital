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

// DARK MODE

const darkMode =
document.getElementById("darkMode");

if(darkMode){

darkMode.addEventListener("change",()=>{

document.body.classList.toggle("dark");

});

}

// SAVE SETTINGS

document.querySelectorAll("form")
.forEach(form=>{

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Settings Saved Successfully");

});

});

// MANAGE USERS

document.querySelectorAll(".setting-item button")
.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Opening User Management");

});

});

// BACKUP

document.querySelector(".backup-btn")
.addEventListener("click",()=>{

alert("Database Backup Created");

});

// RESTORE

document.querySelector(".restore-btn")
.addEventListener("click",()=>{

alert("Database Restore Started");

});