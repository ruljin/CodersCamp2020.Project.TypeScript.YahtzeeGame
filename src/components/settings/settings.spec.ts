import SettingsComponent from './settings';
import { createElementFromString } from '../../common/WebComponent';

test('Check rendering settings component', () => {
  const layout = createElementFromString(`<section class="settings"><section class="settings__names"><div class="label" style="width: 15vw;">names</div><div class="players"><div class="players__option"><input id="id1" class="label label--alternative" maxlength="9" pattern="[A-Za-z0-9]+" placeholder="Player 1" required="" style="width: 20vw;" type="text"><div class="error" /></div></div><div class="players__option"><select class="select" style="width: 20vw;"><option value="computer/easy">computer/easy</option><option value="computer/medium">computer/medium</option><option value="computer/hard">computer/hard</option><option value="player">player</option>
       </select><div class="error" /></div></div></div><div class="switch-wrapper">
      <button class="switch switch--add">+</button>
      <button class="switch switch--remove">-</button>
    </div></section><section class="settings__styles"><div class="label" style="width: 15vw;">styles</div><select class="select" style="width: 45vw;"><option value="classic game">classic game</option><option value="play with pirates">play with pirates</option><option value="beat the dragon">beat the dragon</option>
       </select></section><a class="button " href="#/game">play!</a></section>`);

  const settings = new SettingsComponent();
  expect(settings.render()).toStrictEqual(layout);
});