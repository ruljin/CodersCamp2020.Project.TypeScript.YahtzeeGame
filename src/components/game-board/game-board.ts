import './game-board.scss';
import * as BoardImage from '../../assets/table-classic.png';
import WebComponent from '../../common/WebComponent';
import Label from '../label/label';
import { fabric } from 'fabric';

enum DiceStyle {
  NEW,
  OLD
}

class GameBoardComponent implements WebComponent {
  private boardEl: Element;
  private diceCanvas: HTMLCanvasElement;
  private labelPlayer: Element;
  private boardDisabledCover: Element;
  private heldDiceNumbers: number[] = [];
  private canvas: fabric.Canvas;
  remainingRolls: number;
  currentPlayerIndex: number;
  playerDices: number[];

  constructor(buttonRollAgainEvent: EventListener, buttonFinishRoundEvent: EventListener) {
    this.remainingRolls = 3;
    this.currentPlayerIndex = 0;
    this.playerDices = [];

    const boardEl = document.createElement('div');
    boardEl.classList.add('board');
    boardEl.style.backgroundImage = `url('${BoardImage}')`;

    this.labelPlayer = new Label('None plays!', 15).render();
    this.labelPlayer.classList.add('board__player');
    boardEl.appendChild(this.labelPlayer);

    this.diceCanvas = document.createElement('canvas');
    boardEl.appendChild(this.diceCanvas);
    this.canvas = new fabric.Canvas(this.diceCanvas);
    this.canvas.setDimensions({ width: 300, height: 300 });

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('board__buttons');
    boardEl.appendChild(buttonWrapper);

    const buttonRollAgain = document.createElement('button');
    buttonRollAgain.classList.add('button');
    buttonRollAgain.setAttribute('id', 'buttonRollAgain');
    buttonRollAgain.innerHTML = 'roll again';
    buttonWrapper.appendChild(buttonRollAgain);
    buttonRollAgain.addEventListener('click', buttonRollAgainEvent);

    const buttonFinishRound = document.createElement('button');
    buttonFinishRound.classList.add('button');
    buttonFinishRound.setAttribute('id', 'buttonFinishRound');
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

  clearCanvas(): void {
    this.canvas.clear();
  }

  decreaseRemainingRolls(): void {
    this.remainingRolls--;
  }

  reSetRemainingRolls(): void {
    this.remainingRolls = 3;
  }

  roll(): number[] {
    const randomNumbers: number[] = [];
    this.clearCanvas();

    for (let i = 0; i < (5 - this.heldDiceNumbers.length); i++) {
      randomNumbers.push(Math.floor(Math.random() * 6) + 1);
    }

    randomNumbers.forEach((number) => this.drawDice(number, DiceStyle.NEW));
    this.heldDiceNumbers.forEach((number) => this.drawDice(number, DiceStyle.OLD));

    this.decreaseRemainingRolls();
    this.playerDices = randomNumbers.concat(this.getHeldDiceNumbers());
    if (this.remainingRolls == 0) this.pause();
    return randomNumbers;
  }

  private drawDice(number: number, style: DiceStyle): void {
    const x = Math.floor(Math.random() * 270);
    const y = Math.floor(Math.random() * 270);

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
    const dice = new fabric.Rect({
      top: x, left: y, width: 30, height: 30, fill: `${style === DiceStyle.NEW ? '#C4C4C4' : '#B88D8D'}`
    });

    const dot1 = new fabric.Circle({
      top: x + 11, left: y + 11, radius: 4, fill: 'black'
    });

    const group = new fabric.Group([dice, dot1]);

    group.hasControls = group.hasBorders = false;
    group.on('mousedown', () => {
      if (dice.fill === '#C4C4C4') {
        this.heldDiceNumbers.push(1);
      } else {
        this.heldDiceNumbers.splice(this.heldDiceNumbers.indexOf(1), 1);
      }

      dice.set('fill', dice.fill === '#C4C4C4' ? '#B88D8D' : '#C4C4C4');

      this.canvas.remove(group);
      this.canvas.add(group);
    });

    this.canvas.add(group);
  }

  private draw2Dice(x: number, y: number, style: DiceStyle): void {
    const dice = new fabric.Rect({
      top: x, left: y, width: 30, height: 30, fill: `${style === DiceStyle.NEW ? '#C4C4C4' : '#B88D8D'}`
    });

    const dot1 = new fabric.Circle({
      top: x + 5, left: y + 5, radius: 4, fill: 'black'
    });

    const dot2 = new fabric.Circle({
      top: x + 17, left: y + 17, radius: 4, fill: 'black'
    });

    const group = new fabric.Group([dice, dot1, dot2]);

    group.hasControls = group.hasBorders = false;
    group.on('mousedown', () => {
      if (dice.fill === '#C4C4C4') {
        this.heldDiceNumbers.push(2);
      } else {
        this.heldDiceNumbers.splice(this.heldDiceNumbers.indexOf(2), 1);
      }

      dice.set('fill', dice.fill === '#C4C4C4' ? '#B88D8D' : '#C4C4C4');

      this.canvas.remove(group);
      this.canvas.add(group);
    });

    this.canvas.add(group);
  }

  private draw3Dice(x: number, y: number, style: DiceStyle): void {
    const dice = new fabric.Rect({
      top: x, left: y, width: 30, height: 30, fill: `${style === DiceStyle.NEW ? '#C4C4C4' : '#B88D8D'}`
    });

    const dot1 = new fabric.Circle({
      top: x + 3, left: y + 3, radius: 4, fill: 'black'
    });

    const dot2 = new fabric.Circle({
      top: x + 11, left: y + 11, radius: 4, fill: 'black'
    });

    const dot3 = new fabric.Circle({
      top: x + 19, left: y + 19, radius: 4, fill: 'black'
    });

    const group = new fabric.Group([ dice, dot1, dot2, dot3 ]);

    group.hasControls = group.hasBorders = false;
    group.on('mousedown', () => {
      if (dice.fill === '#C4C4C4') {
        this.heldDiceNumbers.push(3);
      } else {
        this.heldDiceNumbers.splice(this.heldDiceNumbers.indexOf(3), 1);
      }

      dice.set('fill', dice.fill === '#C4C4C4' ? '#B88D8D' : '#C4C4C4');

      this.canvas.remove(group);
      this.canvas.add(group);
    });

    this.canvas.add(group);
  }

  private draw4Dice(x: number, y: number, style: DiceStyle): void {
    const dice = new fabric.Rect({
      top: x, left: y, width: 30, height: 30, fill: `${style === DiceStyle.NEW ? '#C4C4C4' : '#B88D8D'}`
    });

    const dot1 = new fabric.Circle({
      top: x + 3, left: y + 3, radius: 4, fill: 'black'
    });

    const dot2 = new fabric.Circle({
      top: x + 3, left: y + 19, radius: 4, fill: 'black'
    });

    const dot3 = new fabric.Circle({
      top: x + 19, left: y + 3, radius: 4, fill: 'black'
    });

    const dot4 = new fabric.Circle({
      top: x + 19, left: y + 19, radius: 4, fill: 'black'
    });

    const group = new fabric.Group([ dice, dot1, dot2, dot3, dot4 ]);

    group.hasControls = group.hasBorders = false;
    group.on('mousedown', () => {
      if (dice.fill === '#C4C4C4') {
        this.heldDiceNumbers.push(4);
      } else {
        this.heldDiceNumbers.splice(this.heldDiceNumbers.indexOf(4), 1);
      }

      dice.set('fill', dice.fill === '#C4C4C4' ? '#B88D8D' : '#C4C4C4');

      this.canvas.remove(group);
      this.canvas.add(group);
    });

    this.canvas.add(group);
  }

  private draw5Dice(x: number, y: number, style: DiceStyle): void {
    const dice = new fabric.Rect({
      top: x, left: y, width: 30, height: 30, fill: `${style === DiceStyle.NEW ? '#C4C4C4' : '#B88D8D'}`
    });

    const dot1 = new fabric.Circle({
      top: x + 3, left: y + 3, radius: 4, fill: 'black'
    });

    const dot2 = new fabric.Circle({
      top: x + 3, left: y + 19, radius: 4, fill: 'black'
    });

    const dot3 = new fabric.Circle({
      top: x + 19, left: y + 3, radius: 4, fill: 'black'
    });

    const dot4 = new fabric.Circle({
      top: x + 19, left: y + 19, radius: 4, fill: 'black'
    });

    const dot5 = new fabric.Circle({
      top: x + 11, left: y + 11, radius: 4, fill: 'black'
    });

    const group = new fabric.Group([ dice, dot1, dot2, dot3, dot4, dot5 ]);

    group.hasControls = group.hasBorders = false;
    group.on('mousedown', () => {
      if (dice.fill === '#C4C4C4') {
        this.heldDiceNumbers.push(5);
      } else {
        this.heldDiceNumbers.splice(this.heldDiceNumbers.indexOf(5), 1);
      }

      dice.set('fill', dice.fill === '#C4C4C4' ? '#B88D8D' : '#C4C4C4');

      this.canvas.remove(group);
      this.canvas.add(group);
    });

    this.canvas.add(group);
  }

  private draw6Dice(x: number, y: number, style: DiceStyle): void {
    const dice = new fabric.Rect({
      top: x, left: y, width: 30, height: 30, fill: `${style === DiceStyle.NEW ? '#C4C4C4' : '#B88D8D'}`
    });

    const dot1 = new fabric.Circle({
      top: x + 2, left: y + 2, radius: 4, fill: 'black'
    });

    const dot2 = new fabric.Circle({
      top: x + 11, left: y + 2, radius: 4, fill: 'black'
    });

    const dot3 = new fabric.Circle({
      top: x + 20, left: y + 2, radius: 4, fill: 'black'
    });

    const dot4 = new fabric.Circle({
      top: x + 2, left: y + 20, radius: 4, fill: 'black'
    });

    const dot5 = new fabric.Circle({
      top: x + 11, left: y + 20, radius: 4, fill: 'black'
    });

    const dot6 = new fabric.Circle({
      top: x + 20, left: y + 20, radius: 4, fill: 'black'
    });

    const group = new fabric.Group([ dice, dot1, dot2, dot3, dot4, dot5, dot6 ]);

    group.hasControls = group.hasBorders = false;
    group.on('mousedown', () => {
      if (dice.fill === '#C4C4C4') {
        this.heldDiceNumbers.push(6);
      } else {
        this.heldDiceNumbers.splice(this.heldDiceNumbers.indexOf(6), 1);
      }

      dice.set('fill', dice.fill === '#C4C4C4' ? '#B88D8D' : '#C4C4C4');

      this.canvas.remove(group);
      this.canvas.add(group);
    });

    this.canvas.add(group);
  }

  hold(heldDiceNumbers: number[]): void {
    this.heldDiceNumbers = heldDiceNumbers;
  }

  pause(): void {
    if (this.playerDices.length == 0) return;
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

  getHeldDiceNumbers(): number[] {
    return this.heldDiceNumbers;
  }

  setup(): void {
    const buttonRollAgain = document.querySelector('#buttonRollAgain');
    const buttonFinishRound = document.querySelector('#buttonFinishRound');

    buttonRollAgain?.addEventListener('click', () => this.roll());
    buttonFinishRound?.addEventListener('click', () => this.pause());
  }
}

export default GameBoardComponent;
