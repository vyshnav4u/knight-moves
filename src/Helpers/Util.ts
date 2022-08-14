export class Util {
  static removeElement(element: HTMLElement) {
    const parentElement = element.parentElement;
    console.log('parentElement', parentElement);
    parentElement?.removeChild(element);
  }
}

export interface Position {
  row: number;
  col: number;
}
