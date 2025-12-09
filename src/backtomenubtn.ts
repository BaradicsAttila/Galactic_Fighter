function backtomenubtn() {
  (document.querySelector(".menuponts") as HTMLDivElement).style.display =
    "flex";
  (document.querySelector(".instrlist") as HTMLDivElement).style.display =
    "none";
  (document.querySelector(".gametitle") as HTMLDivElement).style.display =
    "block";
  (
    document.querySelector(".menuSettingsList") as HTMLDivElement
  ).style.display = "none";
}

export default backtomenubtn;