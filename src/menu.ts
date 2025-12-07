function menu(): void {
  const menuDiv: HTMLDivElement = document.querySelector(
    ".menu"
  ) as HTMLDivElement;
  menuDiv.style.display = "none";
}

function backMenu(): void {
  const menuDiv: HTMLDivElement = document.querySelector(
    ".menu"
  ) as HTMLDivElement;
}

export default menu;
