import MenuComponent from './menu';
import { createElementFromString } from '../../common/WebComponent';

test('Check rendering navigation', () => {
  const navigation = createElementFromString(`<footer class="button-container">
      <a href="#/scores" class="button">Scores</a>
      <a href="#/rules" class="button">Rules</a>
      <a href="#/settings" class="button">Game</a>
      <a href="#/authors" class="button">Authors</a>
    </footer>`);

  const menuComponent = new MenuComponent();
  expect(menuComponent.render()).toStrictEqual(navigation);
});
