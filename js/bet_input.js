"use strict";

// TODO база данных! Отправка ставки
// TODO ставки на доп.время, пенальти, проход дальше итд.
// TODO добавить ручной ввод любой ставки

// выпадающее меню
$("#person, #tournament, #team1, #team2, #team3, #team4").selectmenu({
  icons: { button: "ui-icon-caret-1-s" },
});

// переменные
const MAIN_COLOR = "rgb(33, 44, 82)";
const MAX_BETS_IN_TOUR = 2;
const eplTeams = [
  { key: "Арсенал", value: "arsenal.png" },
  { key: "Астон Вилла", value: "aston_villa.png" },
  { key: "Борнмут", value: "bournemouth.png" },
  { key: "Брайтон", value: "brighton.png" },
  { key: "Брентфорд", value: "brentford.png" },
  { key: "Вест Хэм", value: "west_ham.png" },
  { key: "Вулверхэмптон", value: "wolverhampton.png" },
  { key: "Кристал Пэлас", value: "crystal_palace.png" },
  { key: "Лестер", value: "leicester.png" },
  { key: "Ливерпуль", value: "liverpool.png" },
  { key: "Лидс", value: "leeds.png" },
  { key: "Ман.Сити", value: "man_city.png" },
  { key: "МЮ", value: "man_united.png" },
  { key: "Ноттингем", value: "nottingham_forest.png" },
  { key: "Ньюкасл", value: "newcastle.png" },
  { key: "Саутгемптон", value: "southampton.png" },
  { key: "Тоттенхэм", value: "tottenham.png" },
  { key: "Фулхэм", value: "fulham.png" },
  { key: "Челси", value: "chelsea.png" },
  { key: "Эвертон", value: "everton.png" },
];
const blTeams = [
  { key: "Айнтрахт", value: "eintracht_frankfurt.png" },
  { key: "Аугсбург", value: "augsburg.png" },
  { key: "Бавария", value: "bayern_munich.png" },
  { key: "Байер", value: "bayer_leverkusen.png" },
  { key: "Боруссия Д", value: "bvb.png" },
  { key: "Боруссия М", value: "borussia_gladbach.png" },
  { key: "Бохум", value: "bochum.png" },
  { key: "Вердер", value: "werder_bremen.png" },
  { key: "Вольфсбург", value: "wolfsburg.png" },
  { key: "Герта", value: "hertha_berlin.png" },
  { key: "Кельн", value: "koln.png" },
  { key: "Майнц", value: "mainz.png" },
  { key: "РБ Лейпциг", value: "rb_leipzig.png" },
  { key: "Унион", value: "union_berlin.png" },
  { key: "Фрайбург", value: "freiburg.png" },
  { key: "Хоффенхайм", value: "hoffenheim.png" },
  { key: "Шальке", value: "schalke.png" },
  { key: "Штутгарт", value: "stuttgart.png" },
];
const clTeams = [
  {
    label: "Айнтрахт",
    icon: "eintracht_frankfurt.png",
  },
  {
    label: "Атлетико М",
    icon: "atletico_madrid.png",
  },
  {
    label: "Аякс",
    icon: "ajax.png",
  },
  {
    label: "Бавария",
    icon: "bayern_munich.png",
  },
  {
    label: "Байер",
    icon: "bayer_leverkusen.png",
  },
  {
    label: "Барселона",
    icon: "barcelona.png",
  },
  {
    label: "Бенфика",
    icon: "benfica.png",
  },
  {
    label: "Боруссия Д",
    icon: "bvb.png",
  },
  {
    label: "Брюгге",
    icon: "bruges.png",
  },
  {
    label: "Виктория П",
    icon: "viktoria_plzen.png",
  },
  {
    label: "Динамо З",
    icon: "dinamo_zagreb.png",
  },
  {
    label: "Зальцбург",
    icon: "salzburg.png",
  },
  {
    label: "Интер",
    icon: "inter.png",
  },
  {
    label: "Копенгаген",
    icon: "copenhagen.png",
  },
  {
    label: "Ливерпуль",
    icon: "liverpool.png",
  },
  {
    label: "Маккаби Х",
    icon: "maccabi_haifa.png",
  },
  {
    label: "Ман.Сити",
    icon: "man_city.png",
  },
  {
    label: "Марсель",
    icon: "marseille.png",
  },
  {
    label: "Милан",
    icon: "milan.png",
  },
  {
    label: "Наполи",
    icon: "napoli.png",
  },
  {
    label: "Порту",
    icon: "porto.png",
  },
  {
    label: "ПСЖ",
    icon: "psg.png",
  },
  {
    label: "РБ Лейпциг",
    icon: "rb_leipzig.png",
  },
  {
    label: "Реал М",
    icon: "real_madrid.png",
  },
  {
    label: "Рейнджерс",
    icon: "rangers.png",
  },
  {
    label: "Севилья",
    icon: "sevilla.png",
  },
  {
    label: "Селтик",
    icon: "celtic.png",
  },
  {
    label: "Спортинг Л",
    icon: "sporting.png",
  },
  {
    label: "Тоттенхэм",
    icon: "tottenham.png",
  },
  {
    label: "Челси",
    icon: "chelsea.png",
  },
  {
    label: "Шахтер",
    icon: "shakhtar.png",
  },
  {
    label: "Ювентус",
    icon: "juventus.png",
  },
];
const leTeams = [
  {
    label: "АЕК",
    icon: "aek_larnaca.png",
  },
  {
    label: "Арсенал",
    icon: "arsenal.png",
  },
  {
    label: "Аякс",
    icon: "ajax.png",
  },
  {
    label: "Байер",
    icon: "bayer_leverkusen.png",
  },
  {
    label: "Барселона",
    icon: "barcelona.png",
  },
  {
    label: "Бетис",
    icon: "betis.png",
  },
  {
    label: "Брага",
    icon: "braga.png",
  },
  {
    label: "Будё/Глимт",
    icon: "bodoe_glimt.png",
  },
  {
    label: "Динамо К",
    icon: "dynamo_kyiv.png",
  },
  {
    label: "Зальцбург",
    icon: "salzburg.png",
  },
  {
    label: "Карабах",
    icon: "qarabag.png",
  },
  {
    label: "Лацио",
    icon: "lazio.png",
  },
  {
    label: "Лудогорец",
    icon: "ludogorets.png",
  },
  {
    label: "Мальмё",
    icon: "malmoe.png",
  },
  {
    label: "Мидтьюлланд",
    icon: "midtjylland.png",
  },
  {
    label: "Монако",
    icon: "monaco.png",
  },
  {
    label: "МЮ",
    icon: "man_united.png",
  },
  {
    label: "Нант",
    icon: "nantes.png",
  },
  {
    label: "Олимпиакос",
    icon: "olympiacos.png",
  },
  {
    label: "Омония",
    icon: "omonia_nicosia.png",
  },
  {
    label: "ПСВ",
    icon: "psv_eindhoven.png",
  },
  {
    label: "Реал С",
    icon: "real_sociedad.png",
  },
  {
    label: "Ренн",
    icon: "rennes.png",
  },
  {
    label: "Рома",
    icon: "roma.png",
  },
  {
    label: "Севилья",
    icon: "sevilla.png",
  },
  {
    label: "Спортинг Л",
    icon: "sporting.png",
  },
  {
    label: "Трабзонспор",
    icon: "trabzonspor.png",
  },
  {
    label: "Унион Берлин",
    icon: "union_berlin.png",
  },
  {
    label: "Фейеноорд",
    icon: "feyenoord.png",
  },
  {
    label: "Фенербахче",
    icon: "fenerbahce.png",
  },
  {
    label: "Ференцварош",
    icon: "ferencvaros.png",
  },
  {
    label: "Фрайбург",
    icon: "freiburg.png",
  },
  {
    label: "ХИК",
    icon: "hjk.png",
  },
  {
    label: "Цр.Звезда",
    icon: "crvena_zvezda.png",
  },
  {
    label: "Цюрих",
    icon: "zuerich.png",
  },
  {
    label: "Шахтер",
    icon: "shakhtar.png",
  },
  {
    label: "Шериф",
    icon: "sheriff.png",
  },
  {
    label: "Штурм",
    icon: "sturm.png",
  },
  {
    label: "Ювентус",
    icon: "juventus.png",
  },
  {
    label: "Юнион С-Ж",
    icon: "union_st_gilloise.png",
  },
];

