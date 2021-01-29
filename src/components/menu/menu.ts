import './menu.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';
import Router from '../../common/Router';

class MenuComponent implements WebComponent {
  render(): Element {
    return createElementFromString(`<footer class="button-container">
      <a href="#/scores" class="button">Scores</a>
      <a href="#/rules" class="button">Rules</a>
      <a href="#/settings" class="button">Game</a>
      <a href="#/authors" class="button">Authors</a>
    </footer>`);
  }

  setup(): void {
    const router = new Router(document.querySelector('#root')!);
    if (router.checkPath('scores')) {
      (document.querySelectorAll('.button')[0]! as HTMLElement).classList.add('button--hover');
    } else if (router.checkPath('rules')) {
      (document.querySelectorAll('.button')[1]! as HTMLElement).classList.add('button--hover');
    } else if (router.checkPath('settings')) {
      (document.querySelectorAll('.button')[2]! as HTMLElement).classList.add('button--hover');
    } else if (router.checkPath('authors')) {
      (document.querySelectorAll('.button')[3]! as HTMLElement).classList.add('button--hover');
    }
  }
}

export default MenuComponent;
