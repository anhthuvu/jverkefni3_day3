let spacing = document.getElementById('spacing');
let blur = document.getElementById('blur');
let base = document.getElementById('base');
let bg = document.getElementById('bg')
const image = document.querySelector(`img`);

function updateSpacing() {
  image.style.marginTop = `${spacing.value}px`;
  image.style.marginLeft = `${spacing.value}px`;
  console.log(spacing.value);
}
function updateBlur() {
  image.style.filter = `blur(${blur.value}px)`;
  console.log(blur.value);
}
function updateBase() {
  image.style.background = base.value;
  document.querySelector(".hl").style.color = base.value;
  console.log(base.value);
}
function updateBG() {
  document.body.style.background = bg.value;
  console.log(bg.value);
}
spacing.addEventListener("change", updateSpacing);
blur.addEventListener("change", updateBlur);
base.addEventListener("change", updateBase);
bg.addEventListener("change", updateBG);