const personList = document.getElementById("person-menu");
const tournamentList = document.getElementById("tournament-menu");
const eplWrapper = document.getElementById("epl-team-wrapper");
const blWrapper = document.getElementById("bl-team-wrapper");
const clWrapper = document.getElementById("cl-team-wrapper");
const leWrapper = document.getElementById("le-team-wrapper");
const betTypesWrapper = document.getElementById("bet-types-wrapper");
const selectedBetFieldWrapper = document.getElementById(
  "selected-bet-field-wrapper"
);
const betCancelBtn = document.getElementById("selected-bet-cancel-btn");
const selectedBetField = document.getElementById("selected-bet");
const betCoefficientField = document.getElementById(
  "bet-coefficient-field-wrapper"
);
const betCoefficient = document.getElementById("coefficient");
const submitBetButton = document.getElementById("submit-bet-button-wrapper");
const submitBlankBetButtonsWrapper = document.getElementById(
  "submit-blankbet-button-wrapper"
);
const submitBlankBetButton1 = document.getElementById("submit-blankbet-button");
const submitBlankBetButton2 = document.getElementById(
  "submit-blankbet-button2"
);

const tourSpinner = document.getElementById("tour-spinner");

// получаем все радиокнопки внутри элемента с id="bet-existence"
const radioBtns = document.querySelectorAll(
  '#bet-existence input[type="radio"]'
);

