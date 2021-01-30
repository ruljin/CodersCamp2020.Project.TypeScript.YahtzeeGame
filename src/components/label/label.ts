import './label.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class LabelComponent implements WebComponent {

  constructor(private text: string) {}

  render(): Element {
    return createElementFromString(`<div class="label">${this.text}</div>`);
  }

  setup(): void {
    return;
  }

  settingsStyleLabel(): string {
    this.text = `<p class="label--alternative">${this.text}</p>`;
    return this.text;
  }
}

export default LabelComponent;
