import { render } from './sample';

test('Test rendering', () => {
  expect(render()).toBe('<p class="my-p">sample text</p>');
});
