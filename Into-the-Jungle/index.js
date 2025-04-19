const toggleNav = document.getElementById("toggle-nav");
const mainTag = document.querySelector("main");

toggleNav.addEventListener("click", function () {
  mainTag.classList.toggle("open");

  if (mainTag.classList.contains("open")) {
    toggleNav.innerHTML = `<img src="./assets/close.svg"> Close`;
  } else {
    toggleNav.innerHTML = `<img src="./assets/menu.svg"> Menu`;
  }
});
