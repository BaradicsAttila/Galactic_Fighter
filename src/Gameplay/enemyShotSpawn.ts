function enemyShotSpawn(IsGameOver: { isGameOver: boolean }) {
  let enemyshotsarea: HTMLDivElement = document.querySelector(
    ".enemyshotsarea"
  ) as HTMLDivElement;
  let enemys: NodeListOf<HTMLDivElement> = document.querySelectorAll(".enemy");
  let enemyShot: HTMLDivElement = document.createElement("div");
  let whichEnemyShoot: number = Math.floor(Math.random() * enemys.length);
  let whatDirectionShoot: number = Math.floor(Math.random() * 100 - 50);
  if (IsGameOver.isGameOver == true) {
    while (enemyshotsarea.firstChild) {
      enemyshotsarea.removeChild(enemyshotsarea.lastChild!);
    }
    return;
  }

  for (let index = 0; index < enemys.length; index++) {
    const enemy = enemys[index];
    if (index == whichEnemyShoot) {
      let eShotPosX: number = parseInt(getComputedStyle(enemy).left);
      let eShotPosY: number = parseInt(getComputedStyle(enemy).bottom);
      enemyshotsarea.appendChild(enemyShot);
      enemyShot.classList.add("enemyShot");
      enemyShot.style.left = eShotPosX + "px";
      enemyShot.style.bottom = eShotPosY + "px";
      enemyShot.style.display = "block";
      let eShotTimer: number = setInterval(() => {
        eShotPosX -= 5;
        eShotPosY += whatDirectionShoot / 20;
        enemyShot.style.left = eShotPosX + "px";
        enemyShot.style.bottom = eShotPosY + "px";
        if (eShotPosX < -100 || eShotPosY < -100 || eShotPosY > 1500) {
          enemyShot.remove();
          clearInterval(eShotTimer);
        }
      }, 20);
    }
  }

  if (IsGameOver.isGameOver == false) {
    setTimeout(() => {
      enemyShotSpawn(IsGameOver);
    }, 400);
  }
}

export default enemyShotSpawn;
