// =========================
// SIDEBAR TOGGLE
// =========================

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

// =========================
// LIVE DATE & TIME
// =========================

function updateTime(){

    const now = new Date();

    const options = {
        weekday:'short',
        year:'numeric',
        month:'short',
        day:'numeric'
    };

    const date = now.toLocaleDateString('en-US', options);
    const time = now.toLocaleTimeString();

    const datetime = document.querySelector(".datetime");

    if(datetime){
        datetime.innerHTML = `
            <h4>${date}</h4>
            <span>${time}</span>
        `;
    }
}

setInterval(updateTime,1000);

// =========================
// SEARCH PATIENT TABLE
// =========================

const searchInput = document.querySelector(".table-header input");

if(searchInput){

searchInput.addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(row=>{

        row.style.display =
        row.innerText.toLowerCase().includes(value)
        ? ""
        : "none";

    });

});

}

// =========================
// DARK MODE
// =========================

function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

// =========================
// NOTIFICATION DEMO
// =========================

function showNotification(){

    alert("New Prescription Received!");

}

// Demo every 20 seconds

setInterval(showNotification,20000);