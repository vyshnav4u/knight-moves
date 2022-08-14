import { Board } from './Helpers/Board';

class App {
  static init() {
    const app = document.getElementById('app') as HTMLElement;
    const chessBoard = new Board(app);
  }
}

App.init();
