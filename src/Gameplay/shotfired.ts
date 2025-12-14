function shotFired() {
  const shots: HTMLDivElement = document.querySelector(
    ".shots"
  ) as HTMLDivElement;
  let shot: HTMLDivElement = document.createElement("div");
  let shotPosX: number =
    parseInt(
      getComputedStyle(document.querySelector(".spaceship") as HTMLDivElement)
        .left
    ) + 110;
  let shotPosY: number = parseInt(
    getComputedStyle(document.querySelector(".spaceship") as HTMLDivElement)
      .bottom
  );
  shots.appendChild(shot);
  shot.classList.add("shot");
  shot.style.left = shotPosX + "px";
  shot.style.bottom = shotPosY + "px";
  shot.style.display = "block";

  let shotTimer: number = setInterval(() => {
    shotPosX += 20;
    shot.style.left = shotPosX + "px";
    if (shotPosX > 2200) {
      shot.remove();
      clearInterval(shotTimer);
    }
  }, 10);
}

export default shotFired;
