// const navLinks = document.querySelectorAll("nav ul li a");

// navLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const targetSectionId = link.getAttribute("href");
//     const targetSection = document.querySelector(targetSectionId);
//     targetSection.scrollIntoView({ behavior: "smooth" });
//   });
// });

const footerWrapper = document.querySelector(".footer-wrapper");
const hiddenContent = document.querySelector(".hidden-content");

function handleScroll() {
  const scrollPosition = window.innerHeight + window.pageYOffset;
  const contentPosition = hiddenContent.offsetTop;

  if (scrollPosition >= contentPosition) {
    footerWrapper.classList.add("hidden");
  } else {
    footerWrapper.classList.remove("hidden");
  }
}

window.addEventListener("scroll", handleScroll);
