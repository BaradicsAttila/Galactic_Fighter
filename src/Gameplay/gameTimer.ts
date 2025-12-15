function gameTimer(IsGameOver: { isGameOver: boolean }) {
  (document.querySelector(".gameTime") as HTMLSpanElement).innerHTML = "00:00";

  let minutes: number = 0;
  let seconds: number = 0;

  let timertimer: number = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    (document.querySelector(".gameTime") as HTMLSpanElement).innerHTML =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
    if (IsGameOver.isGameOver == true) {
      clearInterval(timertimer);
    }
  }, 1000);
}

export default gameTimer;
