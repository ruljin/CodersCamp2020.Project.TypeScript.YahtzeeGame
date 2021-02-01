import './label.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class LabelComponent implements WebComponent {
  private label: HTMLElement = document.createElement('null');

  constructor(private text: string, private width: number) {}

  render(): Element {
    this.label = createElementFromString(`<div class="label">${this.text}</div>`) as HTMLElement;
    this.label.style.width = `${this.width}rem`;
    return this.label as Element;
  }

  setup(): void {
    return;
  }
}

export default LabelComponent;
