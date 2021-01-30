import './style.scss';
import SampleComponent from './components/sample/sample';
import Router from './common/Router';
import { createElementFromString } from './common/WebComponent';
import LogoComponent from './components/logo/logo';
import LabelComponent from './components/label/label';

const router = new Router(document.querySelector('#root')!);

function routePathsHandler() {
  if (router.checkPath('')) {
    router.clearRoot();

    router.renderComponent(createElementFromString('<a href="#/sample">Go to sample component</a>'));
  } else if (router.checkPath('sample')) {
    router.clearRoot();

    const logo = new LogoComponent();
    router.renderComponent(logo.render());

    const sampleComponent = new SampleComponent();
    router.renderComponent(sampleComponent.render());
    sampleComponent.setup();

    const x = new LabelComponent('players');
    router.renderComponent(x.render());
    x.setup();

    const y = new LabelComponent('style');
    y.alternateAppearance();
    router.renderComponent(y.render());
    y.setup();

    router.renderComponent(createElementFromString('<a href="#">Go back</a>'));
  }
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);
