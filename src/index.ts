import './style.scss';
import Router from './common/Router';
import GameComponent from './components/game/game';

const router = new Router(document.querySelector('#root')!);

function routePathsHandler() {
  const playersName = ['Player 1', 'Player 2'];
  const game = new GameComponent(playersName);
  router.renderComponent(game.render());
  game.setup();
  game.newGame();
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);