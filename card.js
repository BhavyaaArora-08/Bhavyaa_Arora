// Refs
const wrapCta = document.querySelector("#wrap-cta"),
  btnCta = document.querySelector("#cta"),
  content = document.querySelector("#content"),
  btnClose = document.querySelector("#close");

// Anime.js Commons Values for SVG Morph
const common = {
  targets: ".polymorph",
  easing: "easeOutQuad",
  duration: 600,
  loop: false,
};

// Show content
btnCta.addEventListener("click", () => {
  // Elements apparence
  wrapCta.classList.remove("active");
  content.classList.add("active");

  // Morph SVG
  anime({
    ...common,
    points: [{ value: "215,110 0,110 186,86 215,0" }],
  });
});

// Hide content
btnClose.addEventListener("click", () => {
  // Elements apparence
  content.classList.remove("active");
  wrapCta.classList.add("active");

  // Morph SVG
  anime({
    ...common,
    points: [{ value: "215,110 0,110 0,0 215,0" }],
  });
});

const cards = document.querySelectorAll(".card");

var playing = [];

for (var i = 0; i < cards.length; i++) {
  playing[i] = false;
}

for (var i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("click", function () {
    if (playing[i]) return;

    playing[i] = true;
    anime({
      targets: card,
      scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
      rotateY: { value: "+=180", delay: 200 },
      easing: "easeInOutSine",
      duration: 400,
      complete: function (anim) {
        playing[i] = false;
      },
    });
  });
}
