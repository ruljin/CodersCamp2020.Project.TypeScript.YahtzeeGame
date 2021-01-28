import './sample.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class SampleComponent implements WebComponent {
  render(): Element {
    return createElementFromString('<p class="my-p" id="myP">sample text</p>');
  }

  setup(): void {
    document.querySelector('#myP')!.addEventListener('click', this.toggleColor);
  }

  private toggleColor(evt: Event): void {
    (evt.currentTarget as HTMLElement).classList.toggle('my-p');
  }
}

export default SampleComponent;
