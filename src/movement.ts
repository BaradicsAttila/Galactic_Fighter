function movement(
  event: KeyboardEvent,
  shipPositionx: number,
  shipPositiony: number
): void {
  if (event.key == "w" && event.repeat == false) {
    let wTimer: number = setInterval(() => {
      shipPositiony = parseInt(
        getComputedStyle(document.querySelector(".spaceship") as HTMLDivElement)
          .bottom
      );
      shipPositiony += 5;
      if (shipPositiony >= 700) {
        shipPositiony -= 5;
      }
      (document.querySelector(".spaceship") as HTMLDivElement).style.bottom =
        shipPositiony + "px";
    }, 10);
    document.addEventListener("keyup", (event: KeyboardEvent) => {
      if (event.key == "w") {
        clearInterval(wTimer);
      }
    });
  }
  if (event.key == "a" && event.repeat == false) {
    let aTimer: number = setInterval(() => {
      shipPositionx = parseInt(
        getComputedStyle(document.querySelector(".spaceship") as HTMLDivElement)
          .left
      );
      shipPositionx -= 5;
      if (shipPositionx <= 0) {
        shipPositionx += 5;
      }
      (document.querySelector(".spaceship") as HTMLDivElement).style.left =
        shipPositionx + "px";
    }, 10);
    document.addEventListener("keyup", (event: KeyboardEvent) => {
      if (event.key == "a") {
        clearInterval(aTimer);
      }
    });
  }
  if (event.key == "s" && event.repeat == false) {
    let sTimer: number = setInterval(() => {
      shipPositiony = parseInt(
        getComputedStyle(document.querySelector(".spaceship") as HTMLDivElement)
          .bottom
      );
      shipPositiony -= 5;
      if (shipPositiony <= 0) {
        shipPositiony += 5;
      }

      (document.querySelector(".spaceship") as HTMLDivElement).style.bottom =
        shipPositiony + "px";
    }, 10);
    document.addEventListener("keyup", (event: KeyboardEvent) => {
      if (event.key == "s") {
        clearInterval(sTimer);
      }
    });
  }
  if (event.key == "d" && event.repeat == false) {
    let dTimer: number = setInterval(() => {
      shipPositionx = parseInt(
        getComputedStyle(document.querySelector(".spaceship") as HTMLDivElement)
          .left
      );
      shipPositionx += 5;
      if (shipPositionx >= 1500) {
        shipPositionx -= 5;
      }

      (document.querySelector(".spaceship") as HTMLDivElement).style.left =
        shipPositionx + "px";
    }, 10);
    document.addEventListener("keyup", (event: KeyboardEvent) => {
      if (event.key == "d") {
        clearInterval(dTimer);
      }
    });
  }
}

export default movement;
