import { createElementFromString } from '../../common/WebComponent';
import ScoreTableDuringGameComponent from './score-table-during-game';

test('check rendering', () => {
  const table = createElementFromString(`<div class="score-table">
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
    </div><div class="score-table__players-container">
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
        <div class="score-table__player-name border-right-none"><div class="rotate">Player 2</div></div>
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
      </div></div></div>`);

  const scoreTableComponent = new ScoreTableDuringGameComponent(['Player 1', 'Player 2']);

  expect(scoreTableComponent.render()).toStrictEqual(table);
});

test('testing names function', () => {

  const ones = createElementFromString('<p id="ones">ones</p>');

  const scoreTableComponent = new ScoreTableDuringGameComponent(['Player 1', 'Player 2']);

  expect(scoreTableComponent.someFunction(ones)).toStrictEqual('ones');

});

test('testing field function', () => {

  const field = createElementFromString('<div class="score-table__names-item"><p id="ones">ones</p></div>');

  const scoreTableComponent = new ScoreTableDuringGameComponent(['Player 1', 'Player 2']);
  const event = new Event('click');

  expect(scoreTableComponent.anotherFunction(field, event)).toStrictEqual('');
});