import './logo.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class LogoComponent implements WebComponent {
  private componentElement: Element = document.createElement('null');

  render(): Element {
    if (this.componentElement.outerHTML === '<null></null>') {
      this.componentElement = createElementFromString(`
        <header class="logo">
          <a href="#/index.html">
            <img src="../../assets/logo.svg" alt="logo" />
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
