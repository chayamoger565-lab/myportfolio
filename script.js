// Say Hello

let button = document.getElementById("helloBtn");
let message = document.getElementById("message");

button.addEventListener("click", function() {
    message.innerText = "Welcome to my portfolio! 😊";
});


// Dark Mode
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerText = "☀️";
    } else {
        themeBtn.innerText = "🌙";
    }

});


// Skills

let skills = document.querySelectorAll(".skill");
let skillInfo = document.getElementById("skillInfo");

skills.forEach(function(skill) {

    skill.addEventListener("click", function() {
        skillInfo.innerText = skill.dataset.info;
    });

});


// Projects

let projectButtons = document.querySelectorAll(".project-btn");
let projectInfo = document.getElementById("projectInfo");

projectButtons.forEach(function(button) {

    button.addEventListener("click", function() {
        projectInfo.innerText = button.dataset.info;
    });

});
// Typing Effect

let heading = document.querySelector("#home h1");

let text = "Hi, I'm Chaya ";
let index = 0;

heading.innerText = "";

function typeText() {

    if (index < text.length) {

        heading.innerText += text.charAt(index);

        index++;

        setTimeout(typeText, 100);

    }

}

typeText();
// Scroll Animation

let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {

    sections.forEach(function(section) {

        let position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }

    });
});

let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



