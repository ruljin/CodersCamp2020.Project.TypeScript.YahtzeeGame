import SelectorComponent from './selector';
import { createElementFromString } from '../../common/WebComponent';

test('Test selector rendering', () => {
  const arr = ['one', 'two'];
  const renderSelector = new SelectorComponent(arr, 3);

  expect(renderSelector.render()).toStrictEqual(createElementFromString(`
  <select class="select" style="width: 3rem;">
    <option value="one">one</option>
    <option value="two">two</option>
  </select>`));
});
