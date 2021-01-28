import './logo.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';
import * as Logo from '../../assets/logo.svg';

class LogoComponent implements WebComponent {
  private componentElement: Element = document.createElement('null');

  render(): Element {
    if (this.componentElement.outerHTML === '<null></null>') {
      this.componentElement = createElementFromString(`
        <header class="logo">
          <a href="#">
            <img src="${Logo}" alt="logo" />
          </a>
        </header>
      `);
    }
    return this.componentElement;
  }

  setup(): void {
    return;
  }

  public deleteLink(): void {
    this.componentElement.querySelector('a')!.removeAttribute('href');
  }
}

export default LogoComponent;
