const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") 
    ? navToggle.setAttribute("aria-expanded", false) 
    : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});

const Slider =new A11YSlider(document.querySelector(".slider"), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    responsive: {
        800: {
            dots: false,
        },
    },
});