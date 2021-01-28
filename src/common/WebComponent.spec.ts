import { createElementFromString } from './WebComponent';

test('Check empty string argument', () => {
  expect(() => createElementFromString(''))
    .toThrow();
});

test('Check incorrect string argument', () => {
  expect(() => createElementFromString('erherherhre'))
    .toThrow();
});

test('Check correct string argument', () => {
  const testEl = document.createElement('p');
  testEl.innerHTML = 'My Paragraph';
  expect(createElementFromString('<p>My Paragraph</p>'))
    .toStrictEqual(testEl);
});
