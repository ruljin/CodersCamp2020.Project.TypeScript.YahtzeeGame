import SettingsComponent from './settings';


test('Check rendering settings component', () => {
  //   const layout = `<section class="settings"><section class="settings__names"><div class="label" style="width: 15rem;">names</div><div class="players"><div><input class="label label--alternative" maxlength="15" pattern="[A-Za-z0-9]+" placeholder="Player 1" required="" style="width: 20rem;" type="text" /><div class="error" /></div><div><select class="select" style="width: 20rem;"><option value="computer/easy">computer/easy</option><option value="computer/medium">computer/medium</option><option value="computer/hard">computer/hard</option><option value="player">player</option>
  //         </select><div class="error" /></div></div><div class="switch-wrapper">
  //       <button class="switch switch--add">+</button>
  //       <button class="switch switch--remove">-</button>
  //     </div></section><section class="settings__styles"><div class="label" style="width: 15rem;">styles</div><select class="select" style="width
  // : 45rem;"><option value="classic game">classic game</option><option value="play with pirates">play with pirates</option><option value="beat the dr
  // agon">beat the dragon</option>
  //       </select></section><a class="button " href="#/game">play!</a></section>`;

  const layout = '<section />';

  const settings = new SettingsComponent();
  expect(settings.render()).toBe(layout);
});