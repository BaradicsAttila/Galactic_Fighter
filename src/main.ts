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
import credits from "./credits";
import movement from "./movement";

// desert color: rgb(143, 90, 66)
let difficulty: string = "normal";
let spaceship: string = "spaceshipRed";
let theme: string = "src/Imgages/BackgroundSpace.png";
let health: number = 3;
let score: number = 0;
let timer: number = 0;
let isGameOver: boolean = false;
let shipPositionx: number = 0;
let shipPositiony: number = 0;

const backtomenubtns = document.querySelectorAll(".backToMenu");

settings(difficulty, spaceship, theme);
difficulty = difficultyfinder();
spaceship = spaceshipfinder();
theme = themefinder();
document.querySelector(".apply")!.addEventListener("click", () => {
  applySettings(difficulty, spaceship, theme);
  console.log(shipPositionx, shipPositiony);
  console.log(buttonsPressed);
});

backtomenubtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    backtomenubtn();
  });
});

document.querySelector(".backToMainMenu")!.addEventListener("click", () => {
  (document.querySelector(".menu") as HTMLDivElement).style.display = "block";
});

document.querySelector(".instructions")!.addEventListener("click", () => {
  instructions();
});

document.querySelector(".menuSettings")!.addEventListener("click", () => {
  menusettings();
});

document.querySelector(".credits")!.addEventListener("click", () => {
  credits();
});

document.querySelector(".exit")!.addEventListener("click", () => {
  window.close();
});

document.querySelector(".startGame")!.addEventListener("click", () => {
  startGame();
});

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.repeat == false) {
    movement(event, shipPositionx, shipPositiony);
  }
});

let buttonsPressed: number = 0;
let movetimer: number;
document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.repeat == false) {
    buttonsPressed++;
    console.log("buttonsPressed");
    movetimer = setInterval(() => {
      shipPositionx = parseInt(
        getComputedStyle(document.querySelector(".spaceship") as HTMLDivElement)
          .left
      );
      shipPositiony = parseInt(
        getComputedStyle(document.querySelector(".spaceship") as HTMLDivElement)
          .bottom
      );
      console.log("running");
    }, 10);
  }
});

document.addEventListener("keyup", () => {
  buttonsPressed--;
  console.log("ButtonRelased");
  if (buttonsPressed == 0) {
    clearInterval(movetimer);
  }
});
