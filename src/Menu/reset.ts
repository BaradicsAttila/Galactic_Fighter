import scoresett from "../Settings/scoresett";
function reset() {
  scoresett();
  (document.querySelector(".menu") as HTMLDivElement).style.display = "block";
  (document.querySelector(".menuponts") as HTMLDivElement).style.display =
    "flex";
  (document.querySelector(".instrlist") as HTMLDivElement).style.display =
    "none";
  (document.querySelector(".gametitle") as HTMLDivElement).style.display =
    "block";
  (document.querySelector(".creditslist") as HTMLDivElement).style.display =
    "none";
  (document.querySelector(".settingsList") as HTMLDivElement).style.display =
    "none";

  (
    document.querySelector(".spaceshipchooser") as HTMLDivElement
  ).style.display = "none";
  (
    document.querySelector(".backroundChooser") as HTMLDivElement
  ).style.display = "none";
  (document.querySelector(".diffselecterdiv") as HTMLDivElement).style.display =
    "none";
  (document.querySelector(".harts") as HTMLDivElement).style.width = 180 + "px";
  let gameScores: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll(".scoreNumber");
  gameScores.forEach((score) => {
    score.innerHTML = "0";
  });
  (document.querySelector(".gameOver") as HTMLDivElement).style.display =
    "none";
}

export default reset;
