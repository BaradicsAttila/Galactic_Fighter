function menusettings(): void {
  (document.querySelector(".menuponts") as HTMLDivElement).style.display =
    "none";
  (
    document.querySelector(".menuSettingsList") as HTMLDivElement
  ).style.display = "block";
  (document.querySelector(".gametitle") as HTMLDivElement).style.display =
    "none";
}

export default menusettings;
