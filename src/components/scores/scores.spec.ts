import ScoresComponent from './scores';
import { createElementFromString } from '../../common/WebComponent';
import { createTracing } from 'trace_events';

test('Check rendering scores table', () => {
  const scores = createElementFromString(
      `<section class="container">
        <h1 class="scores">Best Yahtzee players</h1>
        <table class="table">
            <thead>
            <tr>
            <th scope="col">place</th>
            <th scope="col">name</th>
            <th scope="col">points</th>
            </tr>
            </thead>
            <tbody id="tableBody" class="table__body">
            </tbody>
        </table>
      </section>`
  );
  const scoresComponent = new ScoresComponent();

  expect(scoresComponent.render()).toStrictEqual(scores);
});

test('check creating row with scores', () => {
  const tableBody = document.querySelector('#tableBody')!;
  tableBody.createTR([1, 'test', 200]);
  expect(tableBody.createTR([1, 'test', 200])).toMatch(`
  <tr class="table__row">
    <td class="table__data">1</td>
    <td class="table__data">test</td>
    <td class="table__data">200</td>
  </tr>`
  );
});

test('check creating empty row when no scores', () => {
  const tableBody = document.querySelector('#tableBody')!;
  tableBody.tableEmpty();
  expect(tableBody.tableEmpty()).toMatch(`
  <tr class="table__row">
    <td class="table__data table__data--wide">
      no scores
    </td>
  </tr>
`
  );
});

test('putting rows to the table', () => {
  const tableBody = document.querySelector('#tableBody')!;
  const scores = [1, 'test', 200];
  tableBody.setup(scores);
  expect(tableBody).toMatch(`
  <tr class="table__row">
    <td class="table__data">1</td>
    <td class="table__data">test</td>
    <td class="table__data">200</td>
  </tr>`
  );
});

test('putting rows to the table when no scores', () => {
  const tableBody = document.querySelector('#tableBody')!;
  const scores = [''];
  tableBody.setup(scores);
  expect(tableBody).toMatch(`
  <tr class="table__row">
    <td class="table__data table__data--wide">
      no scores
    </td>
  </tr>
`
  );
});

test('sorting points', () => {
  expect(toBe).toMatch();
});