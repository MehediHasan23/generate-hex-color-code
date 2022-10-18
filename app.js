/* *
generate hex color code

*/

/* load window function */
window.onload = function () {
  main();
};

function main() {
  const btn = document.querySelector("#btn");
  const container = document.querySelector("#root");
  const output = document.querySelector("#output");

  btn.addEventListener("click", function () {
    const bgColor = hexColor();
    container.style.background = bgColor;
    output.value = bgColor;
  });
}

/* generate hex color */

function hexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
