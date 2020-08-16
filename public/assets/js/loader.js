window.onload = function () {
  var loads = document.getElementsByClassName("load");
  for (load in loads) {
    let loadID = loads[load].id;
    let path = "/shared/" + loadID + ".html";
    $("#" + loadID).load(path);
  }
};
