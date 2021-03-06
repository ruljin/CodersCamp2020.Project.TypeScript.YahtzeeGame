import './game-board.scss';
import * as ClassicBoard from '../../assets/table-classic.png';
import * as DragonBoard from '../../assets/table-dragon.png';
import * as PiratBoard from '../../assets/table-pirat.png';
import WebComponent from '../../common/WebComponent';
import Label from '../label/label';
import { fabric } from 'fabric';
import ls from '../../local-storage/localstorage';

interface Settings {
  players: string[],
  style: string
}

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
    this.manageTableBackground(boardEl);

    const width = window.innerWidth;
    if (width <= 576) {
      this.labelPlayer = new Label('None plays!', 40).render();
      this.labelPlayer.classList.add('board__player');
      boardEl.appendChild(this.labelPlayer);
    } else if (width > 576 && width <= 768) {
      this.labelPlayer = new Label('None plays!', 40).render();
      this.labelPlayer.classList.add('board__player');
      boardEl.appendChild(this.labelPlayer);
    } else {
      this.labelPlayer = new Label('None plays!', 15).render();
      this.labelPlayer.classList.add('board__player');
      boardEl.appendChild(this.labelPlayer);
    }

    if (width <= 576) {
      this.diceCanvas = document.createElement('canvas');
      boardEl.appendChild(this.diceCanvas);
      this.canvas = new fabric.Canvas(this.diceCanvas);
      this.canvas.setDimensions({ width: 250, height: 200 });
    } else if (width > 576 && width <= 768) {
      this.diceCanvas = document.createElement('canvas');
      boardEl.appendChild(this.diceCanvas);
      this.canvas = new fabric.Canvas(this.diceCanvas);
      this.canvas.setDimensions({ width: 400, height: 360 });
    } else if (width > 769 && width <= 992) {
      this.diceCanvas = document.createElement('canvas');
      boardEl.appendChild(this.diceCanvas);
      this.canvas = new fabric.Canvas(this.diceCanvas);
      this.canvas.setDimensions({ width: 300, height: 220 });
    } else if (width > 993 && width <= 1200) {
      this.diceCanvas = document.createElement('canvas');
      boardEl.appendChild(this.diceCanvas);
      this.canvas = new fabric.Canvas(this.diceCanvas);
      this.canvas.setDimensions({ width: 300, height: 220 });
    } else {
      this.diceCanvas = document.createElement('canvas');
      boardEl.appendChild(this.diceCanvas);
      this.canvas = new fabric.Canvas(this.diceCanvas);
      this.canvas.setDimensions({ width: 300, height: 300 });
    }

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('board__buttons');
    boardEl.appendChild(buttonWrapper);

    const buttonRollAgain = document.createElement('button');
    buttonRollAgain.classList.add('button-game');
    buttonRollAgain.setAttribute('id', 'buttonRollAgain');
    buttonRollAgain.innerHTML = 'Roll';
    buttonWrapper.appendChild(buttonRollAgain);
    buttonRollAgain.addEventListener('click', buttonRollAgainEvent);

    const buttonFinishRound = document.createElement('button');
    buttonFinishRound.classList.add('button-game');
    buttonFinishRound.setAttribute('id', 'buttonFinishRound');
    buttonFinishRound.innerHTML = 'Finish Round';
    buttonWrapper.appendChild(buttonFinishRound);
    buttonFinishRound.addEventListener('click', buttonFinishRoundEvent);

    this.boardDisabledCover = document.createElement('div');
    this.boardDisabledCover.classList.add('board__pause-cover');
    this.boardDisabledCover.classList.add('board__pause-cover--hidden');
    boardEl.appendChild(this.boardDisabledCover);

    if (width <= 576) {
      const labelPause = new Label('choose category', 40).render();
      this.boardDisabledCover.appendChild(labelPause);
    } else if (width > 576 && width <= 768) {
      const labelPause = new Label('choose category', 40).render();
      this.boardDisabledCover.appendChild(labelPause);
    } else if (width > 769 && width <= 992) {
      const labelPause = new Label('choose category', 20).render();
      this.boardDisabledCover.appendChild(labelPause);
    } else if (width > 993 && width <= 1200) {
      const labelPause = new Label('choose category', 20).render();
      this.boardDisabledCover.appendChild(labelPause);
    } else {
      const labelPause = new Label('choose category', 20).render();
      this.boardDisabledCover.appendChild(labelPause);
    }

    this.boardEl = boardEl;
  }

  private manageTableBackground(board: HTMLElement): void {

    const settings: Settings = ls.getSettingsFromLocalStorage()!;
    try {
      switch (settings.style) {
      case 'classic game': {
        board.style.backgroundImage = `url('${ClassicBoard}')`;
        break;
      }

      case 'play with pirates': {
        board.style.backgroundImage = `url('${PiratBoard}')`;
        break;
      }

      case 'beat the dragon': {
        board.style.backgroundImage = `url('${DragonBoard}')`;
        break;
      }

      default : {
        board.style.backgroundImage = `url('${ClassicBoard}')`;
      }
      }
    } catch (error) {
      board.style.backgroundImage = `url('${ClassicBoard}')`;
    }

  }

  changeLabel(text: string): void {
    const boardPaused = document.querySelector('.board__pause-cover')!;
    boardPaused.querySelector('.label')!.innerHTML = text;
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
    if (this.remainingRolls < 3) document.querySelector('#buttonRollAgain')!.innerHTML = 'Roll Again';
    return randomNumbers;
  }

  private drawDice(number: number, style: DiceStyle): void {
    const width = window.innerWidth;
    if (width <= 576) {
      const x = Math.floor(Math.random() * 170);
      const y = Math.floor(Math.random() * 220);
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
    } else if (width > 576 && width <= 768) {
      const x = Math.floor(Math.random() * 330);
      const y = Math.floor(Math.random() * 370);
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
    } else if (width > 769 && width <= 992) {
      const x = Math.floor(Math.random() * 190);
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
    } else if (width > 993 && width <= 1200) {
      const x = Math.floor(Math.random() * 190);
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
    } else {
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

  pause(forcePause = false): void {
    if (this.playerDices.length == 0 && forcePause == false) return;
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
    document.querySelector('#buttonRollAgain')!.innerHTML = 'Roll';
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