tournamentList.addEventListener("click", (e) => {
  let checkedBtn;
  radioBtns.forEach((btn) => {
    if (btn.checked) {
      checkedBtn = btn;
    }
  });
  if (checkedBtn.id === "exist-bet") {
    const selectedTournament = e.target.innerText;
    if (selectedTournament === "АПЛ") {
      submitBlankBetButtonsWrapper.classList.remove("unit-display--visible");
      submitBetButton.classList.remove("unit-display--visible");
      betCoefficientField.classList.remove("unit-display--visible");
      selectedBetFieldWrapper.classList.remove("unit-display--visible");
      eplWrapper.classList.add("unit-display--visible");
      blWrapper.classList.remove("unit-display--visible");
      clWrapper.classList.remove("unit-display--visible");
      leWrapper.classList.remove("unit-display--visible");
    } else if (selectedTournament === "Бундеслига") {
      submitBlankBetButtonsWrapper.classList.remove("unit-display--visible");
      submitBetButton.classList.remove("unit-display--visible");
      betCoefficientField.classList.remove("unit-display--visible");
      selectedBetFieldWrapper.classList.remove("unit-display--visible");
      eplWrapper.classList.remove("unit-display--visible");
      blWrapper.classList.add("unit-display--visible");
      clWrapper.classList.remove("unit-display--visible");
      leWrapper.classList.remove("unit-display--visible");
    } else if (selectedTournament === "Лига Чемпионов") {
      submitBlankBetButtonsWrapper.classList.remove("unit-display--visible");
      submitBetButton.classList.remove("unit-display--visible");
      betCoefficientField.classList.remove("unit-display--visible");
      selectedBetFieldWrapper.classList.remove("unit-display--visible");
      eplWrapper.classList.remove("unit-display--visible");
      blWrapper.classList.remove("unit-display--visible");
      clWrapper.classList.add("unit-display--visible");
      leWrapper.classList.remove("unit-display--visible");
    } else if (selectedTournament === "Лига Европы") {
      submitBlankBetButtonsWrapper.classList.remove("unit-display--visible");
      submitBetButton.classList.remove("unit-display--visible");
      betCoefficientField.classList.remove("unit-display--visible");
      selectedBetFieldWrapper.classList.remove("unit-display--visible");
      eplWrapper.classList.remove("unit-display--visible");
      blWrapper.classList.remove("unit-display--visible");
      clWrapper.classList.remove("unit-display--visible");
      leWrapper.classList.add("unit-display--visible");
    }
    betTypesWrapper.classList.add("unit-display--visible");
  }
});

