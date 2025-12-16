function enemyKilled(IsGameOver: { isGameOver: boolean }) {
  let scores: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll(".scoreNumber");
  let enemys: NodeListOf<HTMLDivElement> = document.querySelectorAll(".enemy");
  const enemyArea: HTMLDivElement = document.querySelector(
    ".enemyarea"
  ) as HTMLDivElement;
  const shots: HTMLDivElement = document.querySelector(
    ".shots"
  ) as HTMLDivElement;
  if (shots.childElementCount > 0 && enemyArea.childElementCount > 0) {
    let shots: NodeListOf<HTMLDivElement> = document.querySelectorAll(".shot");

    enemys.forEach((enemy) => {
      shots.forEach((shot) => {
        let shotPositionX: number = parseInt(getComputedStyle(shot).left);
        let shotPositionY: number = parseInt(getComputedStyle(shot).bottom);
        let enemyPosX: number = parseInt(getComputedStyle(enemy).left);
        let enemyPosY: number = parseInt(getComputedStyle(enemy).bottom);
        if (
          enemyPosX < shotPositionX &&
          enemyPosX > shotPositionX - 50 &&
          enemyPosY < shotPositionY + 30 &&
          enemyPosY > shotPositionY - 70
        ) {
          enemyArea.removeChild(enemy);
          shot.remove();
          let scorenum: number = Number(scores[0].innerHTML) + 1;
          scores.forEach((score) => {
            score.innerHTML = scorenum.toString();
          });
        }
      });
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
