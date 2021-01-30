import LabelComponent from './label';
import { createElementFromString } from '../../common/WebComponent';

test('Check rendering labels', () => {
  const checkLabelPlayers = new LabelComponent('players');
  expect(checkLabelPlayers.render())
    .toStrictEqual(createElementFromString('<div class="label">players</div>'));

  const checkLabelStyle = new LabelComponent('style');
  checkLabelStyle.settingsStyleLabel();
  expect(checkLabelStyle.render())
    .toStrictEqual(createElementFromString('<div class="label"><p class="label__settings-style-label">style</p></div>'));

  const checkLabelWhoPlays = new LabelComponent('Maciej plays!');
  expect(checkLabelWhoPlays.render())
    .toStrictEqual(createElementFromString('<div class="label">Maciej plays!</div>'));

  const checkLabelCategory = new LabelComponent('choose category');
  expect(checkLabelCategory.render())
    .toStrictEqual(createElementFromString('<div class="label">choose category</div>'));
});
