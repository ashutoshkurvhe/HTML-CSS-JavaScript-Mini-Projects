const cubeEl = document.querySelector(".cube");
const rollBtnEl = document.querySelector(".roll-btn");

rollBtnEl.addEventListener("click", () => {
  cubeEl.style.animation = "animation 2s linear";

  const randomAngle = Math.floor(Math.random() * 6); // 0 to 5
  cubeEl.style.transform =
    "rotateX(" +
    angleArray[randomAngle][0] +
    "deg) " +
    "rotateY(" +
    angleArray[randomAngle][1] +
    "deg) " +
    "rotateZ(" +
    angleArray[randomAngle][2] +
    "deg)";
  cubeEl.style.transition = "1s linear";

  rollBtnEl.addEventListener("animationend", (e) => {
    cubeEl.style.animation = "";
  });
});

let angleArray = [
  [0, 0, 0], 
  [0, 180, 0], 
  [-90, -180, 0], 
  [-60, 90, 150], 
  [-180, -90, 180], 
  [90, 0, -90], 
];
