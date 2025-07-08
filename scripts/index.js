document.querySelectorAll(".object__tab").forEach((tab) => {
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

    // 4. Показываем нужный блок, скрываем остальные
    document.querySelectorAll(".objects__grid").forEach((grid) => {
      if (grid.dataset.content === selectedTab) {
        grid.classList.remove("hidden");
      } else {
        grid.classList.add("hidden");
      }
    });
  });
});
