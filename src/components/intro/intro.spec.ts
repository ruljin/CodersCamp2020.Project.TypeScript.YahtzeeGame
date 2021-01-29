import IntroComponent from './intro';
import { createElementFromString } from '../../common/WebComponent';


test('Check rendering intro text', () => {
  const intro = createElementFromString(`<section>
        <div class="container">
        Yahtzee is a dice game based on Poker.<br>
        You can choose to play against computer or with your friends.<br>
        Check game rules and set your settings before the game.<br>
        Your best scores will be saved.<br>
        Enjoy playing Yahtzee!
        </div>
      </section>`);

  const introComponent = new IntroComponent();

  expect(introComponent.render()).toStrictEqual(intro);
});