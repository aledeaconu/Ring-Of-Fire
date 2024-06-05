export class Game {
  public players: string[] = [];
  public stack: string[] = [];
  public playedCard: string[] = [];
  public currentPlayer: number = 0;
  public avatar: number[] = [];
  public pickCardAnimation = false;
  public currentCard: string = '';
  public gameOver: boolean = false;

  public nameEdited: string = ''

  constructor() {
    for (let i = 1; i < 13; i++) {
      this.stack.push('ace_' + i);
      this.stack.push('clubs_' + i);
      this.stack.push('hearts_' + i);
      this.stack.push('diamonds_' + i);
    }

    shuffle(this.stack);
  }

  public toJson() {
    return {
      players: this.players,
      stack: this.stack,
      playedCard: this.playedCard,
      currentPlayer: this.currentPlayer,
      avatar: this.avatar,
      pickCardAnimation: this.pickCardAnimation,
      currentCard: this.currentCard,
      gameOver: this.gameOver,

      nameEdited: this.nameEdited
    };
  }
}

//luata de pe net
function shuffle(array: string[]) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
