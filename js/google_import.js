let SHEET_ID = "11Trvou32fmHrVbiJ__1NpYmPotxQ1uq7bvHSDrHcUT4";
let SHEET_TITLE = "nhl_west";
let SHEET_RANGE = "A1:K17";

let FULL_URL =
  "https://docs.google.com/spreadsheets/d/" +
  SHEET_ID +
  "/gviz/tq?sheet=" +
  SHEET_TITLE +
  "&range=" +
  SHEET_RANGE;

fetch(FULL_URL)
  .then((res) => res.text())
  .then((rep) => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));

    let team_name_title = document.getElementById("team_name_title");
    let team_points_title = document.getElementById("team_points_title");
    let team_name = document.getElementById("team_name");
    let team_points = document.getElementById("team_points");
    let Grid2 = document.getElementById("Grid2");
    let table_lenth = data.table.rows.length;

    console.log(data.table.cols[7].label); // тайтл
    console.log(data.table.rows[0]);
    team_name_title.innerHTML = data.table.cols[1].label;
    team_points_title.innerHTML = data.table.cols[7].label;

    for (let i = 0; i < table_lenth; i++) {
      let TeamName = document.createElement("div");
      TeamName.id = "team" + i;
      TeamName.className = "row_team";
      team_name.append(TeamName);
      TeamName.innerHTML = data.table.rows[i].c[1].v;

      let Points = document.createElement("div");
      Points.id = "points" + i;
      Points.className = "row_points";
      team_points.append(Points);
      Points.innerHTML = data.table.rows[i].c[7].v;
    }
  });
