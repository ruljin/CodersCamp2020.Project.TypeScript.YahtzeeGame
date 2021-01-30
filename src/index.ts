import './style.scss';
import SampleComponent from './components/sample/sample';
import Router from './common/Router';
import { createElementFromString } from './common/WebComponent';
import SelectorComponent from './components/selector/selector';

const router = new Router(document.querySelector('#root')!);
const dropDown: HTMLSelectElement = document.createElement('select');

function routePathsHandler() {
  if (router.checkPath('')) {
    router.clearRoot();

    router.renderComponent(createElementFromString('<a href="#/sample">Go to sample component</a>'));
  } else if (router.checkPath('sample')) {
    router.clearRoot();

    const selector = new SelectorComponent(dropDown);
    router.renderComponent(selector.render());

    const sampleComponent = new SampleComponent();
    router.renderComponent(sampleComponent.render());
    sampleComponent.setup();

    router.renderComponent(createElementFromString('<a href="#">Go back</a>'));
  }
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);
