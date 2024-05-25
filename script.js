// NavigationBar Logic
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// TypeWriter Logic
const texts = ["Web Designer", "Full Stack Developer", "3D Designer"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;  // Speed of typing
const erasingSpeed = 50;  // Speed of erasing
const delayBetweenTexts = 2000; // Delay between texts

function type() {
  if (charIndex < texts[textIndex].length) {
    document.getElementById("typewriter").innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    document.getElementById("typewriter").innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  }
}

window.onload = () => {
  setTimeout(type, delayBetweenTexts);
};