import './game.scss';
import GameBoardComponent from '../game-board/game-board';
import LogoComponent from '../logo/logo';
import ScoreTableComponent from '../score-table-during-game/score-table-during-game';
import WebComponent, {createElementFromElements, createElementFromString} from '../../common/WebComponent';
import DiceBackgroundComponent, { DiceTypes } from '../dice-background/dice-background';

interface GameHistory {
  playerName: string,
  points: number,
  chooseCategory: string,
  roundNumber: number,
  isAnotherYahtzee: boolean
}

enum COMPUTER_DIFFICULTY {
  EASY,
  MEDIUM,
  HARD
}

class GameComponent implements WebComponent  {
  gameBoard: GameBoardComponent;
  scoreTable: ScoreTableComponent;
  playersName: string[];
  gameHistory: GameHistory[];
  currentRoundNumber: number;
  isGameFinished: boolean;

  constructor(playersName: string[]) {
    this.gameBoard = new GameBoardComponent(() => null, () => null);
    this.scoreTable = new ScoreTableComponent(playersName);
    this.playersName = playersName;
    this.gameHistory = [];
    this.currentRoundNumber = 0;
    this.isGameFinished = false;
  }

  render(): Element {
    const container = document.createElement('div');
    container.append(new LogoComponent().render());
    container.append(new DiceBackgroundComponent(DiceTypes.BG).render());
    container.append(createElementFromElements('game-container', this.gameBoard.render(), this.scoreTable.render()));
    container.append(new DiceBackgroundComponent(DiceTypes.BG_ALT).render());
    let buttonsContainer = '<div class="buttons-container"><button id="gameButtonLeave" class="button button-leave">Leave</button>';

    if (this.checkIfOnlyOnePlayerPlay()) {
      buttonsContainer += '<button id="gameButtonCancel" class="button button-cancel">Cancel Round</button></div>';
    } else {
      buttonsContainer += '</div>';
    }

    container.appendChild(createElementFromString(buttonsContainer));

    return container;
  }

  setup(): void {
    this.gameBoard.setup();
    this.scoreTable.setup();
    if (this.checkIfOnlyOnePlayerPlay()) {
      document.getElementById('gameButtonCancel')!.addEventListener('click', () => this.cancelRound(), false);
    }
  }

  newGame(): void {
    this.gameBoard.changePlayer(this.playersName[0]);
    this.checkPlayerFinish();
  }

  private leaveGame(): void {
    this.scoreTable.points[this.gameBoard.currentPlayerIndex].leave = true;
    const playerColumn = document.getElementById(`${this.playersName[this.gameBoard.currentPlayerIndex]}Column`)!;
    playerColumn.querySelector('.score-table__player-name')!.classList.add('score-table__player-name--inactive');
    if (this.checkIfOnlyComputerLeftInGame()) {
      this.gameBoard.changeLabel('All players has left');
      this.finishGame();
    }
    this.switchToNextPlayer();
  }

  private checkIfOnlyComputerLeftInGame(): boolean {
    const quantityOfComputerPlayers = this.playersName.filter((name, index) => this.isCurrentPlayerComputer(index)).length;
    let quantityOfPlayersLeave = 0;
    for (const player of this.scoreTable.points) {
      if (player.leave == true) quantityOfPlayersLeave++;
    }

    if (quantityOfComputerPlayers + quantityOfPlayersLeave == this.playersName.length) return true;
    return false;
  }

  private checkIfOnlyOnePlayerPlay(): boolean {
    let quantityOfComputerPlayers = 0;
    for (let i = 0; i < this.playersName.length; i++) {
      if (this.isCurrentPlayerComputer(i)) quantityOfComputerPlayers++;
    }

    return quantityOfComputerPlayers == this.playersName.length - 1;
  }

