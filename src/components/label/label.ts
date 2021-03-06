import './label.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class LabelComponent implements WebComponent {
  private label: HTMLElement = document.createElement('null');

  constructor(private text: string, private width: number,
    private original: boolean = true) { }

  render(): Element {
    this.label = createElementFromString(`${this.original ?
      `<div class="label">${this.text}</div>` :
      `<input type="text" class="label label--alternative" placeholder="${this.text}" 
      required maxlength="9" pattern="[A-Za-z0-9]+">`}`) as HTMLElement;
    this.label.style.width = `${this.width}vw`;

    return this.label as Element;
  }

  setup(): void {
    return;
  }
}

export default LabelComponent;
