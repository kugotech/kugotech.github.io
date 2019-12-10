function toggleResponsive() {
  var c = document.getElementById("topnav-container");
  var m = document.getElementById("topnav");
  var l = document.getElementById("logo");

  if (m.className === "topnav") {
    c.className += " responsive";
    m.className += " responsive";
    l.style.display = "none";
  } else {
    c.className += "topnav-align";
    m.className = "topnav";
    l.style.display = "block";
  }
}