// радиокнопки
// Добавляем обработчик событий "change" для каждой радиокнопки
radioBtns.forEach((btn) => {
  btn.addEventListener("change", () => {
    // Проверяем, какая из радиокнопок выбрана
    if (btn.id === "blank-bet") {
      submitBlankBetButtonsWrapper.classList.add("unit-display--visible");
      submitBetButton.classList.remove("unit-display--visible");
      betCoefficientField.classList.remove("unit-display--visible");
      betTypesWrapper.classList.remove("unit-display--visible");
      selectedBetFieldWrapper.classList.remove("unit-display--visible");
      eplWrapper.classList.remove("unit-display--visible");
      blWrapper.classList.remove("unit-display--visible");
      clWrapper.classList.remove("unit-display--visible");
      leWrapper.classList.remove("unit-display--visible");
    } else if (btn.id === "exist-bet") {
      submitBlankBetButtonsWrapper.classList.remove("unit-display--visible");
      let activeTournament =
        document.getElementById("tournament-button").innerText;
      if (activeTournament === "АПЛ") {
        eplWrapper.classList.add("unit-display--visible");
      }
      if (activeTournament === "Бундеслига") {
        blWrapper.classList.add("unit-display--visible");
      }
      if (activeTournament === "Лига Чемпионов") {
        clWrapper.classList.add("unit-display--visible");
      }
      if (activeTournament === "Лига Европы") {
        leWrapper.classList.add("unit-display--visible");
      }
      if (activeTournament !== "Выбрать турнир") {
        if (selectedBetField.innerText !== "") {
          selectedBetFieldWrapper.classList.add("unit-display--visible");
          betCoefficientField.classList.add("unit-display--visible");
          submitBetButton.classList.add("unit-display--visible");
        } else {
          betTypesWrapper.classList.add("unit-display--visible");
        }
      }
    }
  });
});

// удаление текста ставки при нажатии спец.кнопки
betCancelBtn.addEventListener("click", () => {
  selectedBetField.innerText = "";
  submitBetButton.classList.remove("unit-display--visible");
  betCoefficientField.classList.remove("unit-display--visible");
  selectedBetFieldWrapper.classList.remove("unit-display--visible");
  betTypesWrapper.classList.add("unit-display--visible");
});

// подстановка лого команд при их выборе (АПЛ + БЛ)
const tournament_logos = [
  { key: "АПЛ", value: "epl_logo.png" },
  { key: "Бундеслига", value: "bl_logo.png" },
  { key: "Лига Чемпионов", value: "cl_logo.png" },
  { key: "Лига Европы", value: "le_logo.png" },
];

$("#tournament").on("selectmenuselect", function (event, ui) {
  let logoBeforeTeam = document.createElement("div");
  // задаем стили для картинки-логотипа
  logoBeforeTeam.style.display = "inline-block";
  logoBeforeTeam.style.width = "35px";
  logoBeforeTeam.style.height = "35px";
  logoBeforeTeam.style.marginRight = "5px";
  logoBeforeTeam.style.marginLeft = "-5px";
  // получаем путь к лого
  let logoPath;
  let tournamentField = document.querySelector(
    "#tournament-button > span.ui-selectmenu-text"
  );
  if (event.target.value === "АПЛ") {
    logoPath = "url(../source/img/teams_logo/epl_logo.png) no-repeat";
  } else if (event.target.value === "Бундеслига") {
    logoPath = "url(../source/img/teams_logo/bundesliga_logo.png) no-repeat";
  } else if (event.target.value === "Лига Чемпионов") {
    logoPath = "url(../source/img/teams_logo/cl_logo.png) no-repeat";
  } else if (event.target.value === "Лига Европы") {
    logoPath = "url(../source/img/teams_logo/le_logo.png) no-repeat";
  }
  logoBeforeTeam.style.background = logoPath;
  logoBeforeTeam.style.backgroundSize = "contain";
  // вставляем лого перед названием команды
  tournamentField.insertAdjacentElement("afterbegin", logoBeforeTeam);
  tourSpinner.focus();
});

