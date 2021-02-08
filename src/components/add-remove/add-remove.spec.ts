import AddRemoveElement from './add-remove';
import { createElementFromString } from '../../common/WebComponent';

test('Check rendering authors text', () => {
  const addremove = createElementFromString(`
    <div class="switch-wrapper">
      <button class="switch switch--add">+</button>
      <button class="switch switch--remove">-</button>
    </div>`);

  const addRemoveElement = new AddRemoveElement('+', '-');

  expect(addRemoveElement.render()).toStrictEqual(addremove);
});