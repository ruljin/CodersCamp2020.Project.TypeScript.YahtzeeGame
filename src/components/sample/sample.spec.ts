import { SampleComponent } from './sample';

test('Test rendering', () => {
  expect((new SampleComponent()).render()).toBe('<p class="my-p" id="myP">sample text</p>');
});