$("#team1, #team2, #team3, #team4").on(
  "selectmenuselect",
  function (event, ui) {
    let selectedTeam;
    let selectedTeamImage;
    if (event.target.id === "team1") {
      selectedTeam = document.querySelector(
        "#team1-button > span.ui-selectmenu-text"
      );
      selectedTeamImage = eplTeams.find(
        (obj) => obj.key === ui.item.label
      ).value;
    } else if (event.target.id === "team2") {
      selectedTeam = document.querySelector(
        "#team2-button > span.ui-selectmenu-text"
      );
      selectedTeamImage = eplTeams.find(
        (obj) => obj.key === ui.item.label
      ).value;
    } else if (event.target.id === "team3") {
      selectedTeam = document.querySelector(
        "#team3-button > span.ui-selectmenu-text"
      );
      selectedTeamImage = blTeams.find(
        (obj) => obj.key === ui.item.label
      ).value;
    } else if (event.target.id === "team4") {
      selectedTeam = document.querySelector(
        "#team4-button > span.ui-selectmenu-text"
      );
      selectedTeamImage = blTeams.find(
        (obj) => obj.key === ui.item.label
      ).value;
    } else {
      return;
    }
    let logoBeforeTeam = document.createElement("div");
    // задаем стили для картинки-логотипа
    logoBeforeTeam.style.display = "inline-block";
    logoBeforeTeam.style.minWidth = "40px";
    logoBeforeTeam.style.width = "44px";
    logoBeforeTeam.style.height = "44px";
    logoBeforeTeam.style.marginRight = "5px";
    selectedTeam.style.padding = "0px";
    selectedTeam.style.display = "flex";
    selectedTeam.style.alignItems = "center";
    // получаем путь к лого
    let logoPath;
    if (event.target.id === "team1" || event.target.id === "team2") {
      logoPath =
        "url(../source/img/teams_logo/epl/" + selectedTeamImage + ") no-repeat";
    } else {
      logoPath =
        "url(../source/img/teams_logo/bundesliga/" +
        selectedTeamImage +
        ") no-repeat";
    }
    logoBeforeTeam.style.background = logoPath;
    logoBeforeTeam.style.backgroundSize = "contain";
    // вставляем лого перед названием команды
    selectedTeam.insertAdjacentElement("afterbegin", logoBeforeTeam);
  }
);

// autocomplete для Лиги Чемпионов
$(function () {
  $("#cl-teams-home")
    .autocomplete({
      delay: 300,
      minLength: 0,
      source: function (request, response) {
        var matcher = new RegExp(
          "^" + $.ui.autocomplete.escapeRegex(request.term),
          "i"
        );
        response(
          $.grep(clTeams, function (item) {
            return matcher.test(item.label);
          })
        );
      },
      select: function (event, ui) {
        $("#cl-teams-home").val(ui.item.label);
        $("#cl-teams-home").val(ui.item.value);
        $("#cl-teams-home-icon").attr(
          "src",
          "../source/img/teams_logo/champions_league/" + ui.item.icon
        );
        return false;
      },
    })
    .autocomplete("instance")._renderItem = function (ul, item) {
    return $("<li>")
      .append("<div>" + item.label + "</div>")
      .appendTo(ul);
  };

  $("#cl-teams-away")
    .autocomplete({
      minLength: 0,
      source: function (request, response) {
        var matcher = new RegExp(
          "^" + $.ui.autocomplete.escapeRegex(request.term),
          "i"
        );
        response(
          $.grep(clTeams, function (item) {
            return matcher.test(item.label);
          })
        );
      },
      select: function (event, ui) {
        $("#cl-teams-away").val(ui.item.label);
        $("#cl-teams-away").val(ui.item.value);
        $("#cl-teams-away-icon").attr(
          "src",
          "../source/img/teams_logo/champions_league/" + ui.item.icon
        );
        return false;
      },
    })
    .autocomplete("instance")._renderItem = function (ul, item) {
    return $("<li>")
      .append("<div>" + item.label + "</div>")
      .appendTo(ul);
  };
});

