function enemyKilled(IsGameOver: { isGameOver: boolean }) {
  let score: HTMLSpanElement = document.querySelector(
    ".scoreNumber"
  ) as HTMLSpanElement;
  let enemys: NodeListOf<HTMLDivElement> = document.querySelectorAll(".enemy");
  const enemyArea: HTMLDivElement = document.querySelector(
    ".enemyarea"
  ) as HTMLDivElement;
  const shots: HTMLDivElement = document.querySelector(
    ".shots"
  ) as HTMLDivElement;
  if (shots.childElementCount > 0 && enemyArea.childElementCount > 0) {
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
        enemyPosX > shotPositionX - 50 &&
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
  if (IsGameOver.isGameOver == true) {
    while (enemyArea.firstChild) {
      enemyArea.removeChild(enemyArea.lastChild!);
    }
  }

  if (IsGameOver.isGameOver == false) {
    setTimeout(() => {
      enemyKilled(IsGameOver);
    }, 10);
  }
}

export default enemyKilled;
