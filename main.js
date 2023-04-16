// VARIABLES
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("icon");

const gridEl = document.getElementById("gallery-grid");

// CONSTANTS
const GALLERY_ITEMS = [
  "public/Rectangle 1.png",
  "public/Rectangle 2.png",
  "public/Rectangle 3.png",
  "public/Rectangle 4.png",
  "public/Rectangle 5.png",
  "public/Rectangle 6.png",
  "public/Rectangle 7.png",
  "public/Rectangle 8.png",
  "public/Rectangle 9.png",
];

gridEl.innerHTML = GALLERY_ITEMS.map((item) => {
  return `<div>
            <img src="${item}" />
          </div>
  `;
}).join(" ");

// EVENT LISTENERS
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  mobileMenu.classList.toggle("open");

  const links = document.querySelectorAll(".links");
  links.forEach((link) =>
    link.addEventListener("click", () => {
      menuIcon.classList.remove("active");
      mobileMenu.classList.remove("open");
    })
  );
});
