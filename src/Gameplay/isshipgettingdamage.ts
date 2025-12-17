import damagerecived from "./damagerecived";

function isshipgettingdamage(IsGameOver: { isGameOver: boolean }) {
  let spaceship: HTMLDivElement = document.querySelector(
    ".spaceship"
  ) as HTMLDivElement;
  let shipPosLeft: number = parseInt(getComputedStyle(spaceship).left);
  let shipPosBottom: number = parseInt(getComputedStyle(spaceship).bottom);
  let enemyshots: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".enemyShot");

  enemyshots.forEach((enemyShot) => {
    let eShotPosLeft: number = parseInt(getComputedStyle(enemyShot).left);
    let eShotPosBottom: number = parseInt(getComputedStyle(enemyShot).bottom);
    if (
      shipPosLeft < eShotPosLeft + 50 &&
      shipPosLeft > eShotPosLeft - 90 &&
      shipPosBottom < eShotPosBottom + 10 &&
      shipPosBottom > eShotPosBottom - 60
    ) {
      let health: number =
        parseInt(
          getComputedStyle(document.querySelector(".harts") as HTMLDivElement)
            .width
        ) / 60;
      enemyShot.remove();
      health = damagerecived(health);
      spaceship.classList.add("damage");
      setTimeout(() => spaceship.classList.remove("damage"), 300);
      if (health == 0) {
        IsGameOver.isGameOver = true;
        (document.querySelector(".gameOver") as HTMLDivElement).style.display =
          "block";
        (document.querySelector(".menu") as HTMLDivElement).style.display =
          "block";
        (document.querySelector(".menuponts") as HTMLDivElement).style.display =
          "none";
        (document.querySelector(".endTime") as HTMLDivElement).innerHTML = (
          document.querySelector(".gameTime") as HTMLDivElement
        ).innerHTML;
      }
    }
  });
  if (IsGameOver.isGameOver == false) {
    setTimeout(() => {
      isshipgettingdamage(IsGameOver);
    }, 10);
  }
}

export default isshipgettingdamage;
