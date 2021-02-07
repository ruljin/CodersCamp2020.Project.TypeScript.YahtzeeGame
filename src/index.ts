import './style.scss';
import Router from './common/Router';
import ScoresComponent from './components/scores/scores';
import DiceBackgroundComponent, { DiceTypes } from './components/dice-background/dice-background';
import LogoComponent from './components/logo/logo';
import IntroComponent from './components/intro/intro';
import ReferenceComponent from './components/reference/reference';
import AuthorsComponent from './components/authors/authors';
import RulesComponent from './components/rules/rules';
import SettingsComponent from './components/settings/settings';

const router = new Router(document.querySelector('#root')!);
function routePathsHandler() {
  if (router.checkPath('')) {
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

    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class', 'menu-buttons');

    const referenceComponentScores = new ReferenceComponent('scores', 'scores');
    const referenceComponentRules = new ReferenceComponent('rules', 'rules');
    const referenceComponentGame = new ReferenceComponent('game-settings', 'game');
    const referenceComponentAuthors = new ReferenceComponent('authors', 'authors');

    buttonWrapper.appendChild(referenceComponentScores.render());
    buttonWrapper.appendChild(referenceComponentRules.render());
    buttonWrapper.appendChild(referenceComponentGame.render());
    buttonWrapper.appendChild(referenceComponentAuthors.render());

    referenceComponentScores.setup();
    referenceComponentRules.setup();
    referenceComponentGame.setup();
    referenceComponentAuthors.setup();
    router.renderComponent(buttonWrapper);

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

    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class', 'menu-buttons');

    const referenceComponentScores = new ReferenceComponent('scores', 'scores');
    const referenceComponentRules = new ReferenceComponent('rules', 'rules');
    const referenceComponentGame = new ReferenceComponent('game-settings', 'game');
    const referenceComponentAuthors = new ReferenceComponent('authors', 'authors');

    buttonWrapper.appendChild(referenceComponentScores.render());
    buttonWrapper.appendChild(referenceComponentRules.render());
    buttonWrapper.appendChild(referenceComponentGame.render());
    buttonWrapper.appendChild(referenceComponentAuthors.render());

    referenceComponentScores.setup();
    referenceComponentRules.setup();
    referenceComponentGame.setup();
    referenceComponentAuthors.setup();
    router.renderComponent(buttonWrapper);
  } else if (router.checkPath('rules')) {
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

    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class', 'menu-buttons');

    const referenceComponentScores = new ReferenceComponent('scores', 'scores');
    const referenceComponentRules = new ReferenceComponent('rules', 'rules');
    const referenceComponentGame = new ReferenceComponent('game-settings', 'game');
    const referenceComponentAuthors = new ReferenceComponent('authors', 'authors');

    buttonWrapper.appendChild(referenceComponentScores.render());
    buttonWrapper.appendChild(referenceComponentRules.render());
    buttonWrapper.appendChild(referenceComponentGame.render());
    buttonWrapper.appendChild(referenceComponentAuthors.render());

    referenceComponentScores.setup();
    referenceComponentRules.setup();
    referenceComponentGame.setup();
    referenceComponentAuthors.setup();
    router.renderComponent(buttonWrapper);
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

    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class', 'menu-buttons');

    const referenceComponentScores = new ReferenceComponent('scores', 'scores');
    const referenceComponentRules = new ReferenceComponent('rules', 'rules');
    const referenceComponentGame = new ReferenceComponent('game-settings', 'game');
    const referenceComponentAuthors = new ReferenceComponent('authors', 'authors');

    buttonWrapper.appendChild(referenceComponentScores.render());
    buttonWrapper.appendChild(referenceComponentRules.render());
    buttonWrapper.appendChild(referenceComponentGame.render());
    buttonWrapper.appendChild(referenceComponentAuthors.render());

    referenceComponentScores.setup();
    referenceComponentRules.setup();
    referenceComponentGame.setup();
    referenceComponentAuthors.setup();
    router.renderComponent(buttonWrapper);

  } else if (router.checkPath('game-settings')) {
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

    const settingsComponent = new SettingsComponent();
    router.renderComponent(settingsComponent.render());
    settingsComponent.setup();

    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class', 'menu-buttons');
    buttonWrapper.appendChild(new ReferenceComponent('scores', 'scores').render());
    buttonWrapper.appendChild(new ReferenceComponent('rules', 'rules').render());
    buttonWrapper.appendChild(new ReferenceComponent('game-settings', 'game').render());
    buttonWrapper.appendChild(new ReferenceComponent('authors', 'authors').render());
    router.renderComponent(buttonWrapper);

  }
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);