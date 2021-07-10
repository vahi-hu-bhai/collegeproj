// selectors
var slider_icons = document.querySelector(".slide");
var slider_bdy = document.querySelector(".sliderbdy");

//eventListeners
slider_icons.addEventListener("click", () => {
  console.log("merii");
  if (slider_bdy.style.display == "block") {
    slider_bdy.style.display = "none";
  } else {
    slider_bdy.style.display = "block";
  }
  slider_bdy.style.animation = "anand  2s";
});
