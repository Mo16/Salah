const cursor = document.querySelector('.cursor');
const section = document.querySelector('#learnmore');

document.addEventListener("mousemove", e => {
    let y = e.pageY - 10;
    let x = e.pageX - 10;

    cursor.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px")
})

let open=false;
const navlist = document.querySelector('.navphone ul');

function navOpen() {
    gsap.set('.navphone ul', {opacity: 0});
    if (open == false) {
        gsap.to('.navphone ul', {display: "flex", duration: 0.1, opacity: 1, ease: "linear"});
        gsap.to('#hamburgericon', {duration: 1.5, rotation: "90deg", ease: "elastic", color: "#1D3354"});
        open=true;
    } else if (open == true) {
        gsap.to(navlist, {duration: 0.2, opacity: 0, ease: "linear"});
        setTimeout(() => {
            gsap.to(navlist, {display: "none"});
        }, 150);
        gsap.set('.navphone ul', {opacity: 0, scale: 1});
        gsap.to('#hamburgericon', {duration: 1.5, rotation: "0deg", ease: "elastic",  color: "#EAEAEA"});
        open=false;
    }
}

function navClose() {
    gsap.to(navlist, {duration: 0.1, opacity: 0, ease: "linear"});
    setTimeout(() => {
        gsap.to(navlist, {display: "none"});
    }, 150);
    gsap.set('.navphone ul', {opacity: 0});
    gsap.to('#hamburgericon', {duration: 1.5, rotation: "0deg", ease: "elastic",  color: "#EAEAEA"});
    open=false;
}

let dropdownOpen = false;

function mosqueDropdown() {
    if (dropdownOpen == true) {
        mosqueDropdownHide();
        dropdownOpen = false;
    } else {
        mosqueDropdownShow();
        dropdownOpen = true;
    }
}

function mosqueDropdownShow() {
    const dropdownButton = document.querySelector('.dropdown-bar span');
    const dropdown = document.querySelector('.mosques-dropdown-menu');
    const dropdownBar = document.querySelector('.dropdown-bar');

    gsap.set(dropdown, {opacity: 0});
    
    dropdown.style.display = "block";
    gsap.to(dropdownBar, {borderBottomLeftRadius: 0, borderBottomRightRadius: 0, duration: 0.3});
    gsap.to(dropdown, {opacity: 1, duration: 0.3});
}

function mosqueDropdownHide() {
    const dropdownButton = document.querySelector('.dropdown-bar span');
    const dropdownMenu = document.querySelector('.mosques-dropdown-menu');
    const dropdownBar = document.querySelector('.dropdown-bar');
    dropdownMenu.style.display = 'none';
    gsap.to(dropdownBar, {borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', duration: 0.3});
 
}

function makeAlert(alertmessage) {
    gsap.set('.alertContainer', {opacity:0, y: -100});
    document.querySelector('.alertContainer').style.display = "block";
    document.querySelector('.alertMessage').innerHTML = alertmessage;
    gsap.to('.alertContainer', {opacity: 1, duration: 0.3, y: 0});
}

function hideAlert() {
    gsap.to('.alertContainer', {opacity: 0, duration: 0.1, y:-100});
    setTimeout(() => {
        document.querySelector('.alertContainer').style.display = "none";
    }, 500);
}

function changeDropdownBarText(x) {
    document.querySelector('.mosque-name-on-bar').innerHTML = x.innerHTML;
}

function loadShow() {
    document.querySelector('.loadicon').style.display = "block";
}

function loadHide() {
    document.querySelector('.loadicon').style.display = "none";
}


function enableLocation(){
    document.getElementById("start-times-title").innerText = "Please Enable Location Services"
    document.getElementById("jamat-times-title").innerText = "Please Enable Location Services"
    document.getElementById("mosquedropdown").style.display = "none"
}

function locationEnabled(){
    document.getElementById("start-times-title").innerText = "Start Times"
    document.getElementById("jamat-times-title").innerText = "Jamat Times"
    document.getElementById("mosquedropdown").style.display = "block"
}