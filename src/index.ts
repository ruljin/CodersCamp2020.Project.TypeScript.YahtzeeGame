import './style.scss';
import SampleComponent from './components/sample/sample';
import Router from './common/Router';
import { createElementFromString } from './common/WebComponent';
import LogoComponent from './components/logo/logo';
import LabelsComponent from './components/labels/labels';

const router = new Router(document.querySelector('#root')!);

function routePathsHandler() {
  if (router.checkPath('')) {
    router.clearRoot();

    router.renderComponent(createElementFromString('<a href="#/sample">Go to sample component</a>'));
  } else if (router.checkPath('sample')) {
    router.clearRoot();

    const logo = new LogoComponent();
    router.renderComponent(logo.render());

    const label1 = new LabelsComponent();
    label1.settingsPlayers();
    router.renderComponent(label1.render());
    label1.setup();

    const label2 = new LabelsComponent();
    label2.settingsStyle();
    router.renderComponent(label2.render());
    label2.setup();

    const label3 = new LabelsComponent();
    label3.boardWhoPlays('Maciej');
    router.renderComponent(label3.render());
    label3.setup();

    const label4 = new LabelsComponent();
    label4.boardChooseCategory();
    router.renderComponent(label4.render());
    label4.setup();

    const sampleComponent = new SampleComponent();
    router.renderComponent(sampleComponent.render());
    sampleComponent.setup();

    router.renderComponent(createElementFromString('<a href="#">Go back</a>'));
  }
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);
