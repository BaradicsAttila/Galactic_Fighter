import "./style.css";
import settings from "./Settings/settings";
import difficultyfinder from "./Settings/difficultyfinder";
import spaceshipfinder from "./Settings/spaceshipfinder";
import themefinder from "./Settings/themefinder";
import damagerecived from "./Gameplay/damagerecived";
import menusettings from "./Menu/menuSettings";
import startGame from "./Menu/startgame";
import backtomenubtn from "./Menu/backtomenubtn";
import applySettings from "./Settings/applySettings";
import instructions from "./Menu/instructions";
import credits from "./Menu/credits";
import movement from "./Gameplay/movement";
import shotFired from "./Gameplay/shotfired";
import enemySpawn from "./Gameplay/enemyspawn";
import enemyShot from "./enemyshot";
import enemyKilled from "./Gameplay/enemykilled";
import reset from "./Menu/reset";

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
});

backtomenubtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    backtomenubtn();
  });
});

document.querySelector(".backToMainMenu")!.addEventListener("click", () => {
  reset();
  isGameOver = true;
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
  enemySpawn(isGameOver);
  enemyKilled(isGameOver);
  enemyShot();
  isGameOver = false;
});

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.repeat == false) {
    movement(event, shipPositionx, shipPositiony);
  }
});

let pressedkeys: Set<string> = new Set();
let movetimer: number;
let ismovementActive: boolean = false;
document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (!event.repeat) {
    pressedkeys.add(event.key);
    if (!ismovementActive) {
      ismovementActive = true;
      movetimer = setInterval(() => {
        shipPositionx = parseInt(
          getComputedStyle(
            document.querySelector(".spaceship") as HTMLDivElement
          ).left
        );
        shipPositiony = parseInt(
          getComputedStyle(
            document.querySelector(".spaceship") as HTMLDivElement
          ).bottom
        );
      }, 10);
    }
  }
});

document.addEventListener("keyup", (event: KeyboardEvent) => {
  pressedkeys.delete(event.key);
  if (pressedkeys.size == 0) {
    clearInterval(movetimer);
    ismovementActive = false;
  }
});

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key == " " && event.repeat == false) {
    shotFired();
  }
});
