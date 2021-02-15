import GameBoardComponent from './game-board';

const gameBoard = new GameBoardComponent(() => null, () => null);

test('Check change label', () => {
  document.body.innerHTML = '<div class="board__pause-cover"><div class="label"></div></div>';
  const label = document.querySelector('.label');
  gameBoard.changeLabel('Testowy label');
  expect(label!.innerHTML).toStrictEqual('Testowy label');
});