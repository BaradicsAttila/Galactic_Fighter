function reset() {
  let bScore: string | null = localStorage.getItem("BestScore");
  let gameScore: HTMLSpanElement = document.querySelector(
    ".scoreNumber"
  ) as HTMLSpanElement;
  let bestScore: HTMLSpanElement = document.querySelector(
    ".bestScoreNumber"
  ) as HTMLSpanElement;
  if (bScore != null) {
    bestScore.innerHTML = bScore;
  }
  console.log(gameScore.innerHTML);
  console.log(bestScore.innerHTML);
  if (Number(gameScore.innerHTML) > Number(bestScore.innerHTML)) {
    localStorage.setItem("BestScore", gameScore.innerHTML);
    bestScore.innerHTML = gameScore.innerHTML;
  }

  (document.querySelector(".menu") as HTMLDivElement).style.display = "block";
  (document.querySelector(".menuponts") as HTMLDivElement).style.display =
    "flex";
  (document.querySelector(".instrlist") as HTMLDivElement).style.display =
    "none";
  (document.querySelector(".gametitle") as HTMLDivElement).style.display =
    "block";
  (
    document.querySelector(".menuSettingsList") as HTMLDivElement
  ).style.display = "none";
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
  (document.querySelector(".scoreNumber") as HTMLSpanElement).innerHTML = "0";
}

export default reset;
