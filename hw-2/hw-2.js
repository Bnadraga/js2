// task 1

const input = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

input.addEventListener(
  "input",
  _.debounce((ev) => {
    const scVal = ev.target.value / 50;
    img.style.transform = `scale(${scVal})`;
  }, 50)
);

// task 2

function updateCoordinants(ev) {
  const body = document.body;
  const box = document.getElementById("box");

  const rect = body.getBoundingClientRect();
  const x = ev.clientX - rect.left;
  const y = ev.clientY - rect.top;

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

const debounceUptade = _.debounce(updateCoordinants, 100);
const body = document.body;
body.addEventListener("mousemove", debounceUptade);
