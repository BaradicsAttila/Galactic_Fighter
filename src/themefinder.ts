function themefinder(): string {
  const selectedBg: HTMLImageElement = document.querySelector(
    ".selectedBg img"
  ) as HTMLImageElement;

  return selectedBg.src;
}

export default themefinder;
