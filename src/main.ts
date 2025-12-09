import "./style.css";
import settings from "./settings";
import difficultyfinder from "./difficultyfinder";
import spaceshipfinder from "./spaceshipfinder";
import themefinder from "./themefinder";
import damagerecived from "./damagerecived";
import menusettings from "./menuSettings";
import startGame from "./startgame";
import backtomenubtn from "./backtomenubtn";
import applySettings from "./applySettings";
import instructions from "./instructions";

// desert color: rgb(143, 90, 66)
let difficulty: string = "normal";
let spaceship: string = "spaceshipRed";
let theme: string = "src/Imgages/BackgroundSpace.png";
let health: number = 3;
let score: number = 0;
let timer: number = 0;
let isGameOver: boolean = false;

const backtomenubtns = document.querySelectorAll(".backToMenu");

settings(difficulty, spaceship, theme);
difficulty = difficultyfinder();
spaceship = spaceshipfinder();
theme = themefinder();
document.querySelector(".apply")!.addEventListener("click", () => {
  applySettings(difficulty, spaceship, theme);
});

backtomenubtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    backtomenubtn();
  });
});

document.querySelector(".backToMainMenu")!.addEventListener("click", () => {
  (document.querySelector(".menu") as HTMLDivElement).style.display = "block";
});
document.querySelector(".startGame")!.addEventListener("click", () => {
  startGame();
});
document.querySelector(".instructions")!.addEventListener("click", () => {
  instructions();
});

document.querySelector(".menuSettings")!.addEventListener("click", () => {
  menusettings();
});
