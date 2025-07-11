export const initBurger = () => {
  const burger = document.getElementById("burger");
  const navList = document.getElementById("navList");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navList.classList.toggle("active");
  });
};
