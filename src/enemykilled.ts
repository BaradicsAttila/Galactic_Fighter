function enemyKilled() {
  const map: HTMLDivElement = document.querySelector(".map") as HTMLDivElement;
  console.log(map.childElementCount);
  if (map.childElementCount > 1) {
    const shot: HTMLDivElement = document.querySelector(
      ".shot"
    ) as HTMLDivElement;
    const enemy: HTMLDivElement = document.querySelector(
      "enemy"
    ) as HTMLDivElement;

    let shotPositionX: number = parseInt(getComputedStyle(shot).left);
    let shotPositionY: number = parseInt(getComputedStyle(shot).bottom);
    let enemyPosX: number = parseInt(getComputedStyle(enemy).left);
    let enemyPosY: number = parseInt(getComputedStyle(enemy).bottom);
    console.log("running");
    if (
      enemyPosX < shotPositionX &&
      enemyPosY < shotPositionY + 180 &&
      enemyPosY > shotPositionY - 180
    ) {
      (document.querySelector(".map") as HTMLDivElement).removeChild(enemy);
    }
  }
  console.log("still");
  setTimeout(enemyKilled, 10);
}

export default enemyKilled;
