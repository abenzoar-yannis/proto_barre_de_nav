const sideMenuIn = document.getElementById("sideMenuIn");
const sideMenuOut = document.getElementById("sideMenuOut");
const sideMenu = document.querySelector(".sideMenu");
const tabs = document.querySelector(".tabs");

sideMenuIn.addEventListener("click", () => {
  sideMenu.classList.add("menuTranslate");
});
sideMenuOut.addEventListener("click", () => {
  sideMenu.classList.remove("menuTranslate");
});