// autocomplete для Лиги Европы
$(function () {
  $("#le-teams-home")
    .autocomplete({
      minLength: 0,
      source: function (request, response) {
        var matcher = new RegExp(
          "^" + $.ui.autocomplete.escapeRegex(request.term),
          "i"
        );
        response(
          $.grep(leTeams, function (item) {
            return matcher.test(item.label);
          })
        );
      },
      select: function (event, ui) {
        $("#le-teams-home").val(ui.item.label);
        $("#le-teams-home").val(ui.item.value);
        $("#le-teams-home-icon").attr(
          "src",
          "../source/img/teams_logo/league_europe/" + ui.item.icon
        );
        return false;
      },
    })
    .autocomplete("instance")._renderItem = function (ul, item) {
    return $("<li>")
      .append("<div>" + item.label + "</div>")
      .appendTo(ul);
  };

  $("#le-teams-away")
    .autocomplete({
      minLength: 0,
      source: function (request, response) {
        var matcher = new RegExp(
          "^" + $.ui.autocomplete.escapeRegex(request.term),
          "i"
        );
        response(
          $.grep(leTeams, function (item) {
            return matcher.test(item.label);
          })
        );
      },
      select: function (event, ui) {
        $("#le-teams-away").val(ui.item.label);
        $("#le-teams-away").val(ui.item.value);
        $("#le-teams-away-icon").attr(
          "src",
          "../source/img/teams_logo/league_europe/" + ui.item.icon
        );
        return false;
      },
    })
    .autocomplete("instance")._renderItem = function (ul, item) {
    return $("<li>")
      .append("<div>" + item.label + "</div>")
      .appendTo(ul);
  };
});

// accordion для всех типов ставок
$(function () {
  $("#bet-types, #half, #win-style").accordion({
    collapsible: true,
    active: false,
    animate: 300,
    heightStyle: "content",
  });
});

$(function () {
  $("#gamescore, #goals, #gameresult-goals-amount, #goals-amount").accordion({
    collapsible: true,
    active: 0,
    animate: 300,
    heightStyle: "content",
  });
});

// ловим клик по кнопке ставки и получаем текст ставки
let betTypes = document.getElementById("bet-types-wrapper");
let selectedBetInputField = document.getElementById("selected-bet");
let coefficient = document.getElementById("coefficient");
betTypes.addEventListener("click", (e) => {
  if (e.target.localName === "button") {
    setTimeout(function () {
      betTypesWrapper.classList.remove("unit-display--visible");
      selectedBetFieldWrapper.classList.add("unit-display--visible");
      betCoefficientField.classList.add("unit-display--visible");
      submitBetButton.classList.add("unit-display--visible");
      coefficient.focus();
      selectedBetInputField.innerText = e.target.innerText.replace(
        /[\r\n]+/g,
        " "
      );
    }, 100);
  }
});

// спиннер
$("#tour-spinner").spinner({
  min: 1,
  max: 38,
});

$("#tour-spinner").focus(function () {
  tourSpinner.parentElement.style.border = "2px solid green";
  tourSpinner.parentElement.style.boxShadow = `0 8px 15px black`;
});

$("#tour-spinner").focusout(function () {
  tourSpinner.parentElement.style.border = `2px solid ${MAIN_COLOR}`;
  tourSpinner.parentElement.style.boxShadow = `0 4px 8px ${MAIN_COLOR}`;
});

