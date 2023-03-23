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
  .querySelectorAll(".dropdown-container", ".teams")
  .forEach(function (dropDownWrapper) {
    // переменные
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

    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        selectedTournamentId = e.target.id;

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
          const teamDropdownBtn = document.createElement("button");
          //  output.classList.add("dropdown-container");
          teamDropdownBtn.classList.add("dropdown__button");
          teamDropdownBtn.innerHTML = "Команда 1";
          const teamDropdownList = document.createElement("ul");
          teamDropdownList.classList.toggle("dropdown__list--visible");
          teamDropdownList.classList.add("dropdown__list");

          selectedTeamsArray.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add("dropdown__list-item");
            li.textContent = item;
            teamDropdownList.appendChild(li);
          });

          output.innerHTML = "";
          output.appendChild(teamDropdownContainer);
          teamDropdownContainer.appendChild(teamDropdownBtn);
          teamDropdownContainer.appendChild(teamDropdownList);
        }
      });
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;

        //скрытие дропдауна после выбора
        dropDownList.classList.remove("dropdown__list--visible");
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
    console.log(document.querySelectorAll(".dropdown-container"));
  });