  private manageCancelRoundButton(forceClose = false): void {
    if (!this.checkIfOnlyOnePlayerPlay()) return;
    if (forceClose == false && !this.isCurrentPlayerComputer(this.gameBoard.currentPlayerIndex)) {
      document.getElementById('gameButtonCancel')!.addEventListener('click', () => this.cancelRound(), false);
    } else {
      const oldButton = document.getElementById('gameButtonCancel')!;
      const newButton = oldButton.cloneNode(true);
      oldButton?.parentNode?.replaceChild(newButton, oldButton);
    }
  }

  private resetLeaveGameButton(): void {
    const oldButton = document.getElementById('gameButtonLeave')!;
    const newButton = oldButton.cloneNode(true);
    oldButton?.parentNode?.replaceChild(newButton, oldButton);
  }

  private checkPlayerFinish(): void {
    this.manageCancelRoundButton();
    this.resetLeaveGameButton();

    this.checkPlayerFinishRound().then(() => {
      this.savePlayerScores();
    }).catch(() => {
      this.leaveGame();
      if (this.checkIfOnlyComputerLeftInGame()) this.finishGame();
    });

    if (this.isCurrentPlayerComputer(this.gameBoard.currentPlayerIndex)) {
      this.gameBoard.changeLabel(`Waiting for ${this.playersName[this.gameBoard.currentPlayerIndex]}`);
      this.gameBoard.pause(true);
      this.handleComputerRolls();
    }
  }

  private cancelRound() {
    if (this.currentRoundNumber === 0) return;

    for (let i = 1; i <= this.playersName.length; i++) {

      const playerIndex = this.playersName.length - i;
      const playerColumn = document.getElementById(`${this.playersName[playerIndex]}Column`)!;
      const category: string = this.gameHistory[this.gameHistory.length - 1].chooseCategory;

      switch (category) {
      case 'ones' : {
        this.scoreTable.points[playerIndex].ones = null;
        playerColumn.querySelectorAll('.score-table__player-field')[0]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[0]!.classList.remove('score-table__player-field--filled');
        this.deleteSubTotal(playerIndex);
        break;
      }

      case 'twos' : {
        this.scoreTable.points[playerIndex].twos = null;
        playerColumn.querySelectorAll('.score-table__player-field')[1]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[1]!.classList.remove('score-table__player-field--filled');
        this.deleteSubTotal(playerIndex);
        break;
      }

      case 'threes' : {
        this.scoreTable.points[playerIndex].threes = null;
        playerColumn.querySelectorAll('.score-table__player-field')[2]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[2]!.classList.remove('score-table__player-field--filled');
        this.deleteSubTotal(playerIndex);
        break;
      }

      case 'fours' : {
        this.scoreTable.points[playerIndex].fours = null;
        playerColumn.querySelectorAll('.score-table__player-field')[3]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[3]!.classList.remove('score-table__player-field--filled');
        this.deleteSubTotal(playerIndex);
        break;
      }

      case 'fives' : {
        this.scoreTable.points[playerIndex].fives = null;
        playerColumn.querySelectorAll('.score-table__player-field')[4]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[4]!.classList.remove('score-table__player-field--filled');
        this.deleteSubTotal(playerIndex);
        break;
      }

      case 'sixes' : {
        this.scoreTable.points[playerIndex].sixes = null;
        playerColumn.querySelectorAll('.score-table__player-field')[5]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[5]!.classList.remove('score-table__player-field--filled');
        this.deleteSubTotal(playerIndex);
        break;
      }

      case 'threeOfKind' : {
        this.scoreTable.points[playerIndex].threeOfKind = null;
        playerColumn.querySelectorAll('.score-table__player-field')[8]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[8]!.classList.remove('score-table__player-field--filled');
        break;
      }

      case 'fourOfKind' : {
        this.scoreTable.points[playerIndex].fourOfKind = null;
        playerColumn.querySelectorAll('.score-table__player-field')[9]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[9]!.classList.remove('score-table__player-field--filled');
        break;
      }

      case 'fullHouse' : {
        this.scoreTable.points[playerIndex].fullHouse = null;
        playerColumn.querySelectorAll('.score-table__player-field')[10]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[10]!.classList.remove('score-table__player-field--filled');
        break;
      }

      case 'smStraight' : {
        this.scoreTable.points[playerIndex].smStraight = null;
        playerColumn.querySelectorAll('.score-table__player-field')[11]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[11]!.classList.remove('score-table__player-field--filled');
        break;
      }

      case 'lgStraight' : {
        this.scoreTable.points[playerIndex].lgStraight = null;
        playerColumn.querySelectorAll('.score-table__player-field')[12]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[12]!.classList.remove('score-table__player-field--filled');
        break;
      }

      case 'yahtzee' : {
        this.scoreTable.points[playerIndex].yahtzee = null;
        playerColumn.querySelectorAll('.score-table__player-field')[13]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[13]!.classList.remove('score-table__player-field--filled');
        break;
      }

      case 'chance' : {
        this.scoreTable.points[playerIndex].chance = null;
        playerColumn.querySelectorAll('.score-table__player-field')[14]!.innerHTML = '';
        playerColumn.querySelectorAll('.score-table__player-field')[14]!.classList.remove('score-table__player-field--filled');
        break;
      }
      }

      if (this.gameHistory[this.gameHistory.length - 1].isAnotherYahtzee) {
        if (this.scoreTable.points[playerIndex].yahtzeeBonus! > 100) {
          this.scoreTable.points[playerIndex].yahtzeeBonus! -= 100;
          playerColumn.querySelectorAll('.score-table__player-field--blue')![2].innerHTML = this.scoreTable.points[playerIndex].yahtzeeBonus!.toString();
        }
      }

      this.gameHistory = this.gameHistory.splice(0, this.gameHistory.length - 1);
    }

    this.currentRoundNumber--;
  }

