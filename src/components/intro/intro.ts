import './intro.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';


class IntroComponent implements WebComponent {
  render(): Element {
    return createElementFromString(`<section>
        <div class="container">
        Yahtzee is a dice game based on Poker.<br>
        You can choose to play against computer or with your friends.<br>
        Check game rules and set your settings before the game.<br>
        Your best scores will be saved.<br>
        Enjoy playing Yahtzee!
        </div>
      </section>`);
  }

  setup(): void {
    return;
  }
}

export default IntroComponent;