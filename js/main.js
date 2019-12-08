function toggleResponsive() {
  var m = document.getElementById("topnav");
  var l = document.getElementById("logo");

  if (m.className === "topnav") {
    m.className += " responsive";
    l.style.display = "none";
  } else {
    m.className = "topnav";
    l.style.display = "block";
  }
}
