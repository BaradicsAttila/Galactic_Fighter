function enemySpawn(IsGameOver: { isGameOver: boolean }) {
  if (IsGameOver.isGameOver == true) {
    return;
  }
  const enemyArea: HTMLDivElement = document.querySelector(
    ".enemyarea"
  ) as HTMLDivElement;
  let enemy: HTMLDivElement = document.createElement("div");
  let timeBetweenSpawns: number = Math.round(Math.random() * 2000 + 500);
  let randompos: number = Math.round(
    Math.random() * parseInt(getComputedStyle(enemyArea).height) * 0.75 + 50
  );
  let randomStop: number = Math.round(Math.random() * 300 + 1450);
  enemyArea.appendChild(enemy);
  enemy.classList.add("enemy");
  enemy.style.bottom = randompos + "px";
  enemy.style.display = "block";
  let enemytimer: number = setInterval(() => {
    if (parseInt(getComputedStyle(enemy).left) > randomStop) {
      let enemyLeft: number = parseInt(getComputedStyle(enemy).left);
      enemyLeft -= 20;
      enemy.style.left = enemyLeft + "px";
    } else clearInterval(enemytimer);
  }, 20);

  if (IsGameOver.isGameOver == false) {
    setTimeout(() => {
      enemySpawn(IsGameOver);
    }, timeBetweenSpawns);
  }
}

export default enemySpawn;
