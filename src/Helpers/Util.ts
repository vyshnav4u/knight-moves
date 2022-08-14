export class Util {
  static removeElement(element: HTMLElement) {
    const parentElement = element.parentElement;
    parentElement?.removeChild(element);
  }
}

export interface Position {
  row: number;
  col: number;
}
