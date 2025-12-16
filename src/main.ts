import "./style.css";
import settings from "./Settings/settings";
import difficultyfinder from "./Settings/difficultyfinder";
import spaceshipfinder from "./Settings/spaceshipfinder";
import themefinder from "./Settings/themefinder";
import gameTimer from "./Gameplay/gameTimer";
import applySettings from "./Settings/applySettings";
import instructions from "./Menu/instructions";
import credits from "./Menu/credits";
import movement from "./Gameplay/movement";
import shotFired from "./Gameplay/shotfired";
import enemySpawn from "./Gameplay/enemyspawn";
import enemyShotSpawn from "./Gameplay/enemyShotSpawn";
import enemyKilled from "./Gameplay/enemykilled";
import reset from "./Menu/reset";
import isshipgettingdamage from "./Gameplay/isshipgettingdamage";
import scoresett from "./Settings/scoresett";

const IsGameOver = { isGameOver: false as boolean };

let difficulty: string = "normal";
let spaceship: string = "spaceshipRed";
let theme: string = "src/Imgages/BackgroundSpace.png";
let shipPositionx: number = 0;
let shipPositiony: number = 0;

const backtomenubtns = document.querySelectorAll(".backToMenu");

settings();
difficulty = difficultyfinder();
spaceship = spaceshipfinder();
theme = themefinder();
document.querySelector(".apply")!.addEventListener("click", () => {
  applySettings(difficulty, spaceship, theme);
});

backtomenubtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    IsGameOver.isGameOver = true;
    reset();
  });
});

document.querySelector(".instructions")!.addEventListener("click", () => {
  instructions();
});

document.querySelector(".credits")!.addEventListener("click", () => {
  credits();
});

document.querySelector(".exit")!.addEventListener("click", () => {
  window.close();
});

document.querySelector(".startGame")!.addEventListener("click", () => {
  IsGameOver.isGameOver = false;
  (document.querySelector(".spaceship") as HTMLDivElement).style.left =
    10 + "px";
  (document.querySelector(".spaceship") as HTMLDivElement).style.bottom =
    0 + "px";
  (document.querySelector(".menu") as HTMLDivElement).style.display = "none";
  isshipgettingdamage(IsGameOver);
  gameTimer(IsGameOver);
  enemySpawn(IsGameOver);
  enemyKilled(IsGameOver);
  enemyShotSpawn(IsGameOver);
  scoresett();
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
