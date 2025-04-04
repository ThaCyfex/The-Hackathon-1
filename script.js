// I handle form submissions for section-specific contact forms
document.querySelectorAll(".contact-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const sectionName = form.dataset.section; // Get the section name from the form's data attribute

        alert(`Thank you for your message about "${sectionName}". I will get back to you soon!`);
        form.reset(); // Reset the form after submission
    });
});

// I manage the contact form pop-up functionality
const contactPopup = document.querySelector(".contact-popup");
const closeContactPopup = document.querySelector(".close-form");
const contactForm = document.querySelector("#contact-form");
let currentSection = ""; // Track the current section for tagging

// I show the contact form pop-up when a contact link is clicked
document.querySelectorAll(".contact-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        currentSection = link.dataset.section; // Get the section name from the data attribute
        contactPopup.classList.add("show-popup");
    });
});

// I hide the contact form pop-up when the close button is clicked
closeContactPopup.addEventListener("click", () => {
    contactPopup.classList.remove("show-popup");
});

// I handle form submission with section tagging
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const email = formData.get("email");
    const message = formData.get("message");

    alert(`Thank you for your message about "${currentSection}". I will get back to you soon!`);
    console.log(`Email: ${email}, Message: ${message}, Section: ${currentSection}`);
    contactPopup.classList.remove("show-popup");
    contactForm.reset();
});

// I manage the dynamic CV preview modal behavior
const cvPreviewBtn = document.querySelector(".cv-preview-btn"); // I select the button to open the CV preview modal
const cvModal = document.querySelector(".cv-modal"); // I select the CV modal container
const closeCvModal = document.querySelector(".close-modal"); // I select the close button for the CV modal

// I display the CV preview modal when the button is clicked
cvPreviewBtn.addEventListener("click", () => {
    cvModal.classList.add("show-modal"); // I add a class to make the modal visible
});

// I hide the CV modal when the close button is clicked
closeCvModal.addEventListener("click", () => {
    cvModal.classList.remove("show-modal"); // I remove the class to hide the modal
});

// I track and display visitor counts using local storage
const visitorCount = document.querySelector("#visitor-count"); // I select the visitor count element
try {
    const visits = localStorage.getItem("visits") ? parseInt(localStorage.getItem("visits")) + 1 : 1; // I increment visits
    localStorage.setItem("visits", visits); // I save the updated visit count in local storage
    visitorCount.textContent = `Visitors: ${visits}`; // I update the visitor count display on the page
} catch (error) {
    console.error("LocalStorage is not available:", error); // I log an error if localStorage is unavailable
    visitorCount.textContent = "Visitors: N/A"; // I display a fallback message
}

// I implement the theme switcher functionality to toggle between light and dark modes
const themeToggle = document.querySelector("#theme-toggle"); // I select the theme toggle button
function toggleTheme() {
    document.body.classList.toggle("dark-mode"); // I toggle the 'dark-mode' class on the body
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode"; // I update the button text
}
themeToggle.addEventListener("click", toggleTheme);

// I add smooth scrolling behavior for navigation links
const navLinks = document.querySelectorAll(".nav-links a"); // I select all navigation links
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // I prevent the default anchor behavior
        const targetSection = document.querySelector(e.target.getAttribute("href")); // I find the target section
        targetSection.scrollIntoView({ behavior: "smooth" }); // I enable smooth scrolling to the section
    });
});

// I handle navigation clicks to toggle sections dynamically
const sections = document.querySelectorAll(".section"); // I select all sections

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // I prevent default link behavior
        const targetSection = link.getAttribute("data-section"); // I get the target section ID

        // I hide all sections and remove the active class
        sections.forEach((section) => {
            section.classList.add("hidden");
            section.classList.remove("active");
        });

        // I reveal the target section
        const sectionToShow = document.getElementById(targetSection);
        sectionToShow.classList.remove("hidden");
        sectionToShow.classList.add("active");
    });
});

// I ensure the art reel is hidden when navigating away from the landing page
const artReel = document.querySelector(".art-reel");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        artReel.classList.add("hidden"); // Hide the art reel
    });
});

// I add scroll animations to reveal sections dynamically as they appear in the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { // I check if the section is currently visible
            entry.target.classList.add("visible"); // I add a class to reveal the section
        }
    });
}, { threshold: 0.1 }); // I use a threshold to define visibility percentage

document.querySelectorAll("section").forEach((section) => observer.observe(section)); // I observe all sections for scroll visibility

// I add background music functionality with a play/pause toggle
const music = document.getElementById("background-music"); // I select the background music element
const musicToggle = document.querySelector("#music-toggle"); // I select the music toggle button
musicToggle.addEventListener("click", () => {
    if (!music) { // I check if the music element exists
        alert("Background music is unavailable."); // I display an alert if music is unavailable
        return;
    }
    if (music.paused) { // I check if the music is paused
        music.play(); // I play the music if paused
        musicToggle.textContent = "Pause Music"; // I update the button text
    } else {
        music.pause(); // I pause the music if playing
        musicToggle.textContent = "Play Music"; // I update the button text
    }
});

// I manage the custom cursor behavior for enhanced interactivity
const customCursor = document.querySelector(".custom-cursor"); // I select the custom cursor element
document.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => {
        customCursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`; // I use transform for smoother animations
    });
});