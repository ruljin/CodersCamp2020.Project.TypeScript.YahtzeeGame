import './game-board.scss';
import * as BoardImage from '../../assets/table-classic.png';
import WebComponent from '../../common/WebComponent';
import Label from '../label/label';

enum DiceStyle {
  NEW,
  OLD
}

class GameBoardComponent implements WebComponent {
  private boardEl: Element;
  private context: CanvasRenderingContext2D;
  private diceCanvas: HTMLCanvasElement;
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
    (this.diceCanvas as HTMLCanvasElement).width = (this.diceCanvas as HTMLCanvasElement).height;
    this.context = (this.diceCanvas as HTMLCanvasElement).getContext('2d')!;
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
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

    randomNumbers.forEach((number) => this.drawDice(number, DiceStyle.NEW));
    this.heldDiceNumbers.forEach((number) => this.drawDice(number, DiceStyle.OLD));

    return randomNumbers;
  }

  private drawDice(number: number, style: DiceStyle): void {
    const x = Math.floor(Math.random() * 110) + 10;
    const y = Math.floor(Math.random() * 110) + 10;

    switch (number) {
    case 1:
      this.draw1Dice(x, y, style);
      break;
    case 2:
      this.draw2Dice(x, y, style);
      break;
    case 3:
      this.draw3Dice(x, y, style);
      break;
    case 4:
      this.draw4Dice(x, y, style);
      break;
    case 5:
      this.draw5Dice(x, y, style);
      break;
    case 6:
      this.draw6Dice(x, y, style);
      break;
    }
  }

  private draw1Dice(x: number, y: number, style: DiceStyle): void {
    this.context.beginPath();
    this.context.fillStyle = style === DiceStyle.NEW ? 'lightgrey' : '#B88D8D';
    this.context.fillRect(x, y, 20, 20);
    this.context.beginPath();
    this.context.fillStyle = 'black';
    this.context.arc(x + 10, y + 10, 2, 0, 2 * Math.PI);
    this.context.fill();
  }

  private draw2Dice(x: number, y: number, style: DiceStyle): void {
    this.context.beginPath();
    this.context.fillStyle = style === DiceStyle.NEW ? 'lightgrey' : '#B88D8D';
    this.context.fillRect(x, y, 20, 20);
    this.context.beginPath();
    this.context.fillStyle = 'black';
    this.context.arc(x + 5, y + 5, 2, 0, 2 * Math.PI);
    this.context.arc(x + 15, y + 15, 2, 0, 2 * Math.PI);
    this.context.fill();
  }

  private draw3Dice(x: number, y: number, style: DiceStyle): void {
    this.context.beginPath();
    this.context.fillStyle = style === DiceStyle.NEW ? 'lightgrey' : '#B88D8D';
    this.context.fillRect(x, y, 20, 20);
    this.context.beginPath();
    this.context.fillStyle = 'black';
    this.context.arc(x + 5, y + 5, 2, 0, 2 * Math.PI);
    this.context.arc(x + 10, y + 10, 2, 0, 2 * Math.PI);
    this.context.arc(x + 15, y + 15, 2, 0, 2 * Math.PI);
    this.context.fill();
  }

  private draw4Dice(x: number, y: number, style: DiceStyle): void {
    this.context.beginPath();
    this.context.fillStyle = style === DiceStyle.NEW ? 'lightgrey' : '#B88D8D';
    this.context.fillRect(x, y, 20, 20);
    this.context.beginPath();
    this.context.fillStyle = 'black';
    this.context.arc(x + 5, y + 5, 2, 0, 2 * Math.PI);
    this.context.arc(x + 15, y + 15, 2, 0, 2 * Math.PI);
    this.context.fill();
    this.context.beginPath();
    this.context.arc(x + 15, y + 5, 2, 0, 2 * Math.PI);
    this.context.arc(x + 5, y + 15, 2, 0, 2 * Math.PI);
    this.context.fill();
  }

  private draw5Dice(x: number, y: number, style: DiceStyle): void {
    this.context.beginPath();
    this.context.fillStyle = style === DiceStyle.NEW ? 'lightgrey' : '#B88D8D';
    this.context.fillRect(x, y, 20, 20);
    this.context.beginPath();
    this.context.fillStyle = 'black';
    this.context.arc(x + 5, y + 5, 2, 0, 2 * Math.PI);
    this.context.arc(x + 10, y + 10, 2, 0, 2 * Math.PI);
    this.context.arc(x + 15, y + 15, 2, 0, 2 * Math.PI);
    this.context.fill();
    this.context.beginPath();
    this.context.arc(x + 15, y + 5, 2, 0, 2 * Math.PI);
    this.context.arc(x + 5, y + 15, 2, 0, 2 * Math.PI);
    this.context.fill();
  }

  private draw6Dice(x: number, y: number, style: DiceStyle): void {
    this.context.beginPath();
    this.context.fillStyle = style === DiceStyle.NEW ? 'lightgrey' : '#B88D8D';
    this.context.fillRect(x, y, 20, 20);
    this.context.beginPath();
    this.context.fillStyle = 'black';
    this.context.arc(x + 5, y + 5, 2, 0, 2 * Math.PI);
    this.context.arc(x + 5, y + 10, 2, 0, 2 * Math.PI);
    this.context.arc(x + 5, y + 15, 2, 0, 2 * Math.PI);
    this.context.fill();
    this.context.beginPath();
    this.context.arc(x + 15, y + 5, 2, 0, 2 * Math.PI);
    this.context.arc(x + 15, y + 10, 2, 0, 2 * Math.PI);
    this.context.arc(x + 15, y + 15, 2, 0, 2 * Math.PI);
    this.context.fill();
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
