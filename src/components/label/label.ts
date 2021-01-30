import './label.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class LabelComponent implements WebComponent {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  render(): Element {
    return createElementFromString(`<div class="label">${this.text}</div>`);
  }

  setup(): void {
    return;
  }

  settingsStyleLabel(): string {
    this.text = `<p class="label__settings-style-label">${this.text}</p>`;
    return this.text;
  }
}

export default LabelComponent;
