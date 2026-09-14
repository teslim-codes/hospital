// SESSION TIMER

let hours = 3;
let minutes = 24;
let seconds = 18;

setInterval(() => {

seconds++;

if(seconds >= 60){
seconds = 0;
minutes++;
}

if(minutes >= 60){
minutes = 0;
hours++;
}

document.getElementById("sessionTime")
.innerHTML =

String(hours).padStart(2,"0")
+ ":" +
String(minutes).padStart(2,"0")
+ ":" +
String(seconds).padStart(2,"0");

},1000);


// CANCEL BUTTON

function goBack(){

window.history.back();

}


// LOGOUT BUTTON

function logoutUser(){

let confirmLogout =
confirm(
"Are you sure you want to logout?"
);

if(confirmLogout){

alert(
"You have been logged out successfully."
);

// Redirect to Login Page

window.location.href =
"login.html";

}

}