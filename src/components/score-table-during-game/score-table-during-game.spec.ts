import { createElementFromString } from '../../common/WebComponent';
import ScoreTableDuringGameComponent from './score-table-during-game';

test('check rendering', () => {
  const table = createElementFromString(`
    <div class="score-table">
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
        </div>
        <div class="score-table__players-container">
                <div class="score-table__player">
                    <div class="score-table__player-name "><div class="rotate">Player 1</div></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                </div>
                <div class="score-table__player">
                    <div class="score-table__player-name "><div class="rotate">Player 2</div></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                </div>
                <div class="score-table__player">
                    <div class="score-table__player-name "><div class="rotate">Player 3</div></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                    <div class="score-table__player-field score-table__player-field--blue "></div>
                </div>
                <div class="score-table__player">
                    <div class="score-table__player-name border-right-none"><div class="rotate">Player 4</div></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field score-table__player-field--blue border-right-none"></div>
                    <div class="score-table__player-field score-table__player-field--blue border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field border-right-none"></div>
                    <div class="score-table__player-field score-table__player-field--blue border-right-none"></div>
                    <div class="score-table__player-field score-table__player-field--blue border-right-none"></div>
                </div>
            </div></div>`);
  const scoreTableComponent = new ScoreTableDuringGameComponent(['Player 1', 'Player 2', 'Player 3', 'Player 4']);

  expect(scoreTableComponent.render()).toStrictEqual(table);
});