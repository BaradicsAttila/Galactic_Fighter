function settings(difficulty: string, spaceship: string, theme: string): void {
  const settingsDiv: HTMLDivElement = document.querySelector(
    ".settings"
  ) as HTMLDivElement;
  const settingsList: HTMLDivElement = document.querySelector(
    ".settingsList"
  ) as HTMLDivElement;
  const difficultySelect: HTMLDivElement = document.querySelector(
    ".diff"
  ) as HTMLDivElement;
  const easy: HTMLSpanElement = document.querySelector(
    ".easy"
  ) as HTMLSpanElement;
  const normal: HTMLSpanElement = document.querySelector(
    ".normal"
  ) as HTMLSpanElement;
  const hard: HTMLSpanElement = document.querySelector(
    ".hard"
  ) as HTMLSpanElement;
  const changeSpaceship: HTMLParagraphElement = document.querySelector(
    ".changeSpaceship"
  ) as HTMLParagraphElement;
  const changeTheme: HTMLParagraphElement = document.querySelector(
    ".changeTheme"
  ) as HTMLParagraphElement;
}

export default settings;
