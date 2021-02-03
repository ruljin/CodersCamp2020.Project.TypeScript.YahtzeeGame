import './label.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class LabelComponent implements WebComponent {
  private label: HTMLElement = document.createElement('null');

  constructor(private text: string, private width: number,
    private original: boolean) { }

  render(): Element {
    this.label = createElementFromString(`${this.original ?
      `<div class="label">${this.text}</div>` :
      `<input type="text" class="label label--alternative" placeholder="${this.text}">`}`) as HTMLElement;
    this.label.style.width = `${this.width}rem`;
    return this.label as Element;
  }

  setup(): void {
    return;
  }
}

export default LabelComponent;