// запись значений при отправке ставки (с проверками)
function mainCheck(person, tournament, tour) {
  if (person === "Выбрать участника") {
    $("#error-message")[0].innerText = "Не выбран участник!";
    $("#error-message").dialog("open");
    return false;
  }

  if (tournament === "Выбрать турнир") {
    $("#error-message")[0].innerText = "Не выбран турнир!";
    $("#error-message").dialog("open");
    return false;
  }

  if (tour === null || tour <= 0 || tour > 38) {
    $("#error-message")[0].innerText =
      "Игровой тур не выбран, либо указан неверный диапазон!";
    $("#error-message").dialog("open");
    return false;
  }
  return true;
}

submitBetButton.addEventListener("click", () => {
  let person = $("#person-button")[0].innerText;
  let tournament = $("#tournament-button")[0].innerText;
  let tour = $("#tour-spinner").spinner("value");
  if (!mainCheck(person, tournament, tour)) {
    return;
  }
  let homeTeam = "";
  let awayTeam = "";
  let isCorrectHomeTeamName = false;
  let isCorrectAwayTeamName = false;

  if (tournament === "АПЛ") {
    homeTeam = $("#team1-button")[0].innerText;
    awayTeam = $("#team2-button")[0].innerText;
  } else if (tournament === "Бундеслига") {
    homeTeam = $("#team3-button")[0].innerText;
    awayTeam = $("#team4-button")[0].innerText;
  } else if (tournament === "Лига Чемпионов") {
    homeTeam = $("#cl-teams-home")[0].value;
    awayTeam = $("#cl-teams-away")[0].value;
  } else if (tournament === "Лига Европы") {
    homeTeam = $("#le-teams-home")[0].value;
    awayTeam = $("#le-teams-away")[0].value;
  }
  if (homeTeam === "Хозяева" || homeTeam === "") {
    $("#error-message")[0].innerText = "Не указана команда хозяев матча";
    $("#error-message").dialog("open");
    return;
  }
  if (awayTeam === "Гости" || awayTeam === "") {
    $("#error-message")[0].innerText = "Не указана команда гостей матча";
    $("#error-message").dialog("open");
    return;
  }
  if (homeTeam === awayTeam) {
    $("#error-message")[0].innerText = "Выбраны 2 одинаковые команды";
    $("#error-message").dialog("open");
    return;
  }

  // проверка на опечатки в названии команд ЛЧ и ЛЕ
  if (tournament === "Лига Чемпионов") {
    clTeams.forEach((e) => {
      if (homeTeam === e.label) {
        isCorrectHomeTeamName = true;
      }
      if (awayTeam === e.label) {
        isCorrectAwayTeamName = true;
      }
    });
    if (isCorrectHomeTeamName === false) {
      $("#error-message")[0].innerText = "Некорректное название команды хозяев";
      $("#error-message").dialog("open");
      return;
    }
    if (isCorrectAwayTeamName === false) {
      $("#error-message")[0].innerText = "Некорректное название команды гостей";
      $("#error-message").dialog("open");
      return;
    }
  }
  if (tournament === "Лига Европы") {
    leTeams.forEach((e) => {
      if (homeTeam === e.label) {
        isCorrectHomeTeamName = true;
      }
      if (awayTeam === e.label) {
        isCorrectAwayTeamName = true;
      }
    });
    if (isCorrectHomeTeamName === false) {
      $("#error-message")[0].innerText = "Некорректное название команды хозяев";
      $("#error-message").dialog("open");
      return;
    }
    if (isCorrectAwayTeamName === false) {
      $("#error-message")[0].innerText = "Некорректное название команды гостей";
      $("#error-message").dialog("open");
      return;
    }
  }

  let betType = selectedBetField.innerText;
  if (betType === "") {
    $("#error-message")[0].innerText = "Не выбран тип ставки";
    $("#error-message").dialog("open");
    return;
  }
  let coef = betCoefficient.value;
  if (coef === "") {
    $("#error-message")[0].innerText = "Не указан коэффициент ставки";
    $("#error-message").dialog("open");
    return;
  }
  coef = coef.replace(",", ".");

  if (isNaN(Number(coef))) {
    $("#error-message")[0].innerText = "Некорректный коэффициент";
    $("#error-message").dialog("open");
    return;
  }
  coef = parseFloat(coef);
  if (coef < 1) {
    $("#error-message")[0].innerText =
      "Значение коэффициента меньше 1.00 \n(либо отрицательное число)";
    $("#error-message").dialog("open");
    return;
  }
  console.log(person);
  console.log(tournament);
  console.log(tour);
  console.log(homeTeam);
  console.log(awayTeam);
  console.log(betType);
  console.log(coef);
  $(
    "#submit-message"
  )[0].innerText = `${person}\n${tournament} ${tour} тур\n${homeTeam} - ${awayTeam}\n${betType}\nкэф - ${coef}`;
  $("#submit-message").dialog("open");
});

