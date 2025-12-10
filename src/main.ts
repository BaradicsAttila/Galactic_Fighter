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
