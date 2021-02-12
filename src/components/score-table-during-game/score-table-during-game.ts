import './score-table-during-game.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';
import ModalComponent from '../modal/modal';
import * as ones from '../../assets/ones.png';

interface PlayerPoints {
  name: string
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
      <div class="score-table__names-item"><p id="ones">ones</p></div>
      <div class="score-table__names-item"><p id="twos">twos</p></div>
      <div class="score-table__names-item"><p id="threes">threes</p></div>
      <div class="score-table__names-item"><p id="fours">fours</p></div>
      <div class="score-table__names-item"><p id="fives">fives</p></div>
      <div class="score-table__names-item"><p id="sixes">sixes</p></div>
      <div class="score-table__names-item score-table__names-item--blue"><p id="subtotal">subtotal</p></div>
      <div class="score-table__names-item score-table__names-item--blue"><p id="bonus">bonus</p></div>
      <div class="score-table__names-item"><p id="threeOfaKind">3 of a kind</p></div>
      <div class="score-table__names-item"><p id="fourOfaKind">4 of a kind</p></div>
      <div class="score-table__names-item"><p id="fullHouse">full house</p></div>
      <div class="score-table__names-item"><p id="smStraight">sm.straight</p></div>
      <div class="score-table__names-item"><p id="lgStraight">lg.straight</p></div>
      <div class="score-table__names-item"><p id="yahtzee">yahtzee</p></div>
      <div class="score-table__names-item"><p id="chance">chance</p></div>
      <div class="score-table__names-item score-table__names-item--blue"><p id="yahtzeeBonus">yahtzee bonus</p></div>
      <div class="score-table__names-item score-table__names-item--blue"><p id="total">total</p></div>
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
    const names = nameList.querySelectorAll('.score-table__names-item:not(.score-table__names-item--empty) p')!;
    const namesField = nameList.querySelectorAll('.score-table__names-item:not(.score-table__names-item--empty)')!;

    names.forEach((name) => {
      name.addEventListener('click', () => this.someFunction(name));
    });

    namesField.forEach((field) => {
      field.addEventListener('click', () => this.anotherFunction(field, event!));
    });

    const modalComponent = new ModalComponent({ subheader: 'How to score', header: 'Ones', content: `Dice with side 1.
    <p>1 * the number of dice 1 obtained.</p><img class="modal__image" />`, picture: ones, buttonClose: { text: 'close', width: 10 }});
    modalComponent.render();
    modalComponent.setup();
    document.querySelector('#ones')!.addEventListener('click', modalComponent.openModal);
  }

  public someFunction(name: Element): string {
    return name.innerHTML;
  }

  public anotherFunction(field: Element, e: Event): string {
    if (!e.target) return '';
    const target = e.target as HTMLElement;
    if (!target.classList.contains('score-table__names-item')) return '';
    return field.innerHTML;
  }
}

export default ScoreTableDuringGameComponent;