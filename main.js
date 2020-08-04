// we have to create a function to get rid of the preloader

// when the whole website loads
window.addEventListener("load", async () => {
  setTimeout(() => {
    $(".preloader .rocket").addClass("rocket-exit");
    $(".preloader h1").addClass("rocket-exit");
  }, 100);

  $(".preloader").fadeOut(300, () => {
    $(".content").removeClass("hide");
    $("#my-section").removeClass("hide");
    $(".container1").removeClass("hide");
  });
  let bg = document.querySelector("#bg");
  let moon = document.querySelector("#moon");
  // let mountain = document.querySelector("#mountain");
  let road = document.querySelector("#road");
  let text = document.querySelector("#text");

  window.addEventListener("scroll", () => {
    var value = window.scrollY;
    bg.style.top = value * 0.5 + "px";
    moon.style.left = -value * 0.5 + "px";
    mountain.style.top = -value * 0.2 + "px";
    road.style.top = -value * 0 + "px";
    text.style.top = value * 0.65 + "px";
  });
});
