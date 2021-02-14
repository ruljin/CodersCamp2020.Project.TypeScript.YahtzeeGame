import './scores.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

interface Scores {
  nickname: string,
  points: number
}

class ScoresComponent implements WebComponent {
  scores: Scores[]
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('') || '[]');
  }

  render(): Element {
    return createElementFromString(`<section class="container-scores">
      <h1 class="scores">Best Yahtzee players</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">place</th>
            <th scope="col">name</th>
            <th scope="col">points</th>
          </tr>
        </thead>
        <tbody id="tableBody">
        </tbody>
      </table>
    </section>`
    );
  }

  setup(): void {
    const tableBody = document.querySelector('#tableBody')!;
    if (this.scores.length == 0) {
      tableBody.innerHTML = this.tableEmpty();
    } else {
      this.scores = this.sortRows(this.scores);
      for (let i = 0; i < this.scores.length; i++) {
        tableBody.innerHTML +=
          this.createTR(i + 1, this.scores[i].nickname, this.scores[i].points);
      }
    }
  }

  public createTR = (place: number, nickname: string, points: number): string => {
    return `
    <tr class="table__row">
      <td class="table__data">${place}</td>
      <td class="table__data">${nickname}</td>
      <td class="table__data">${points}</td>
    </tr>`;
  }

  public tableEmpty = (): string => {
    return `
    <tr class="table__row">
      <td class="table__data"></td>
      <td class="table__data">no scores yet</td>
      <td class="table__data"></td>
    </tr>`;
  }

  public sortRows(scores: Scores[]): Scores[] {
    for (let i = 0; i < scores.length; i++) {
      for (let j = 0; j < scores.length - (i + 1); j++) {
        if (scores[j].points < scores[j + 1].points) {
          const a = scores[j];
          scores[j] = scores[j + 1];
          scores[j + 1] = a;
        }
      }
    }
    return scores;
  }
}

export default ScoresComponent;
