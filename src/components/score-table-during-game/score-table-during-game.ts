import './score-table-during-game.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class ScoreTableDuringGameComponent implements WebComponent {
  constructor(private playersNames: string[]) {}

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

    for (let i = 0; i < this.playersNames.length; i++) {
      const playerColumn = `
      <div class="score-table__player">
        <div class="score-table__player-name ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"><div class="rotate">${this.playersNames[i]}</div></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field score-table__player-field--blue ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field score-table__player-field--blue ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field score-table__player-field--blue ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
        <div class="score-table__player-field score-table__player-field--blue ${i == this.playersNames.length-1 ? 'border-right-none' : ''}"></div>
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
      name.addEventListener('click', this.someFunction.bind(null, name));
    });

    namesField.forEach((field) => {
      field.addEventListener('click', this.anotherFunction.bind(null, field));
    });
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