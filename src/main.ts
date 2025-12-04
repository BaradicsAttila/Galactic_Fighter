import "./style.css";
import settings from "./settings";
import difficultyfinder from "./difficultyfinder";
import spaceshipfinder from "./spaceshipfinder";
import themefinder from "./themefinder";

// desert color: rgb(143, 90, 66)
let difficulty: string = "normal";
let spaceship: string = "spaceshipRed";
let theme: string = "src/Imgages/BackgroundSpace.png";
const spaceshipDiv: HTMLDivElement = document.querySelector(
  ".spaceship"
) as HTMLDivElement;

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
  console.log(theme);
  if (theme.includes("BackgroundDesert.png")) {
    (document.querySelector(".scoreBoard") as HTMLDivElement).style.color =
      "rgb(143, 90, 66)";
    (document.querySelector(".timer") as HTMLDivElement).style.color =
      "rgb(143, 90, 66)";
  } else {
    (document.querySelector(".scoreBoard") as HTMLDivElement).style.color =
      "wheat";
    (document.querySelector(".timer") as HTMLDivElement).style.color =
      "wheat";
  }
});
