import './logo.scss';
import WebComponent, { createElementFromString } from '../../../common/WebComponent';
import Router from '../../../common/Router';

class LogoComponent implements WebComponent {
  private componentElement: Element = document.createElement('div');

  render(): Element {
    this.componentElement = createElementFromString(`<header class="logo">
        <a href="#/index.html">
          <img src="../../../assets/logo.svg" alt="logo" />
        </a>
      </header>`);
    return this.componentElement;
  }

  setup(): void {
    Router.addRefreshListener(document.querySelector('a')!, 'click');
  }

  public deleteLink(): void {
    document.querySelector('a')!.removeAttribute('href');
  }
}

export default LogoComponent;