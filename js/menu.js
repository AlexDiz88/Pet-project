"use strict";

$(document).ready(function () {
  $("#dropdown-icon").click(function (event) {
    $("#dropdown-icon").toggleClass("active");
    $("#dropdown-nav-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
