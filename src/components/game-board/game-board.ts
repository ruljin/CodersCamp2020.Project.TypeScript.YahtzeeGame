import './game-board.scss';
import * as BoardImage from '../../assets/table-classic.png';
import WebComponent from '../../common/WebComponent';
import Label from '../label/label';

class GameBoardComponent implements WebComponent {
  private boardEl: Element;
  private labelPlayer: Element;
  private boardDisabledCover: Element;

  constructor(buttonRollAgainEvent: EventListener, buttonFinishRoundEvent: EventListener) {
    const boardEl = document.createElement('div');
    boardEl.classList.add('board');
    boardEl.style.backgroundImage = `url('${BoardImage}')`;

    this.labelPlayer = new Label('None plays!', 15).render();
    this.labelPlayer.classList.add('board__player');
    boardEl.appendChild(this.labelPlayer);

    const diceCanvas = document.createElement('canvas');
    diceCanvas.classList.add('board__dice-canvas');
    boardEl.appendChild(diceCanvas);

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

  reroll(): number[] {
    throw new Error('Method not implemented.');
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
