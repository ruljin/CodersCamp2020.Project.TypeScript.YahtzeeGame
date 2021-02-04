import './style.scss';
import Router from './common/Router';
import { createElementFromString } from './common/WebComponent';
import AddElement from './components/addRemove/addRemove';
import LogoComponent from './components/logo/logo';


const router = new Router(document.querySelector('#root')!);
function routePathsHandler() {
  if (router.checkPath('')) {
    router.clearRoot();

    router.renderComponent(createElementFromString('<a href="#/sample">Go to sample component</a>'));
  } else if (router.checkPath('sample')) {
    router.clearRoot();

    const logo = new LogoComponent();
    router.renderComponent(logo.render());

    const addremove = new AddElement('+', '-');
    router.renderComponent(addremove.render());

    const list: string[] = ['computer/easy', 'computer/medium', 'computer/hard', 'player'];
    router.renderComponent(addremove.layout('player 1', list, 18));

    router.renderComponent(addremove.adding('player', list, 18));
    router.renderComponent(addremove.removing());

    router.renderComponent(createElementFromString('<a href="#">Go back</a>'));
  }
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);
