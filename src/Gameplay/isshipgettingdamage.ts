import damagerecived from "./damagerecived";
import reset from "../Menu/reset";

function isshipgettingdamage(IsGameOver: { isGameOver: boolean }) {
  let spaceship: HTMLDivElement = document.querySelector(
    ".spaceship"
  ) as HTMLDivElement;
  let shipPosX: number = parseInt(getComputedStyle(spaceship).left);
  let shipPosY: number = parseInt(getComputedStyle(spaceship).bottom);
  let enemyshots: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".enemyShot");

  enemyshots.forEach((enemyShot) => {
    let eShotPosX: number = parseInt(getComputedStyle(enemyShot).left);
    let eShotPosY: number = parseInt(getComputedStyle(enemyShot).bottom);
    if (
      shipPosX > eShotPosX &&
      shipPosX < eShotPosX + 100 &&
      shipPosY < eShotPosY + 50 &&
      shipPosY > eShotPosY - 50
    ) {
      let health: number =
        parseInt(
          getComputedStyle(document.querySelector(".harts") as HTMLDivElement)
            .width
        ) / 60;
      enemyShot.remove();
      health = damagerecived(health);
      if (health == 0) {
        console.log("deth");
        reset();
      }
    }
  });
  if (!IsGameOver.isGameOver) {
    setTimeout(() => {
      isshipgettingdamage(IsGameOver);
    }, 10);
  }
}

export default isshipgettingdamage;
