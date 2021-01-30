import './reference.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';
import Router from '../../common/Router';

class ReferenceComponent implements WebComponent {
  constructor(private link: string, private name: string) {}

  render(): Element {
    const router = new Router(document.querySelector('#root')!);
    return createElementFromString(`<a href="#/${this.link}" 
      class="button ${router.checkPath(`${this.link}`) ? 'button--disabled' : ''}">${this.name}</a>`);
  }

  setup(): void {
    return;
  }
}

export default ReferenceComponent;
