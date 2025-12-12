function spaceshipfinder(): string {
  const selectedSpaceship: HTMLDivElement = document.querySelector(
    ".selectedSpaceship"
  ) as HTMLDivElement;
  return selectedSpaceship.classList[1];
}

export default spaceshipfinder;
