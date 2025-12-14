function damagerecived(health: number): number {
  health--;
  (document.querySelector(".harts") as HTMLDivElement).style.width = `${
    health * 60
  }px`;

  return health;
}

export default damagerecived;
