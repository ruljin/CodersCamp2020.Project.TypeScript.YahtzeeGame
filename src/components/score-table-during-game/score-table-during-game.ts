import './score-table-during-game.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';
import ModalComponent from '../modal/modal';
import Router from '../../common/Router';

interface PlayerPoints {
  name: string,
  leave: boolean,
  ones: number | null,
  twos: number | null,
  threes: number | null,
  fours: number | null,
  fives: number | null,
  sixes: number | null,
  subtotal: number | null,
  bonus: number | null,
  threeOfKind: number | null,
  fourOfKind: number | null,
  fullHouse: number | null,
  smStraight: number | null,
  lgStraight: number | null,
  yahtzee: number | null,
  chance: number | null,
  yahtzeeBonus: number | null,
  total: number | null
}

class ScoreTableDuringGameComponent implements WebComponent {
  private playersName: string[];
  points: PlayerPoints[] = [];

  constructor(playersName: string[]) {
    this.playersName = playersName;
    for (const player of playersName) {
      const playerPoints: PlayerPoints = {
        name: player,
        leave: false,
        ones: null,
        twos: null,
        threes: null,
        fours: null,
        fives: null,
        sixes: null,
        subtotal: null,
        bonus: null,
        threeOfKind: null,
        fourOfKind: null,
        fullHouse: null,
        smStraight: null,
        lgStraight: null,
        yahtzee: null,
        chance: null,
        yahtzeeBonus: null,
        total: null
      };

      this.points.push(playerPoints);
    }
  }

  render(): Element {
    let container = '<div class="score-table">';

    const rowNames = `
    <div id="scoreTableNames" class="score-table__names">
      <div class="score-table__names-item score-table__names-item--empty"></div>
      <div id="ones" class="score-table__names-item"><p>&#128161;	ones</p></div>
      <div id="twos" class="score-table__names-item"><p>&#128161;	twos</p></div>
      <div id="threes" class="score-table__names-item"><p>&#128161;	threes</p></div>
      <div id="fours" class="score-table__names-item"><p>&#128161;	fours</p></div>
      <div id="fives" class="score-table__names-item"><p>&#128161;	fives</p></div>
      <div id="sixes" class="score-table__names-item"><p>&#128161;	sixes</p></div>
      <div id="subtotal" class="score-table__names-item score-table__names-item--blue"><p>&#128161;	subtotal</p></div>
      <div id="bonus" class="score-table__names-item score-table__names-item--blue"><p>&#128161;	bonus</p></div>
      <div id="threeOfaKind" class="score-table__names-item"><p>&#128161;	3 of a kind</p></div>
      <div id="fourOfaKind" class="score-table__names-item"><p>&#128161;	4 of a kind</p></div>
      <div id="fullHouse" class="score-table__names-item"><p>&#128161;	full house</p></div>
      <div id="smStraight" class="score-table__names-item"><p>&#128161;	sm.straight</p></div>
      <div id="lgStraight" class="score-table__names-item"><p>&#128161;	lg.straight</p></div>
      <div id="yahtzee" class="score-table__names-item"><p>&#128161;	yahtzee</p></div>
      <div id="chance" class="score-table__names-item"><p>&#128161;	chance</p></div>
      <div id="yahtzeeBonus" class="score-table__names-item score-table__names-item--blue"><p>&#128161;	yahtzee bonus</p></div>
      <div id="total" class="score-table__names-item score-table__names-item--blue"><p>&#128161;	total</p></div>
    </div>`;

    container += rowNames;

    let playerColumnsContainer = '<div class="score-table__players-container">';

    for (let i = 0; i < this.playersName.length; i++) {
      const playerColumn = `
      <div id="${this.playersName[i]}Column" class="score-table__player">
        <div class="score-table__player-name ${i == this.playersName.length-1 ? 'border-right-none' : ''}"><div class="rotate">${this.playersName[i]}</div></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field score-table__player-field--blue ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field score-table__player-field--blue ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field score-table__player-field--blue ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field score-table__player-field--blue ${i == this.playersName.length-1 ? 'border-right-none' : ''}"></div>
      </div>`;
      playerColumnsContainer += playerColumn;
    }

    container += playerColumnsContainer + '</div></div>';

    return createElementFromString(container);
  }

  setup(): void {
    const nameList = document.querySelector('#scoreTableNames')!;
    const namesField = nameList.querySelectorAll('.score-table__names-item:not(.score-table__names-item--empty)')!;

    namesField.forEach((field) => {
      field.addEventListener('click', () => this.showExplanationModal(field));
    });
  }