  private deleteSubTotal(playerIndex: number): void {
    if (this.scoreTable.points[playerIndex].subtotal == null) return;
    this.scoreTable.points[playerIndex].subtotal = null;
    this.scoreTable.points[playerIndex].bonus = null;
    const playerColumn = document.getElementById(`${this.playersName[playerIndex]}Column`)!;
    playerColumn.querySelectorAll('.score-table__player-field')[6].innerHTML = '';
    playerColumn.querySelectorAll('.score-table__player-field')[7].innerHTML = '';
  }

  private savePlayerScores(): void {
    const playerName = this.scoreTable.points[this.gameBoard.currentPlayerIndex].name;
    const playerColumn = document.getElementById(`${playerName}Column`)!;
    const playerScoreFields = playerColumn.querySelectorAll('.score-table__player-field');
    this.highlightFields(playerScoreFields);
  }

  private highlightFields(fields: NodeListOf<Element>): void {
    const isFieldAvailable: boolean[] = this.checkAvailableFields(fields);
    const otherFields: Element[] = [];
    const pointedFields: Element[] = [];
    this.manageCancelRoundButton(true);
    fields.forEach((field, index) => {
      if (isFieldAvailable[index]) {
        pointedFields.push(field);
        field.classList.add('score-table__player-field--active');
        field.addEventListener('click', () => this.chooseScores(index, fields, false), false);
      } else if (!field.classList.contains('score-table__player-field--filled') && !field.classList.contains('score-table__player-field--blue')) {
        otherFields.push(field);
        field.classList.add('score-table__player-field--red');
        field.addEventListener('click', () => this.chooseScores(index, fields, true), false);
      }
    });

    if (this.isCurrentPlayerComputer(this.gameBoard.currentPlayerIndex)) {
      this.handleComputerChoose(otherFields, pointedFields);
    }
  }

