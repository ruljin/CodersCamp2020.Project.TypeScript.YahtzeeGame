import './style.scss';
import Router from './common/Router';
import GameComponent from './components/game/game';

const router = new Router(document.querySelector('#root')!);

function routePathsHandler() {
  const playersName = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
  const game = new GameComponent(playersName);
  game.gameBoard.roll();
  router.renderComponent(game.newGame());
  game.setup();
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);