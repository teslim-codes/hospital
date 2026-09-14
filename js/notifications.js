// SIDEBAR TOGGLE

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("show");

});

}

// SEARCH NOTIFICATIONS

const searchInput =
document.getElementById("searchNotification");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let cards =
document.querySelectorAll(".notification-card");

cards.forEach(card=>{

card.style.display =
card.innerText.toLowerCase().includes(value)
? "flex"
: "none";

});

});

}

// MARK ALL AS READ

document.querySelector(".mark-read")
.addEventListener("click",()=>{

document.querySelectorAll(".notification-card")
.forEach(card=>{

card.classList.remove("unread");

});

alert("All notifications marked as read.");

});

// VIEW BUTTONS

document.querySelectorAll(".view-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Opening notification details...");

});

});