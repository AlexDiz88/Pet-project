"use strict";

let epl_teams = [
  "Арсенал",
  "Астон Вилла",
  "Борнмут",
  "Брайтон",
  "Брентфорд",
  "Вест Хэм",
  "Вулверхэмптон",
  "Кристал Пэлас",
  "Лестер",
  "Ливерпуль",
  "Лидс",
  "Ман.Сити",
  "МЮ",
  "Ноттингем",
  "Ньюкасл",
  "Саутгемптон",
  "Тоттенхэм",
  "Фулхэм",
  "Челси",
  "Эвертон",
];

let bl_teams = [
  "Айнтрахт",
  "Аугсбург",
  "Бавария",
  "Байер",
  "Боруссия Д",
  "Боруссия М",
  "Бохум",
  "Вердер",
  "Вольфсбург",
  "Герта",
  "Кельн",
  "Майнц",
  "РБ Лейпциг",
  "Унион",
  "Фрайбург",
  "Хоффенхайм",
  "Шальке",
  "Штутгарт",
];

/********************************************************************
 ****************** стилизованный выпадающий список *****************
 ********************************************************************/

document
  .querySelectorAll(".dropdown-container")
  .forEach(function (dropDownWrapper) {
    // переменные
    let selectedListId = "";
    let selectedTournamentId = "";
    const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
    const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );

    // Клик по кнопке. Открыть/закрыть select
    dropDownBtn.addEventListener("click", function () {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.add("dropdown__button--active");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        selectedListId = e.target.closest("ul").id;
        selectedTournamentId = e.target.id;
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;

        //скрытие дропдауна после выбора
        dropDownList.classList.remove("dropdown__list--visible");

        // Если выбран один из турниров, создаем дополнительные поля (выпадающий список / поля ручного ввода команд)
        if (selectedTournamentId === "EPL" || selectedTournamentId === "BL") {
          // Инициализируем массив команд под соответствующий выбор турнира
          let selectedTeamsArray;
          switch (selectedTournamentId) {
            case "EPL":
              selectedTeamsArray = epl_teams;
              break;
            case "BL":
              selectedTeamsArray = bl_teams;
              break;
            default:
              selectedTeamsArray = [];
          }

          // Если массив не пустой, создаем выпадающий список (TODO добавить это условие)
          const output = document.getElementById("team-dropdown-container");
          const teamDropdownContainer = document.createElement("div");
          teamDropdownContainer.classList.add("dropdown-container");
          output.appendChild(teamDropdownContainer);

          const teamDropdownBtn = document.createElement("button");
          output.classList.add("dropdown-container");
          teamDropdownBtn.classList.add("dropdown__button");
          teamDropdownBtn.innerHTML = "Команда 1";
          const teamDropdownList = document.createElement("ul");
          teamDropdownList.classList.add("dropdown__list");
          teamDropdownList.classList.add("dropdown__list--visible");
          teamDropdownList.classList.toggle("dropdown__list--visible");

          selectedTeamsArray.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            teamDropdownList.appendChild(li);
            li.classList.add("dropdown__list-item");
          });

          output.innerHTML = "";
          output.appendChild(teamDropdownBtn);
          output.appendChild(teamDropdownList);
        }

        console.log(selectedListId); //проверка id выпадающего списка ul
        console.log(selectedTournamentId); //проверка id выпадающего списка ul
      });
    });

    // Клик снаружи дропдауна - закрывает дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });

    // Esc и Tab закрывают дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  });
