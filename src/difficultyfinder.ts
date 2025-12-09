function difficultyfinder(): string {
  const selectedDiff: HTMLLabelElement = document.querySelector(
    ".selectedDiff"
  ) as HTMLLabelElement;
  return selectedDiff.classList[0];
}

export default difficultyfinder;