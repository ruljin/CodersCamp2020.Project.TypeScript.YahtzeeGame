import './style.scss';
import Router from './common/Router';
import ScoreTableDuringGameComponent from './components/score-table-during-game/score-table-during-game';

const router = new Router(document.querySelector('#root')!);

function routePathsHandler() {
  const scoreTableuringGame = new ScoreTableDuringGameComponent(['Player 1', 'Player 2', 'Player 3', 'Player 4']);
  router.renderComponent(scoreTableuringGame.render());
  // if (router.checkPath('')) {
  //   router.clearRoot();

  //   router.renderComponent(createElementFromString('<a href="#/sample">Go to sample component</a>'));
  // } else if (router.checkPath('sample')) {
  //   router.clearRoot();

  //   const logo = new LogoComponent();
  //   router.renderComponent(logo.render());

  //   const sampleComponent = new SampleComponent();
  //   router.renderComponent(sampleComponent.render());
  //   sampleComponent.setup();

  //   router.renderComponent(createElementFromString('<a href="#">Go back</a>'));
  // }
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);
