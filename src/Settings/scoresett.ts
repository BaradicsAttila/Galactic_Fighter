function scoresett() {
  let bScore: string | null = localStorage.getItem("BestScore");
  let gameScores: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll(".scoreNumber");
  let bestScores: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll(".bestScoreNumber");
  if (bScore != null) {
    bestScores.forEach((bestScore) => {
      bestScore.innerHTML = bScore;
    });
  }
  if (Number(gameScores[0].innerHTML) > Number(bestScores[0].innerHTML)) {
    localStorage.setItem("BestScore", gameScores[0].innerHTML);
    bestScores[0].innerHTML = gameScores[0].innerHTML;
    bestScores[1].innerHTML = gameScores[1].innerHTML;
  }
}

export default scoresett;