  private handleComputerChoose(otherFields: Element[], pointedFields: Element[]): void {
    const allFields = [...otherFields, ...pointedFields];
    if (this.checkComputerDifficulty() === COMPUTER_DIFFICULTY.EASY) {
      (allFields[Math.floor(Math.random() * allFields.length)] as HTMLButtonElement).click();
      return;
    } else if (this.checkComputerDifficulty() === COMPUTER_DIFFICULTY.MEDIUM) {
      if (pointedFields.length !== 0) {
        (pointedFields[Math.floor(Math.random() * pointedFields.length)] as HTMLButtonElement).click();
      } else {
        (otherFields[Math.floor(Math.random() * otherFields.length)] as HTMLButtonElement).click();
      }
      return;
    } else if (this.checkComputerDifficulty() === COMPUTER_DIFFICULTY.HARD) {
      const found = pointedFields.includes(allFields[13]) ? (allFields[13] as HTMLButtonElement).click() :
        pointedFields.includes(allFields[12]) ? (allFields[12] as HTMLButtonElement).click() :
          pointedFields.includes(allFields[11]) ? (allFields[11] as HTMLButtonElement).click() :
            pointedFields.includes(allFields[10]) ? (allFields[10] as HTMLButtonElement).click() :
              pointedFields.includes(allFields[9]) ? (allFields[9] as HTMLButtonElement).click() :
                pointedFields.includes(allFields[8]) ? (allFields[8] as HTMLButtonElement).click() : '';
      if (found !== '') return;

      const playerDices = this.gameBoard.playerDices;
      const points: number[] = [];

      pointedFields.includes(allFields[0]) ? points.push((playerDices.filter((dice) => dice == 1).length) * 1) : '';
      pointedFields.includes(allFields[1]) ? points.push((playerDices.filter((dice) => dice == 2).length) * 2) : '';
      pointedFields.includes(allFields[2]) ? points.push((playerDices.filter((dice) => dice == 3).length) * 3) : '';
      pointedFields.includes(allFields[3]) ? points.push((playerDices.filter((dice) => dice == 4).length) * 4) : '';
      pointedFields.includes(allFields[4]) ? points.push((playerDices.filter((dice) => dice == 5).length) * 5) : '';
      pointedFields.includes(allFields[5]) ? points.push((playerDices.filter((dice) => dice == 6).length) * 6) : '';

      if (points.length !== 0) {
        const maxPoints = Math.max(...points);
        (allFields[points.indexOf(maxPoints)] as HTMLButtonElement).click();
      } else {
        (otherFields[Math.floor(Math.random() * otherFields.length)] as HTMLButtonElement).click();
      }

      return;
    }
    throw new Error('Unexpected computer difficulty');
  }

  private async handleComputerRolls(): Promise<void> {
    const rollButton = document.querySelector('#buttonRollAgain') as HTMLButtonElement;
    const finishRoundButton = document.querySelector('#buttonFinishRound') as HTMLButtonElement;
    finishRoundButton.disabled = true;
    rollButton.disabled = true;
    const rerolls = Math.floor(Math.random() * 3 + 1);
    for (let i = 0; i < rerolls; i++) {
      await this.timeout(1500);
      this.computerClick(rollButton);
      if (i + 1 === rerolls && i !== 2) {
        await this.timeout(1500);
        this.gameBoard.changeLabel('choose category');
        this.computerClick(finishRoundButton);
      }
    }
    finishRoundButton.disabled = false;
    rollButton.disabled = false;
  }

  private timeout(ms: number): Promise<NodeJS.Timeout> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private computerClick(button: HTMLButtonElement): void {
    button.disabled = false;
    button.click();
    button.disabled = true;
  }

  private checkComputerDifficulty(): COMPUTER_DIFFICULTY {
    return COMPUTER_DIFFICULTY.HARD; // Later on remove this and make a proper rule using something to decide of computer's difficulty
  }

  private isCurrentPlayerComputer(index: number): boolean {
    if (this.playersName[index].toLowerCase().includes('computer')) return true;
    return false;
  }

