import './scores.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';


class ScoresComponent implements WebComponent {
  render(): Element {
    return createElementFromString(
      `<section>
        <div class="container">
        <h1 class="scores">Best Yahtzee players</h1>
        <table class="table">
            <thead>
            <tr>
            <th scope="col">place</th>
            <th scope="col">name</th>
            <th scope="col">points</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1st</td>
                <td>Ania</td>
                <td>254</td>
            </tr>
            <tr>
            <td>2nd</td>
            <td>Bartek</td>
            <td>196</td>
            </tr>
            <tr>
            <td>3rd</td>
            <td>Ola</td>
            <td>184</td>
            </tr>
            </tbody>
        </table>
        </div>
    </section>`
    );
  }

  setup(): void {
    return;
  }
}

export default ScoresComponent;