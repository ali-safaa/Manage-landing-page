const nav_mobile = document.querySelector("[data-nav-mobile]");
const hamburger_icon = document.querySelector("[data-hamburger-icon]");
const close_icon = document.querySelector("[data-close-icon]");

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
