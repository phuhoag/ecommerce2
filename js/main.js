const menuToggle = document.createElement("button");
menuToggle.className = "menu-toggle";
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document
  .querySelector("header")
  .insertBefore(menuToggle, document.querySelector("nav"));

menuToggle.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("active");
});
