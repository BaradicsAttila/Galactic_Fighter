import "./style.css";
import settings from "./settings";
import difficultyfinder from "./difficultyfinder";
import spaceshipfinder from "./spaceshipfinder";
import themefinder from "./themefinder";
import damagerecived from "./damagerecived";
import menu from "./menu";
import backMenu from "./menu";

// desert color: rgb(143, 90, 66)
let difficulty: string = "normal";
let spaceship: string = "spaceshipRed";
let theme: string = "src/Imgages/BackgroundSpace.png";
let health: number = 3;
let score: number = 0;
let timer: number = 0;
let isGameOver: boolean = false;
const spaceshipDiv: HTMLDivElement = document.querySelector(
  ".spaceship"
) as HTMLDivElement;

document.querySelector(".startGame")!.addEventListener("click", () => {
  (document.querySelector(".menu") as HTMLDivElement).style.display = "none";
});
document.querySelector(".backToMenu")!.addEventListener("click", () => {
  (document.querySelector(".menu") as HTMLDivElement).style.display = "block";
});
settings(difficulty, spaceship, theme);
difficulty = difficultyfinder();
spaceship = spaceshipfinder();
theme = themefinder();
document.querySelector(".apply")!.addEventListener("click", () => {
  difficulty = difficultyfinder();
  spaceship = spaceshipfinder();
  spaceshipDiv.style.backgroundImage = `url(src/Imgages/${spaceship}.png)`;
  theme = themefinder();
  document.body.style.backgroundImage = `url(${theme})`;
  if (theme.includes("BackgroundDesert.png")) {
    (document.querySelector(".scoreBoard") as HTMLDivElement).style.color =
      "rgb(143, 90, 66)";
    (document.querySelector(".timer") as HTMLDivElement).style.color =
      "rgb(143, 90, 66)";
  } else {
    (document.querySelector(".scoreBoard") as HTMLDivElement).style.color =
      "wheat";
    (document.querySelector(".timer") as HTMLDivElement).style.color = "wheat";
  }
});
