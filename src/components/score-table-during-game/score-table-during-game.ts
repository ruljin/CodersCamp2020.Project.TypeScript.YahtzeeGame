import './score-table-during-game.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class ScoreTableDuringGameComponent implements WebComponent {
  constructor(private playersNames: string[]) {}

  render(): Element {
    let container = '<div class="score-table">';

    const rowNames = `
      <div class="score-table__names">
        <div class="score-table__names-item score-table__names-item--empty"></div>
        <div class="score-table__names-item">ones</div>
        <div class="score-table__names-item">twos</div>
        <div class="score-table__names-item">threes</div>
        <div class="score-table__names-item">fours</div>
        <div class="score-table__names-item">fives</div>
        <div class="score-table__names-item">sixes</div>
        <div class="score-table__names-item score-table__names-item--blue">subtotal</div>
        <div class="score-table__names-item score-table__names-item--blue">bonus</div>
        <div class="score-table__names-item">3 of a kind</div>
        <div class="score-table__names-item">4 of a kind</div>
        <div class="score-table__names-item">full house</div>
        <div class="score-table__names-item">sm.straight</div>
        <div class="score-table__names-item">lg.straight</div>
        <div class="score-table__names-item">yahtzee</div>
        <div class="score-table__names-item">chance</div>
        <div class="score-table__names-item score-table__names-item--blue">yahtzee bonus</div>
        <div class="score-table__names-item score-table__names-item--blue">total</div>
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
    return;
  }
}

export default ScoreTableDuringGameComponent;
