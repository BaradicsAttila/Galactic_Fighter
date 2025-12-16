let enemytimeout: number | undefined;
let isSpawning = false;
function enemySpawn(IsGameOver: { isGameOver: boolean }) {
  if (IsGameOver.isGameOver == true) {
    if (enemytimeout !== undefined) {
      clearTimeout(enemytimeout);
      enemytimeout = undefined;
    }
    isSpawning = false;
    return;
  }

  if (isSpawning == true) {
    return;
  }

  isSpawning = true;

  const enemyArea: HTMLDivElement = document.querySelector(
    ".enemyarea"
  ) as HTMLDivElement;
  let enemy: HTMLDivElement = document.createElement("div");
  let timeBetweenSpawns: number = Math.round(Math.random() * 4000 + 1000);
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

  enemytimeout = setTimeout(() => {
    isSpawning = false;
    enemySpawn(IsGameOver);
  }, timeBetweenSpawns / Number((document.querySelector(".selectedDiff") as HTMLInputElement).classList[1]));
}

export default enemySpawn;
