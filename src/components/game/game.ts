import './game.scss';
import GameBoardComponent from '../game-board/game-board';
import LogoComponent from '../logo/logo';
import ScoreTableComponent from '../score-table-during-game/score-table-during-game';
import WebComponent, {createElementFromElements} from '../../common/WebComponent';
import DiceBackgroundComponent, { DiceTypes } from '../dice-background/dice-background';

class GameComponent implements WebComponent  {
  gameBoard: GameBoardComponent;
  scoreTable: ScoreTableComponent;
  playersName: string[];

  constructor(playersName: string[]) {
    this.gameBoard = new GameBoardComponent(() => null, () => null);
    this.scoreTable = new ScoreTableComponent(playersName);
    this.playersName = playersName;
  }

  render(): Element {
    const container = document.createElement('div');
    container.append(new LogoComponent().render());
    container.append(new DiceBackgroundComponent(DiceTypes.BG).render());
    container.append(createElementFromElements('game-container', this.gameBoard.render(), this.scoreTable.render()));
    container.append(new DiceBackgroundComponent(DiceTypes.BG_ALT).render());

    return container;
  }

  setup(): void {
    this.gameBoard.setup();
    this.scoreTable.setup();
  }

  newGame(): Element {
    this.gameBoard.changePlayer(this.playersName[0]);
    const container = this.render();
    return container;
  }

}

export default GameComponent;