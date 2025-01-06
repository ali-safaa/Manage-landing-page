const nav_mobile = document.querySelector("[data-nav-mobile]");
const hamburger_icon = document.querySelector("[data-hamburger-icon]");
const close_icon = document.querySelector("[data-close-icon]");
const dots = document.querySelectorAll("[data-dot]");
const card_review = document.querySelectorAll("[data-card]");
const progress_dot = document.querySelectorAll("[data-progress-dot]");

let currentIndex = 0;

hamburger_icon.addEventListener("click", () => {
     hamburger_icon.style.display = "none";
     if (window.innerWidth <= 839) {
          close_icon.style.display = "block";
          nav_mobile.style.display = "block";
     }
});

close_icon.addEventListener("click", () => {
     if (window.innerWidth <= 839) {
          hamburger_icon.style.display = "block";
     }
     close_icon.style.display = "none";
     nav_mobile.style.display = "none";
});

// window.addEventListener("scroll", () => {
//      const header = document.querySelector("[data-header]");
//      const logo = document.querySelector("[data-logo]");
//      const button = document.querySelector("[data-button]");

//      if (window.scrollY >= 600) {
//           header.style.backgroundColor = "#efeded";
//           logo.style.color = "#2ecc71";
//           button.style.backgroundColor = "#f39c12";
//           button.style.color = "white";
//           hamburger_icon.style.color = "black";
//           close_icon.style.color = "black";
//      } else {
//           header.style.backgroundColor = "transparent";
//           logo.style.color = "white";
//           button.style.backgroundColor = "white";
//           button.style.color = "black";
//           hamburger_icon.style.color = "white";
//           close_icon.style.color = "white";
//      }
// });

function updateCarousel() {
     card_review.forEach((card, index) => {
          card.classList.remove("active");
          dots[index].classList.remove("active");
          progress_dot[index].classList.remove("active");
     });

     card_review[currentIndex].classList.add("active");
     dots[currentIndex].classList.add("active");
     progress_dot[currentIndex].classList.add("active");
}

function nextSlide() {
     for (let progress = 10; progress <= 100; progress += 10) {
          progress_dot.forEach((progress_dot) => {
               progress_dot.style.setProperty("--progress", `${progress}%`);
          });
     }

     currentIndex = (currentIndex + 1) % card_review.length;
     updateCarousel();
}

// Automatically change slides
setInterval(nextSlide, 8000);

// Optional: Add click functionality for dots
dots.forEach((dot, index) => {
     dot.addEventListener("click", () => {
          currentIndex = index;
          updateCarousel();
     });
});
