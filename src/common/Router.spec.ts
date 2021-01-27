import Router from './Router';
import { createElementFromString } from './WebComponent';

test('Check root path finding on root path', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const router = new Router(document.querySelector('#root')!);

  window.location.hash = '';
  expect(router.checkPath(''))
    .toBe(true);
});

test('Check root path finding on custom path', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const router = new Router(document.querySelector('#root')!);

  window.location.hash = '#/home';
  expect(router.checkPath(''))
    .toBe(false);
});

test('Check custom path finding on same custom path', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const router = new Router(document.querySelector('#root')!);

  window.location.hash = '#/home';
  expect(router.checkPath('home'))
    .toBe(true);
});

test('Check custom path finding on other custom path', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const router = new Router(document.querySelector('#root')!);

  window.location.hash = '#/home';
  expect(router.checkPath('about'))
    .toBe(false);
});

test('Check element rendering', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const router = new Router(document.querySelector('#root')!);
  router.renderComponent(createElementFromString('<a href="/#/sample">Go to sample component</a>'));

  expect(document.body.innerHTML.includes('<a href="/#/sample">Go to sample component</a>'))
    .toBe(true);
});

test('Check adding refresh listener', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const router = new Router(document.querySelector('#root')!);
  router.renderComponent(createElementFromString('<a href="/#/sample">Go to sample component</a>'));
  router.addRefreshListener(document.querySelector('a')!, 'click');

  expect(document.querySelector('a')!.getAttribute('hasRefreshListener'))
    .toBe('true');
});
