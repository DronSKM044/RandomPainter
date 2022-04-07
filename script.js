"use strict";

const startButton = document.querySelector(".button-start");

// Clear our canvas and start painting
startButton.addEventListener("click", () => {
  const stage = document.getElementById("canvas-stage");
  const ctx = stage.getContext("2d");
  const stageWidth = stage.getBoundingClientRect().width;
  const stageHeight = stage.getBoundingClientRect().height;
  ctx.clearRect(0, 0, stageWidth, stageHeight);

  let painter = new Painter(firstColor, secondColor, timer);
  painter.run();
});
