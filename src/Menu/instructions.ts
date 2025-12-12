function instructions(): void {
  (document.querySelector(".menuponts") as HTMLDivElement).style.display =
    "none";
  (document.querySelector(".instrlist") as HTMLDivElement).style.display =
    "block";
  (document.querySelector(".gametitle") as HTMLDivElement).style.display =
    "none";
}
export default instructions;
