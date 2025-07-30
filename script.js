const texts = ["React Developer|", "Frontend Developer|"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typewriter').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
})();

tsParticles.load("particles-js", {
  fullScreen: { enable: false },
  background: {
    color: { value: "#1b2430" },
  },
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    links: {
      enable: true,
      color: "#ffffff",
      distance: 150,
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 2 },
    size: { value: 3 },
    opacity: { value: 0.5 },
  },
});