// отправка пустой ставки
submitBlankBetButtonsWrapper.addEventListener("click", (e) => {
  if (
    e.target === submitBlankBetButton1 ||
    e.target === submitBlankBetButton2
  ) {
    let person = $("#person-button")[0].innerText;
    let tournament = $("#tournament-button")[0].innerText;
    let tour = $("#tour-spinner").spinner("value");
    if (!mainCheck(person, tournament, tour)) {
      return;
    }
    if (e.target === submitBlankBetButton1) {
      $(
        "#submit-message"
      )[0].innerText = `${person}\n${tournament} ${tour} тур\nНет ставки`;
      $("#submit-message").dialog("open");
    } else if (e.target === submitBlankBetButton2) {
      $(
        "#submit-message"
      )[0].innerText = `${person}\n${tournament} ${tour} тур\nНет ставок (2 матча)`;
      $("#submit-message").dialog("open");
    }
  } else {
    return;
  }
});

// диалоговые окна
$(function () {
  $("#error-message").dialog({
    modal: true,
    autoOpen: false,
    draggable: false,
    resizable: false,
    width: 340,
    classes: {
      "ui-dialog-titlebar": "error-message-titlebar",
    },
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      },
    },
  });
});

$(function () {
  $("#submit-message").dialog({
    modal: true,
    autoOpen: false,
    draggable: false,
    resizable: false,
    width: 340,
    classes: {
      "ui-dialog-titlebar": "submit-message-titlebar",
    },
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      },
      Отмена: function () {
        $(this).dialog("close");
      },
    },
  });
});

//----------------------------------------------------------------
// подключение удаленного сервера базы данных back4app.com
var Parse = require("parse/node");
//PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.initialize(
  "WphVABC1bgkpyacqAEdcrQ4VUmEKJ4nKam1cwrQ4",
  "MjY8nIJOKaKiW4zqIwPoKjWtQtCiylWJxN8SXKVK"
);
Parse.serverURL = "https://parseapi.back4app.com/";

// создание и добавление объекта в базу данных
async function saveNewPlayer() {
  //Create your Parse Object
  const soccerPlayer = new Parse.User("SoccerPlayer");
  //Define its attributes
  soccerPlayer.set("playerName", "L. Messi");
  soccerPlayer.set("yearOfBirth", 1997);
  soccerPlayer.set("emailContact", "a.wed@email.io");
  soccerPlayer.set("attributes", ["fast", "good conditioning"]);
  try {
    //Save the Object
    const result = await soccerPlayer.save();
    alert("New object created with objectId: " + result.id);
  } catch (error) {
    alert("Failed to create new object: " + error.message);
  }
}

saveNewPlayer();

//
//
//
//
//
//
//
//
//
//
//
//
//--------------------------TEMP / TESTING ------------------------------------------
document.addEventListener("keyup", (k) => {
  if (k.code === "Numpad5") {
    //   console.dir(document.getElementById("cl-teams-home").value);
    let spaaan = document.querySelector(
      "#team1-button > span.ui-selectmenu-text"
    );
    //  console.dir(spaaan);
    //  console.dir(spaaan.innerText);
  }
});
//----------------------end TEMP / TESTING -----------------------------------------
