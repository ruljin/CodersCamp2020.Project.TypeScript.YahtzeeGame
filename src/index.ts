import './style.scss';
import SampleComponent from './components/sample/sample';
import Router from './common/Router';
import { createElementFromString } from './common/WebComponent';

const router = new Router(document.querySelector('#root')!);

if (router.checkPath('')) {
  router.renderComponent(createElementFromString('<a href="/#/sample">Go to sample component</a>'));
  router.addRefreshListener(document.querySelector('a')!, 'click');
}

if (router.checkPath('sample')) {
  const sampleComponent = new SampleComponent();
  router.renderComponent(sampleComponent.render());
  sampleComponent.setup();

  router.renderComponent(createElementFromString('<a href="/">Go back</a>'));
  router.addRefreshListener(document.querySelector('a')!, 'click');
}
