import LabelsComponent from './labels';
import { createElementFromString } from '../../common/WebComponent';

test('Check rendering labels', () => {
  const labelComponent = new LabelsComponent();

  labelComponent.settingsPlayers();
  expect(labelComponent.render())
    .toStrictEqual(createElementFromString('<div class="labels">players</div>'));

  labelComponent.settingsStyle();
  expect(labelComponent.render())
    .toStrictEqual(createElementFromString('<div class="labels"><p class="labels__settings-style">style</p></div>'));

  const name = 'Maciej';
  labelComponent.boardWhoPlays(name);
  expect(labelComponent.render())
    .toStrictEqual(createElementFromString('<div class="labels">Maciej plays!</div>'));

  labelComponent.boardChooseCategory();
  expect(labelComponent.render())
    .toStrictEqual(createElementFromString('<div class="labels">choose category</div>'));
});