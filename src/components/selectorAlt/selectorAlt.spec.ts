import SelectorComponent from './selectorAlt';
import { createElementFromString } from '../../common/WebComponent';

test('Test selector rendering', () => {
  const arr = ['one'];
  const renderSelector = new SelectorComponent(arr, 3);

  expect(renderSelector.render()).toStrictEqual(createElementFromString(`
  <select class="select" style="width: 3rem;">
  </select>`));
});

test('Test adding list positions', () => {
  const arr = ['one'];
  const renderSelector = new SelectorComponent(arr, 3);

  expect(renderSelector).toBeInstanceOf(SelectorComponent);
});