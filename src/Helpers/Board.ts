import { Knight } from './Knight';
import { Util, Position } from './Util';

export class Board {
  public appConatiner: HTMLElement;
  public chessBoard: HTMLElement;

  constructor(container: HTMLElement) {
    this.appConatiner = container;
    this.generateBoard();
  }

  generateBoard(
    slectedCell: Position | null = null,
    nextMoves: Position[] = []
  ) {
    this.chessBoard = document.createElement('div');
    this.chessBoard.className = 'chess-board';

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const singleCell = document.createElement('div');
        let isBlackCell = j % 2 === 0;
        if (i % 2 === 0) isBlackCell = !isBlackCell;
        const className = isBlackCell ? 'black' : 'white';
        singleCell.className = 'chess-cell ' + className;
        const currentPosition: Position = { row: i, col: j };

        if (slectedCell) {
          if (slectedCell.row === i && slectedCell.col === j)
            singleCell.classList.add('selected');
        }

        if (nextMoves.length > 0) {
          nextMoves.forEach((move) => {
            if (move.row === i && move.col === j)
              singleCell.classList.add('next-move');
          });
        }

        singleCell.addEventListener('click', (e) =>
          this.onBoardCellClick(e, currentPosition)
        );

        this.chessBoard.appendChild(singleCell);
      }
    }
    this.appConatiner.appendChild(this.chessBoard);
  }

  onBoardCellClick(e: Event, currentPosition: Position) {
    const knight = new Knight(currentPosition);
    const possibleNextMoves = knight.getNextMoves();
    Util.removeElement(this.chessBoard);
    this.generateBoard(currentPosition, possibleNextMoves);
    knight.playSound();
  }
}