  public showExplanationModal(field: Element): void {
    let header, content, picture;
    const subheader = 'How to score';
    const buttonClose = {text: 'close', width: 10};

    switch (field.id) {
    case 'ones' : {
      header = 'Ones';
      content = 'Dice with side 1.<p class="modal__body__points">1 * the number of dice 1 obtained.</p><img class="modal__image" />';
      picture = 'ones';
      break;
    }

    case 'twos' : {
      header = 'Twos';
      content = 'Dice with side 2.<p class="modal__body__points">2 * the number of dice 2 obtained.</p><img class="modal__image" />';
      picture = 'twos';
      break;
    }

    case 'threes' : {
      header = 'Threes';
      content = 'Dice with side 3. <p class="modal__body__points">3 * the number of dice 3 obtained.</p><img class="modal__image" />';
      picture = 'threes';
      break;
    }

    case 'fours' : {
      header = 'Fours';
      content = 'Dice with side 4.<p class="modal__body__points">4 * the number of dice 4 obtained.</p><img class="modal__image" />';
      picture = 'fours';
      break;
    }

    case 'fives' : {
      header = 'Fives';
      content = 'Dice with side 5.<p class="modal__body__points">5 * the number of dice 5 obtained.</p><img class="modal__image" />';
      picture = 'fives';
      break;
    }

    case 'sixes' : {
      header = 'Sixes';
      content = 'Dice with side 6.<p class="modal__body__points">6 * the number of dice 6 obtained.</p><img class="modal__image" />';
      picture = 'sixes';
      break;
    }

    case 'subtotal' : {
      header = 'Subtotal';
      content = 'Subtotal upper section.<p class="modal__body__points">Sum of points obtained.</p><img class="modal__image" />';
      break;
    }

    case 'bonus' : {
      header = 'Bonus';
      content = 'When subtotal is greater than or equal to 63 points.<p class="modal__body__points">35 points.</p><img class="modal__image" />';
      break;
    }

    case 'threeOfaKind' : {
      header = '3 of a Kind';
      content = 'At least three dice the same.<p class="modal__body__points">Sum of all dice.</p><img class="modal__image" />';
      picture = 'threeOfKind';
      break;
    }

    case 'fourOfaKind' : {
      header = '4 of a Kind';
      content = 'At least four dice the same.<p class="modal__body__points">Sum of all dice.</p><img class="modal__image" />';
      picture = 'fourOfKind';
      break;
    }

    case 'fullHouse' : {
      header = 'Full House';
      content = 'Three of one number and two of another.<p class="modal__body__points">25 points.</p><img class="modal__image" />';
      picture = 'fullHouse';
      break;
    }

    case 'smStraight' : {
      header = 'Small Straight';
      content = 'Four sequential dice (1-2-3-4, 2-3-4-5 or 3-4-5-6).<p class="modal__body__points">30 points.</p><img class="modal__image" />';
      picture = 'smStraight';
      break;
    }

    case 'lgStraight' : {
      header = 'Large Straight';
      content = 'Five sequential dice (1-2-3-4-5 or 2-3-4-5-6).<p class="modal__body__points">40 points.</p><img class="modal__image" />';
      picture = 'lgStraight';
      break;
    }

    case 'yahtzee' : {
      header = 'Yahtzee';
      content = 'All five dice the same.<p class="modal__body__points">50 points.</p><img class="modal__image" />';
      picture = 'Yahtzee';
      break;
    }

    case 'chance' : {
      header = 'Chance';
      content = 'Any combination.<p class="modal__body__points">Sum of all dice.</p><img class="modal__image" />';
      picture = 'chance';
      break;
    }

    case 'yahtzeeBonus' : {
      header = 'Yahtzee bonus';
      content = 'For each new Yahtzee.<p class="modal__body__points">100 points for each additional Yahtzee.</p><img class="modal__image" />';
      break;
    }

    case 'total' : {
      header = 'Total';
      content = 'Grand total.<p class="modal__body__points">Sum of points obtained on the whole grid.</p><img class="modal__image" />';
      break;
    }

    default : {
      header = '';
      content = '';
    }
    }

    const modalComponent = new ModalComponent({ subheader: subheader, header: header, content: content, picture: picture, buttonClose: buttonClose});
    const router = new Router(document.querySelector('#root')!);
    router.renderComponent(modalComponent.render());
    modalComponent.setup();
    modalComponent.openModal();
  }
}

export default ScoreTableDuringGameComponent;