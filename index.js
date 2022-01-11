// Open and close the side menu --- Variable
const btnSlide = document.querySelectorAll(".btnSlide");
const sideMenu = document.querySelector(".navBar__sideMenu");

// Open and close the side menu --- Function
/* In this way, we can add as many buttons to open or close our side menu, as long as the button has the class="btnSlide" */
btnSlide.forEach((btnSlide) => {
  btnSlide.addEventListener("click", () => {
    sideMenu.classList.toggle("menuTranslate");
  });
});
