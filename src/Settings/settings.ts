function settings(): void {
  const settingsDiv: HTMLDivElement = document.querySelector(
    ".settings"
  ) as HTMLDivElement;
  const settingsList: HTMLDivElement = document.querySelector(
    ".settingsList"
  ) as HTMLDivElement;
  const difficultySelect: HTMLDivElement = document.querySelector(
    ".diff"
  ) as HTMLDivElement;
  const diffselecterdiv: HTMLDivElement = document.querySelector(
    ".diffselecterdiv"
  ) as HTMLDivElement;
  const selecterlabel: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    ".diffselecterdiv label"
  );
  const changeSpaceship: HTMLParagraphElement = document.querySelector(
    ".changeSpaceship"
  ) as HTMLParagraphElement;
  const spaceshipChooser: HTMLDivElement = document.querySelector(
    ".spaceshipchooser"
  ) as HTMLDivElement;
  const selecterspaceship: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".spaceships");
  const changeTheme: HTMLParagraphElement = document.querySelector(
    ".changeTheme"
  ) as HTMLParagraphElement;
  const selecterTheme: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    ".backroundChooser div"
  );

  const themeChooser: HTMLDivElement = document.querySelector(
    ".backroundChooser"
  ) as HTMLDivElement;
  settingsDiv.addEventListener("click", () => {
    if (settingsList.style.display == "block") {
      settingsList.style.display = "none";
    } else {
      settingsList.style.display = "block";
    }
    spaceshipChooser.style.display = "none";
    themeChooser.style.display = "none";
    diffselecterdiv.style.display = "none";
  });

  difficultySelect.addEventListener("click", () => {
    if (diffselecterdiv.style.display == "block") {
      diffselecterdiv.style.display = "none";
    } else {
      diffselecterdiv.style.display = "block";
    }
  });

  selecterlabel.forEach((item) => {
    item.addEventListener("click", () => {
      selecterlabel.forEach((element) => {
        element.classList.remove("selectedDiff");
      });
      item.classList.add("selectedDiff");
    });
  });

  changeSpaceship.addEventListener("click", () => {
    if (spaceshipChooser.style.display == "block") {
      spaceshipChooser.style.display = "none";
    } else {
      spaceshipChooser.style.display = "block";
    }
  });

  selecterspaceship.forEach((item) => {
    item.addEventListener("click", () => {
      selecterspaceship.forEach((element) => {
        element.classList.remove("selectedSpaceship");
      });
      item.classList.add("selectedSpaceship");
    });
  });

  changeTheme.addEventListener("click", () => {
    if (themeChooser.style.display == "block") {
      themeChooser.style.display = "none";
    } else {
      themeChooser.style.display = "block";
    }
  });
  selecterTheme.forEach((item) => {
    item.addEventListener("click", () => {
      selecterTheme.forEach((element) => {
        element.classList.remove("selectedBg");
      });
      item.classList.add("selectedBg");
    });
  });
}

export default settings;
