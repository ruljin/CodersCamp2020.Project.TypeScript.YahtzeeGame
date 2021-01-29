import './style.scss';
import SampleComponent from './components/sample/sample';
import Router from './common/Router';
import { createElementFromString } from './common/WebComponent';
import LogoComponent from './components/logo/logo';
import ScoresComponent from './components/scores/scores';

const router = new Router(document.querySelector('#root')!);

function routePathsHandler() {
  if (router.checkPath('')) {
    router.clearRoot();

    router.renderComponent(createElementFromString('<a href="#/sample">Go to sample component</a>'));
  } else if (router.checkPath('sample')) {
    router.clearRoot();

    const logo = new LogoComponent();
    router.renderComponent(logo.render());

    const scoresComponent = new ScoresComponent();
    router.renderComponent(scoresComponent.render());
    scoresComponent.setup();

    const sampleComponent = new SampleComponent();
    router.renderComponent(sampleComponent.render());
    sampleComponent.setup();

    router.renderComponent(createElementFromString('<a href="#">Go back</a>'));
  }
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);
