import './style.scss';
import SampleComponent from './components/sample/sample';
import Router from './common/Router';
import { createElementFromString } from './common/WebComponent';
import LogoComponent from './components/logo/logo';
import IntroComponent from './components/intro/intro';

const router = new Router(document.querySelector('#root')!);

function routePathsHandler() {
  if (router.checkPath('')) {
    router.clearRoot();

    router.renderComponent(createElementFromString('<a href="#/sample">Go to sample component</a>'));
  } else if (router.checkPath('sample')) {
    router.clearRoot();

    const logo = new LogoComponent();
    router.renderComponent(logo.render());

    const introComponent = new IntroComponent();
    router.renderComponent(introComponent.render());
    introComponent.setup();

    const sampleComponent = new SampleComponent();
    router.renderComponent(sampleComponent.render());
    sampleComponent.setup();

    router.renderComponent(createElementFromString('<a href="#">Go back</a>'));
  }
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);
