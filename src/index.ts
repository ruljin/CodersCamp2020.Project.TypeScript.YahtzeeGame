import './style.scss';
import SampleComponent from './components/sample/sample';
import Router from './common/Router';
import { createElementFromString } from './common/WebComponent';
import DiceBackground, { DiceTypes } from './components/dice-background/dice-background';
import LabelComponent from './components/label/label';

const router = new Router(document.querySelector('#root')!);
function routePathsHandler() {
  if (router.checkPath('')) {
    router.clearRoot();

    router.renderComponent(createElementFromString('<a href="#/sample">Go to sample component</a>'));
  } else if (router.checkPath('sample')) {
    router.clearRoot();

    const logo = new DiceBackground(DiceTypes.BG_MOB_ALT);
    router.renderComponent(logo.render());

    const sampleComponent = new SampleComponent();
    router.renderComponent(sampleComponent.render());
    sampleComponent.setup();

    const x = new LabelComponent('Ania plays!');
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
