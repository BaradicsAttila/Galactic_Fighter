function startGame(): void {
  (document.querySelector(".menu") as HTMLDivElement).style.display = "none";
  (document.querySelector(".settingsList") as HTMLDivElement).style.display =
    "none";
  (
    document.querySelector(".backroundChooser") as HTMLDivElement
  ).style.display = "none";
  (document.querySelector(".diffselecterdiv") as HTMLDivElement).style.display =
    "none";
  (
    document.querySelector(".spaceshipchooser") as HTMLDivElement
  ).style.display = "none";
}

export default startGame;
