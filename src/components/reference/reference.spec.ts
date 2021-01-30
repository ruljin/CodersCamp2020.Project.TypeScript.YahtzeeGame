import ReferenceComponent from './reference';
import { createElementFromString } from '../../common/WebComponent';

test('Check rendering disabled reference', () => {
  const reference = createElementFromString(`<a href="#/rules" 
    class="button button--disabled">Rules</a>`);

  window.location.hash = '#/rules';
  const rules = new ReferenceComponent('rules', 'Rules');

  expect(rules.render()).toStrictEqual(reference);
});

test('Check rendering reference', () => {
  const reference = createElementFromString(`<a href="#/settings" 
    class="button ">Settings</a>`);

  window.location.hash = '#/rules';
  const rules = new ReferenceComponent('settings', 'Settings');

  expect(rules.render()).toStrictEqual(reference);
});