  private checkAvailableFields(fields: NodeListOf<Element>): boolean[] {
    const isAvailable: boolean[] = [];

    fields.forEach((field, index) => {
      if (field.classList.contains('score-table__player-field--filled')) isAvailable.push(false);
      else if (field.classList.contains('score-table__player-field--blue')) isAvailable.push(false);
      else {
        const playerDices: number[] = this.gameBoard.playerDices;
        switch (index) {
        case 0: {
          playerDices.includes(1) ? isAvailable.push(true) : isAvailable.push(false);
          break;
        }

        case 1: {
          playerDices.includes(2) ? isAvailable.push(true) : isAvailable.push(false);
          break;
        }

        case 2: {
          playerDices.includes(3) ? isAvailable.push(true) : isAvailable.push(false);
          break;
        }

        case 3: {
          playerDices.includes(4) ? isAvailable.push(true) : isAvailable.push(false);
          break;
        }

        case 4: {
          playerDices.includes(5) ? isAvailable.push(true) : isAvailable.push(false);
          break;
        }

        case 5: {
          playerDices.includes(6) ? isAvailable.push(true) : isAvailable.push(false);
          break;
        }

        case 8: {
          new Set(playerDices).size <= 3 ? isAvailable.push(true) : isAvailable.push(false);
          break;
        }

        case 9: {
          if (new Set(playerDices).size > 2) isAvailable.push(false);
          else {
            const counter: number[] = [0, 0, 0, 0, 0, 0];
            playerDices.map((dice) => {
              counter[dice-1]++;
            });

            let isFourOfKind = false;
            counter.map((count) => {
              if (count == 4) isFourOfKind = true;
            });

            isFourOfKind ? isAvailable.push(true) : isAvailable.push(false);
          }
          break;
        }

        case 10: {
          const playerDicesSorted = playerDices.sort();
          if (playerDicesSorted[0] == playerDicesSorted[1] && playerDicesSorted[2] == playerDicesSorted[3] && playerDicesSorted[3] == playerDicesSorted[4]) {
            isAvailable.push(true);
          } else if (playerDicesSorted[0] == playerDicesSorted[1] && playerDicesSorted[1] == playerDicesSorted[2] && playerDicesSorted[3] == playerDicesSorted[4]) {
            isAvailable.push(true);
          } else {
            isAvailable.push(false);
          }
          break;
        }

        case 11: {
          const playerDicesSorted = playerDices.sort();
          if (playerDicesSorted[0] == playerDicesSorted[1] - 1 && playerDicesSorted[1] == playerDicesSorted[2] - 1 &&
              playerDicesSorted[2] == playerDicesSorted[3] - 1) {
            isAvailable.push(true);
          } else if (playerDicesSorted[1] == playerDicesSorted[2] - 1 && playerDicesSorted[2] == playerDicesSorted[3] - 1 &&
            playerDicesSorted[3] == playerDicesSorted[4] - 1) {
            isAvailable.push(true);
          } else {
            isAvailable.push(false);
          }
          break;
        }

        case 12: {
          const playerDicesSorted = playerDices.sort();
          if (playerDicesSorted[0] == playerDicesSorted[1] - 1 && playerDicesSorted[1] == playerDicesSorted[2] - 1 &&
              playerDicesSorted[2] == playerDicesSorted[3] - 1 && playerDicesSorted[3] == playerDicesSorted[4] - 1) {
            isAvailable.push(true);
          } else {
            isAvailable.push(false);
          }
          break;
        }

        case 13: {
          new Set(playerDices).size == 1 ? isAvailable.push(true) : isAvailable.push(false);
          break;
        }

        case 14: {
          isAvailable.push(true);
          break;
        }

        default: {
          break;
        }
        }
      }
    });

    return isAvailable;
  }

  private checkAnotherYahtzee(playerDices: number[]): boolean {
    if (this.scoreTable.points[this.gameBoard.currentPlayerIndex].yahtzee !== 50) return false;
    if (new Set(playerDices).size === 1) {
      let yahtzeeBonus = this.scoreTable.points[this.gameBoard.currentPlayerIndex].yahtzeeBonus;
      yahtzeeBonus ? yahtzeeBonus += 100 : yahtzeeBonus = 100;
      const playerColumn = document.getElementById(`${this.playersName[this.gameBoard.currentPlayerIndex]}Column`)!;
      const yahtzeeBonusElement = playerColumn.querySelectorAll('.score-table__player-field--blue')[2]!;
      yahtzeeBonusElement.innerHTML = yahtzeeBonus.toString();
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].yahtzeeBonus = yahtzeeBonus;
      return true;
    }

