import GameComponent from './game';

test('Check change label', () => {
  localStorage.setItem('settings', JSON.stringify({players: ['test', 'test2'], style: 'classic game'}));
  let game = new GameComponent();
  expect(game.checkIfOnlyOnePlayerPlay()).toBeFalsy();

  localStorage.setItem('settings', JSON.stringify({players: ['test', 'computer/easy'], style: 'classic game'}));
  game = new GameComponent();
  expect(game.checkIfOnlyOnePlayerPlay()).toBeTruthy();
});