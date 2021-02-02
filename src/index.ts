import './style.scss';
import SampleComponent from './components/sample/sample';
import Router from './common/Router';
import { createElementFromString } from './common/WebComponent';
import ScoresComponent from './components/scores/scores';
import DiceBackgroundComponent, { DiceTypes } from './components/dice-background/dice-background';
import LogoComponent from './components/logo/logo';
import IntroComponent from './components/intro/intro';
import ReferenceComponent from './components/reference/reference';
import AuthorsComponent from './components/authors/authors';
import RulesComponent from './components/rules/rules';

const router = new Router(document.querySelector('#root')!);
function routePathsHandler() {
  if (router.checkPath('')) {
    router.clearRoot();

    router.renderComponent(createElementFromString('<a href="#/sample">Go to sample component</a>'));
  } else if (router.checkPath('authors')) {
    router.clearRoot();

    const diceBackgroundComponent =
    new DiceBackgroundComponent(DiceTypes.BG_ALT);
    router.renderComponent(diceBackgroundComponent.render());
    diceBackgroundComponent.setup();

    const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG);
    router.renderComponent(diceBackgroundComponent2.render());
    diceBackgroundComponent2.setup();

    const logoComponent = new LogoComponent();
    router.renderComponent(logoComponent.render());
    logoComponent.setup();

    const authorsComponent = new AuthorsComponent();
    router.renderComponent(authorsComponent.render());
    authorsComponent.setup();

    const referenceComponent1 = new ReferenceComponent('scores', 'scores');
    router.renderComponent(referenceComponent1.render());
    referenceComponent1.setup();

    const referenceComponent2 = new ReferenceComponent('rules', 'rules');
    router.renderComponent(referenceComponent2.render());
    referenceComponent2.setup();

    const referenceComponent3 = new ReferenceComponent('', 'game');
    router.renderComponent(referenceComponent3.render());
    referenceComponent3.setup();

    const referenceComponent4 = new ReferenceComponent('authors', 'authors');
    router.renderComponent(referenceComponent4.render());
    referenceComponent4.setup();
  } else if (router.checkPath('intro')){
    router.clearRoot();

    const diceBackgroundComponent =
    new DiceBackgroundComponent(DiceTypes.BG_ALT);
    router.renderComponent(diceBackgroundComponent.render());
    diceBackgroundComponent.setup();

    const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG);
    router.renderComponent(diceBackgroundComponent2.render());
    diceBackgroundComponent2.setup();

    const logoComponent = new LogoComponent();
    router.renderComponent(logoComponent.render());
    logoComponent.setup();

    const introComponent = new IntroComponent();
    router.renderComponent(introComponent.render());
    introComponent.setup();

    const referenceComponent1 = new ReferenceComponent('scores', 'scores');
    router.renderComponent(referenceComponent1.render());
    referenceComponent1.setup();

    const referenceComponent2 = new ReferenceComponent('rules', 'rules');
    router.renderComponent(referenceComponent2.render());
    referenceComponent2.setup();

    const referenceComponent3 = new ReferenceComponent('', 'game');
    router.renderComponent(referenceComponent3.render());
    referenceComponent3.setup();

    const referenceComponent4 = new ReferenceComponent('authors', 'authors');
    router.renderComponent(referenceComponent4.render());
    referenceComponent4.setup();
  } else if (router.checkPath('rules')){
    router.clearRoot();

    const diceBackgroundComponent =
    new DiceBackgroundComponent(DiceTypes.BG_ALT);
    router.renderComponent(diceBackgroundComponent.render());
    diceBackgroundComponent.setup();

    const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG);
    router.renderComponent(diceBackgroundComponent2.render());
    diceBackgroundComponent2.setup();

    const logoComponent = new LogoComponent();
    router.renderComponent(logoComponent.render());
    logoComponent.setup();

    const rulesComponent = new RulesComponent();
    router.renderComponent(rulesComponent.render());
    rulesComponent.setup();

    const referenceComponent1 = new ReferenceComponent('scores', 'scores');
    router.renderComponent(referenceComponent1.render());
    referenceComponent1.setup();

    const referenceComponent2 = new ReferenceComponent('rules', 'rules');
    router.renderComponent(referenceComponent2.render());
    referenceComponent2.setup();

    const referenceComponent3 = new ReferenceComponent('', 'game');
    router.renderComponent(referenceComponent3.render());
    referenceComponent3.setup();

    const referenceComponent4 = new ReferenceComponent('authors', 'authors');
    router.renderComponent(referenceComponent4.render());
    referenceComponent4.setup();
  } else if (router.checkPath('scores')) {
    router.clearRoot();

    const diceBackgroundComponent =
    new DiceBackgroundComponent(DiceTypes.BG_ALT);
    router.renderComponent(diceBackgroundComponent.render());
    diceBackgroundComponent.setup();

    const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG);
    router.renderComponent(diceBackgroundComponent2.render());
    diceBackgroundComponent2.setup();

    const logoComponent = new LogoComponent();
    router.renderComponent(logoComponent.render());
    logoComponent.setup();

    const scoresComponent = new ScoresComponent();
    router.renderComponent(scoresComponent.render());
    scoresComponent.setup();

    const referenceComponent1 = new ReferenceComponent('scores', 'scores');
    router.renderComponent(referenceComponent1.render());
    referenceComponent1.setup();

    const referenceComponent2 = new ReferenceComponent('rules', 'rules');
    router.renderComponent(referenceComponent2.render());
    referenceComponent2.setup();

    const referenceComponent3 = new ReferenceComponent('', 'game');
    router.renderComponent(referenceComponent3.render());
    referenceComponent3.setup();

    const referenceComponent4 = new ReferenceComponent('authors', 'authors');
    router.renderComponent(referenceComponent4.render());
    referenceComponent4.setup();

  } else if (router.checkPath('sample')) {
    const sampleComponent = new SampleComponent();
    router.renderComponent(sampleComponent.render());
    sampleComponent.setup();

    router.renderComponent(createElementFromString('<a href="#">Go back</a>'));
  }
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);