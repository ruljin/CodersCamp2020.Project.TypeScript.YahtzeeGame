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
import GameComponent from './components/game/game';

const router = new Router(document.querySelector('#root')!);
function routePathsHandler() {
  if (router.checkPath('')) {
    router.clearRoot();

    const width = window.innerWidth;
    if (width <= 576) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else if (width > 576 && width <= 768) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    }

    const logoComponent = new LogoComponent();
    router.renderComponent(logoComponent.render());
    logoComponent.setup();

    const introComponent = new IntroComponent();
    router.renderComponent(introComponent.render());
    introComponent.setup();

    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class', 'menu-buttons');

    const referenceComponentScores = new ReferenceComponent('scores', 'Scores');
    const referenceComponentRules = new ReferenceComponent('rules', 'Rules');
    const referenceComponentGame = new ReferenceComponent('game-settings', 'Game');
    const referenceComponentAuthors = new ReferenceComponent('authors', 'Authors');

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

    const width = window.innerWidth;
    if (width <= 576) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else if (width > 576 && width <= 768) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    }

    const logoComponent = new LogoComponent();
    router.renderComponent(logoComponent.render());
    logoComponent.setup();

    const authorsComponent = new AuthorsComponent();
    router.renderComponent(authorsComponent.render());
    authorsComponent.setup();

    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class', 'menu-buttons');

    const referenceComponentScores = new ReferenceComponent('scores', 'Scores');
    const referenceComponentRules = new ReferenceComponent('rules', 'Rules');
    const referenceComponentGame = new ReferenceComponent('game-settings', 'Game');
    const referenceComponentAuthors = new ReferenceComponent('authors', 'Authors');

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

    const width = window.innerWidth;
    if (width <= 576) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else if (width > 576 && width <= 768) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    }

    const logoComponent = new LogoComponent();
    router.renderComponent(logoComponent.render());
    logoComponent.setup();

    const rulesComponent = new RulesComponent();
    router.renderComponent(rulesComponent.render());
    rulesComponent.setup();

    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class', 'menu-buttons');

    const referenceComponentScores = new ReferenceComponent('scores', 'Scores');
    const referenceComponentRules = new ReferenceComponent('rules', 'Rules');
    const referenceComponentGame = new ReferenceComponent('game-settings', 'Game');
    const referenceComponentAuthors = new ReferenceComponent('authors', 'Authors');

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

    const width = window.innerWidth;
    if (width <= 576) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else if (width > 576 && width <= 768) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    }

    const logoComponent = new LogoComponent();
    router.renderComponent(logoComponent.render());
    logoComponent.setup();

    const scoresComponent = new ScoresComponent();
    router.renderComponent(scoresComponent.render());
    scoresComponent.setup();

    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class', 'menu-buttons');

    const referenceComponentScores = new ReferenceComponent('scores', 'Scores');
    const referenceComponentRules = new ReferenceComponent('rules', 'Rules');
    const referenceComponentGame = new ReferenceComponent('game-settings', 'Game');
    const referenceComponentAuthors = new ReferenceComponent('authors', 'Authors');

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

    const width = window.innerWidth;
    if (width <= 576) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else if (width > 576 && width <= 768) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    }

    const logoComponent = new LogoComponent();
    router.renderComponent(logoComponent.render());
    logoComponent.setup();

    const settingsComponent = new SettingsComponent();
    router.renderComponent(settingsComponent.render());
    settingsComponent.setup();

    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('class', 'menu-buttons');
    buttonWrapper.appendChild(new ReferenceComponent('scores', 'Scores').render());
    buttonWrapper.appendChild(new ReferenceComponent('rules', 'Rules').render());
    buttonWrapper.appendChild(new ReferenceComponent('game-settings', 'Game').render());
    buttonWrapper.appendChild(new ReferenceComponent('authors', 'Authors').render());
    router.renderComponent(buttonWrapper);

  } else if (router.checkPath('game')) {
    router.clearRoot();
    const game = new GameComponent();
    const width = window.innerWidth;
    if (width <= 576) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else if (width > 576 && width <= 768) {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_MOB_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG_MOB);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    } else {
      const diceBackgroundComponent =
      new DiceBackgroundComponent(DiceTypes.BG_ALT);
      router.renderComponent(diceBackgroundComponent.render());
      diceBackgroundComponent.setup();

      const diceBackgroundComponent2 = new DiceBackgroundComponent(DiceTypes.BG);
      router.renderComponent(diceBackgroundComponent2.render());
      diceBackgroundComponent2.setup();
    }
    router.renderComponent(game.render());
    game.setup();
    game.newGame();
  }
}

routePathsHandler();
router.addHashChangeListener(routePathsHandler);