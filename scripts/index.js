const companySection = document.querySelector(".company");
const tabs = document.querySelectorAll(".object__tab");
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: false,
});

const burger = document.getElementById("burger");
const navList = document.getElementById("navList");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 1. Удаляем класс 'active' у всех табов
    document
      .querySelectorAll(".object__tab")
      .forEach((t) => t.classList.remove("active"));

    // 2. Добавляем класс 'active' на текущий таб
    tab.classList.add("active");

    // 3. Получаем значение data-content для отображения
    const selectedTab =
      tab.textContent.trim() === "МКД в управлении" ? "mkd" : "heritage";

    // 4. Работаем с контентом
    document.querySelectorAll(".objects__grid").forEach((grid) => {
      if (grid.dataset.content === selectedTab) {
        grid.classList.remove("hidden");
        setTimeout(() => {
          grid.classList.add("visible");
        }, 10);
      } else {
        grid.classList.remove("visible");
        setTimeout(() => {
          grid.classList.add("hidden");
        }, 400);
      }
    });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        companySection.classList.add("company--visible");
      } else {
        companySection.classList.remove("company--visible");
      }
    });
  },
  {
    threshold: 0.3, // срабатывает, когда хотя бы 30% блока видно
  }
);

if (companySection) {
  observer.observe(companySection);
}
