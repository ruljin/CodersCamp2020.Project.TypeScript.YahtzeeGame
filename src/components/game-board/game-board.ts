import './game-board.scss';
import * as BoardImage from '../../assets/table-classic.png';
import WebComponent from '../../common/WebComponent';
import Label from '../label/label';

class GameBoardComponent implements WebComponent {
  private boardEl: Element;
  private diceCanvas: Element;
  private labelPlayer: Element;
  private boardDisabledCover: Element;
  private heldDiceNumbers: number[] = [];

  constructor(buttonRollAgainEvent: EventListener, buttonFinishRoundEvent: EventListener) {
    const boardEl = document.createElement('div');
    boardEl.classList.add('board');
    boardEl.style.backgroundImage = `url('${BoardImage}')`;

    this.labelPlayer = new Label('None plays!', 15).render();
    this.labelPlayer.classList.add('board__player');
    boardEl.appendChild(this.labelPlayer);

    this.diceCanvas = document.createElement('canvas');
    this.diceCanvas.classList.add('board__dice-canvas');
    boardEl.appendChild(this.diceCanvas);

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('board__buttons');
    boardEl.appendChild(buttonWrapper);

    const buttonRollAgain = document.createElement('button');
    buttonRollAgain.classList.add('button');
    buttonRollAgain.innerHTML = 'roll again';
    buttonWrapper.appendChild(buttonRollAgain);
    buttonRollAgain.addEventListener('click', buttonRollAgainEvent);

    const buttonFinishRound = document.createElement('button');
    buttonFinishRound.classList.add('button');
    buttonFinishRound.innerHTML = 'finish round';
    buttonWrapper.appendChild(buttonFinishRound);
    buttonFinishRound.addEventListener('click', buttonFinishRoundEvent);

    this.boardDisabledCover = document.createElement('div');
    this.boardDisabledCover.classList.add('board__pause-cover');
    this.boardDisabledCover.classList.add('board__pause-cover--hidden');
    boardEl.appendChild(this.boardDisabledCover);

    const labelPause = new Label('choose category', 10).render();
    this.boardDisabledCover.appendChild(labelPause);

    this.boardEl = boardEl;
  }

  roll(): number[] {
    const randomNumbers: number[] = [];

    for (let i = 0; i < (5 - this.heldDiceNumbers.length); i++) {
      randomNumbers.push(Math.floor(Math.random() * 5) + 1);
    }

    randomNumbers.forEach((number) => this.drawNewDice(number));
    this.heldDiceNumbers.forEach((number) => this.drawHeldDice(number));

    return randomNumbers;
  }

  private drawNewDice(number: number): void {
    return;
  }

  private drawHeldDice(number: number): void {
    return;
  }

  hold(heldDiceNumbers: number[]): void {
    this.heldDiceNumbers = heldDiceNumbers;
  }

  pause(): void {
    this.boardDisabledCover.classList.remove('board__pause-cover--hidden');
  }

  resume(): void {
    this.boardDisabledCover.classList.add('board__pause-cover--hidden');
  }

  render(): Element {
    return this.boardEl;
  }

  changePlayer(name: string): void {
    this.labelPlayer.innerHTML = `${name} plays!`;
  }

  setup(): void {
    return;
  }
}

export default GameBoardComponent;
