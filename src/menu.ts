function menu(): void {
  const menuDiv: HTMLDivElement = document.querySelector(
    ".menu"
  ) as HTMLDivElement;
  menuDiv.style.display = "none";
}

export default menu;
