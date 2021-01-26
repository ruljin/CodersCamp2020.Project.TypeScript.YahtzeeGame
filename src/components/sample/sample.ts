import './sample.scss';
import { WebComponent } from '../../common/WebComponent';

class SampleComponent implements WebComponent {
  render(): string {
    return '<p class="my-p" id="myP">sample text</p>';
  }
  setup(): void {
    document.querySelector('#myP')!.addEventListener('click', this.toggleColor);
  }
  private toggleColor(evt: Event): void {
    (evt.currentTarget as Element).classList.toggle('my-p');
  }
}

export { SampleComponent };
