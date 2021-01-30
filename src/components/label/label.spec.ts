import LabelComponent from './label';
import { createElementFromString } from '../../common/WebComponent';

test('Check rendering labels', () => {
  const checkLabelPlayers = new LabelComponent('players', 8);
  expect(checkLabelPlayers.render())
    .toStrictEqual(createElementFromString('<div class="label" style="width: 8rem;">players</div>'));

  const checkLabelWhoPlays = new LabelComponent('Maciej plays!', 10);
  expect(checkLabelWhoPlays.render())
    .toStrictEqual(createElementFromString('<div class="label" style="width: 10rem;">Maciej plays!</div>'));

  const checkLabelCategory = new LabelComponent('choose category', 15);
  expect(checkLabelCategory.render())
    .toStrictEqual(createElementFromString('<div class="label" style="width: 15rem;">choose category</div>'));
});
