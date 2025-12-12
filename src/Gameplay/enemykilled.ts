function enemyKilled(isGameOver: boolean) {
  let score: HTMLSpanElement = document.querySelector(
    ".scoreNumber"
  ) as HTMLSpanElement;
  let enemys: NodeListOf<HTMLDivElement> = document.querySelectorAll(".enemy");
  const enemyArea: HTMLDivElement = document.querySelector(
    ".enemyarea"
  ) as HTMLDivElement;
  const map: HTMLDivElement = document.querySelector(".map") as HTMLDivElement;
  if (map.childElementCount > 1 && enemyArea.childElementCount > 0) {
    let shot: HTMLDivElement = document.querySelector(
      ".shot"
    ) as HTMLDivElement;

    let shotPositionX: number = parseInt(getComputedStyle(shot).left);
    let shotPositionY: number = parseInt(getComputedStyle(shot).bottom);
    enemys.forEach((enemy) => {
      let enemyPosX: number = parseInt(getComputedStyle(enemy).left);
      let enemyPosY: number = parseInt(getComputedStyle(enemy).bottom);
      if (
        enemyPosX < shotPositionX &&
        enemyPosY < shotPositionY + 20 &&
        enemyPosY > shotPositionY - 50
      ) {
        enemyArea.removeChild(enemy);
        shot.remove();
        let scorenum: number = Number(score.innerHTML) + 1;
        score.innerHTML = scorenum.toString();
      }
    });
  }
  if (isGameOver) {
    while (enemyArea.firstChild) {
      enemyArea.removeChild(enemyArea.lastChild!);
    }
  }

  if (!isGameOver) {
    setTimeout(enemyKilled, 10);
  }
}

export default enemyKilled;
