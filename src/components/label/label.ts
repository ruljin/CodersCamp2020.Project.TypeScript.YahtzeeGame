import './label.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class LabelComponent implements WebComponent {
  private isAlternated = false;

  constructor(private text: string) {}

  render(): Element {
    return createElementFromString(`<div class="label ${this.isAlternated ? 'label--alternative' : ''}">${this.text}</div>`);
  }

  setup(): void {
    return;
  }

  alternateAppearance(): void {
    this.isAlternated = !this.isAlternated;
  }
}

export default LabelComponent;
