// Hamburger
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

// memberikan perintah pada element body
document.body.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }
});

// menambahkan perintah pada element hamburger
hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});