    return false;
  }

  private chooseScores(index: number, fields: NodeListOf<Element>, zeroPoints: boolean): void {
    const playerDices = this.gameBoard.playerDices;
    let score = 0;
    let category = '';

    const anotherYahtzee = this.checkAnotherYahtzee(playerDices);

    switch (index) {
    case 0: {
      if (zeroPoints == false) score = playerDices.filter((dice) => dice == 1).length;
      category = 'ones';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].ones = score;
      break;
    }

    case 1: {
      if (zeroPoints == false) score = (playerDices.filter((dice) => dice == 2).length) * 2;
      category = 'twos';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].twos = score;
      break;
    }

    case 2: {
      if (zeroPoints == false) score = (playerDices.filter((dice) => dice == 3).length) * 3;
      category = 'threes';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].threes = score;
      break;
    }

    case 3: {
      if (zeroPoints == false) score = (playerDices.filter((dice) => dice == 4).length) * 4;
      category = 'fours';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].fours = score;
      break;
    }

    case 4: {
      if (zeroPoints == false) score = (playerDices.filter((dice) => dice == 5).length) * 5;
      category = 'fives';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].fives = score;
      break;
    }

    case 5: {
      if (zeroPoints == false) score = (playerDices.filter((dice) => dice == 6).length) * 6;
      category = 'sixes';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].sixes = score;
      break;
    }

    case 8: {
      if (zeroPoints == false) score = playerDices.reduce((a, b) => a + b, 0);
      category = 'threeOfKind';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].threeOfKind = score;
      break;
    }

    case 9: {
      if (zeroPoints == false) score = playerDices.reduce((a, b) => a + b, 0);
      category = 'fourOfKind';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].fourOfKind = score;
      break;
    }

    case 10: {
      if (zeroPoints == false) score = 25;
      category = 'fullHouse';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].fullHouse = score;
      break;
    }

    case 11: {
      if (zeroPoints == false) score = 30;
      category = 'smStraight';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].smStraight = score;
      break;
    }

    case 12: {
      if (zeroPoints == false) score = 40;
      category = 'lgStraight';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].lgStraight = score;
      break;
    }

    case 13: {
      if (zeroPoints == false) score = 50;
      category = 'yahtzee';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].yahtzee = score;
      break;
    }

    case 14: {
      if (zeroPoints == false) score = playerDices.reduce((a, b) => a + b, 0);
      category = 'chance';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].chance = score;
      break;
    }

    default: {
      break;
    }
    }

    fields[index].innerHTML = score.toString();

    fields.forEach((field, i) => {
      field.classList.remove('score-table__player-field--active');
      field.classList.remove('score-table__player-field--red');
      if (i == index) field.classList.add('score-table__player-field--filled');
    });

    this.removeEventListeners();

    this.gameHistory.push({
      playerName: this.playersName[this.gameBoard.currentPlayerIndex],
      points: score,
      chooseCategory: category,
      roundNumber: this.currentRoundNumber,
      isAnotherYahtzee: anotherYahtzee
    });

    if (!this.checkFinish()) {
      this.switchToNextPlayer();
    } else {
      this.fillTotalPoints();
      this.finishGame();
    }
  }

  private finishGame(): void {
    this.isGameFinished = true;
    this.gameBoard.pause(true);
  }

  private switchToNextPlayer(): void {
    if (this.isGameFinished) return;
    this.gameBoard.clearCanvas();
    this.gameBoard.reSetRemainingRolls();
    this.gameBoard.playerDices = [];
    this.checkSubTotal(this.gameBoard.currentPlayerIndex);

    do {
      if (this.gameBoard.currentPlayerIndex < this.playersName.length - 1) {
        this.gameBoard.currentPlayerIndex++;
      } else {
        this.gameBoard.currentPlayerIndex = 0;
        this.currentRoundNumber++;
      }

      if (this.checkFinish()) {
        this.finishGame();
        break;
      }
    } while (this.scoreTable.points[this.gameBoard.currentPlayerIndex].leave == true);

    this.gameBoard.resume();
    this.gameBoard.changePlayer(this.playersName[this.gameBoard.currentPlayerIndex]);
    this.gameBoard.hold([]);
    this.checkPlayerFinish();
  }

  private fillTotalPoints(): void {
    let index = 0;
    for (const scores of this.scoreTable.points) {
      const playerName = this.scoreTable.points[index].name;
      const playerColumn = document.getElementById(`${playerName}Column`)!;
      const sumOfScores = scores.subtotal! + scores.threeOfKind! + scores.fourOfKind! + scores.fullHouse! + scores.smStraight! + scores.lgStraight! + scores.yahtzee! + scores.chance! + scores.yahtzeeBonus!;
      const playerTotalRow = playerColumn.querySelectorAll('.score-table__player-field--blue')[3];

      playerTotalRow.innerHTML = sumOfScores.toString();
      this.scoreTable.points[index].total = sumOfScores;
      index++;
    }
  }

  private checkSubTotal(playerIndex: number): void {
    const playerScores = this.scoreTable.points[playerIndex];
    let sumOfScores = 0;
    if (playerScores.ones == null) return;
    if (playerScores.twos == null) return;
    if (playerScores.threes == null) return;
    if (playerScores.fours == null) return;
    if (playerScores.fives == null) return;
    if (playerScores.sixes == null) return;

    sumOfScores += playerScores.ones + playerScores.twos + playerScores.threes + playerScores.fours + playerScores.fives + playerScores.sixes;

    const playerName = this.scoreTable.points[this.gameBoard.currentPlayerIndex].name;
    const playerColumn = document.getElementById(`${playerName}Column`)!;
    const playerSubTotalRow = playerColumn.querySelectorAll('.score-table__player-field--blue')[0];
    const playerBonusRow = playerColumn.querySelectorAll('.score-table__player-field--blue')[1];

    this.scoreTable.points[playerIndex].subtotal = sumOfScores;
    if (sumOfScores >= 63) {
      this.scoreTable.points[playerIndex].bonus = 35;
      playerBonusRow.innerHTML = '35';
    } else {
      this.scoreTable.points[playerIndex].bonus = 0;
      playerBonusRow.innerHTML = '0';
    }

    playerSubTotalRow.innerHTML = sumOfScores.toString();
  }

  private removeEventListeners(): void {
    const playerName = this.scoreTable.points[this.gameBoard.currentPlayerIndex].name;
    const playerColumn = document.getElementById(`${playerName}Column`)!;
    const playerScoreFields = playerColumn.querySelectorAll('.score-table__player-field');

    playerScoreFields.forEach((_, index) => {
      const oldField = playerColumn.querySelectorAll('.score-table__player-field')[index];
      const newField = oldField.cloneNode(true);
      oldField.parentNode?.replaceChild(newField, oldField);
    });
  }

  private checkFinish(): boolean {
    if (this.currentRoundNumber == 12 && this.gameBoard.currentPlayerIndex == this.playersName.length-1) return true;
    return false;
  }

  private checkPlayerFinishRound = async (): Promise<void> => {
    const rollButton = document.querySelector('#buttonRollAgain');
    const finishRoundButton = document.querySelector('#buttonFinishRound');
    const gameButtonLeave = document.querySelector('#gameButtonLeave');

    return new Promise<void>((resolve, reject) => {
      rollButton!.addEventListener('click', () => {
        if (this.gameBoard.remainingRolls == 0) resolve();
      });
      finishRoundButton!.addEventListener('click', () => {
        if (this.gameBoard.playerDices.length != 0) resolve();
      });
      if (!this.isCurrentPlayerComputer(this.gameBoard.currentPlayerIndex)) {
        gameButtonLeave!.addEventListener('click', () => {
          reject();
        });
      }
    });
  }
}

export default GameComponent;
