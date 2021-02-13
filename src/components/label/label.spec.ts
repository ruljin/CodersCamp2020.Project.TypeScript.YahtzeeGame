import LabelComponent from './label';
import { createElementFromString } from '../../common/WebComponent';

test('Check rendering labels', () => {
  const checkLabelPlayers = new LabelComponent('players', 8, true);
  expect(checkLabelPlayers.render())
    .toStrictEqual(createElementFromString('<div class="label" style="width: 8vw;">players</div>'));

  const checkLabelWhoPlays = new LabelComponent('Maciej plays!', 10, true);
  expect(checkLabelWhoPlays.render())
    .toStrictEqual(createElementFromString('<div class="label" style="width: 10vw;">Maciej plays!</div>'));

  const checkLabelCategory = new LabelComponent('choose category', 15, true);
  expect(checkLabelCategory.render())
    .toStrictEqual(createElementFromString('<div class="label" style="width: 15vw;">choose category</div>'));
});

test('Check rendering labels with class label--alternative', () => {
  const checkLabelPlayers = new LabelComponent('Player 1', 8, false);
  expect(checkLabelPlayers.render())
    .toStrictEqual(createElementFromString(`
    <input type="text" class="label label--alternative" placeholder="Player 1" style="width: 8vw;">`));
});
