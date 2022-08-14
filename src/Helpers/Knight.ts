import { Position } from './Util';

export class Knight {
  public knightPosition: Position;
  public knightPossibleMoves: Position[] = [
    {
      row: -1,
      col: 2,
    },
    {
      row: -2,
      col: 1,
    },
    {
      row: -2,
      col: -1,
    },
    {
      row: -1,
      col: -2,
    },
    {
      row: 1,
      col: 2,
    },
    {
      row: 2,
      col: 1,
    },
    {
      row: 2,
      col: -1,
    },
    {
      row: 1,
      col: -2,
    },
  ];

  public knightSound = document.getElementById('war-horse') as HTMLAudioElement;
  constructor(currentPosition) {
    this.knightPosition = currentPosition;
  }
  getNextMoves(): Position[] {
    const knightNextMoves: Position[] = [];
    this.knightPossibleMoves.forEach((move) => {
      if (
        this.knightPosition.row + move.row >= 0 &&
        this.knightPosition.col + move.col >= 0 &&
        this.knightPosition.row + move.row < 8 &&
        this.knightPosition.col + move.col < 8
      ) {
        knightNextMoves.push({
          row: this.knightPosition.row + move.row,
          col: this.knightPosition.col + move.col,
        });
      }
    });
    return knightNextMoves;
  }

  playSound() {
    this.knightSound.volume = 0.5;
    this.knightSound.play();
  }
}
