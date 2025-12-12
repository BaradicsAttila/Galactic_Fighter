import difficultyfinder from "./difficultyfinder";
import spaceshipfinder from "./spaceshipfinder";
import themefinder from "./themefinder";
function applySettings(
  difficulty: string,
  spaceship: string,
  theme: string
): void {
  const spaceshipDiv: HTMLDivElement = document.querySelector(
    ".spaceship"
  ) as HTMLDivElement;

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
}

export default applySettings;
