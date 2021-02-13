import './game.scss';
import GameBoardComponent from '../game-board/game-board';
import LogoComponent from '../logo/logo';
import ScoreTableComponent from '../score-table-during-game/score-table-during-game';
import WebComponent, {createElementFromElements} from '../../common/WebComponent';


interface GameHistory {
  playerName: string,
  points: number,
  chooseCategory: string,
  roundNumber: number
}

class GameComponent implements WebComponent  {
  gameBoard: GameBoardComponent;
  scoreTable: ScoreTableComponent;
  playersName: string[];
  gameHistory: GameHistory[];
  currentRoundNumber: number;

  constructor(playersName: string[]) {
    this.gameBoard = new GameBoardComponent(() => null, () => null);
    this.scoreTable = new ScoreTableComponent(playersName);
    this.playersName = playersName;
    this.gameHistory = [];
    this.currentRoundNumber = 0;
  }

  render(): Element {
    const container = document.createElement('div');
    container.append(new LogoComponent().render());
    container.append(createElementFromElements('game-container', this.gameBoard.render(), this.scoreTable.render()));
    return container;
  }

  setup(): void {
    this.gameBoard.setup();
    this.scoreTable.setup();
  }

  newGame(): void {
    this.gameBoard.changePlayer(this.playersName[0]);
    this.checkPlayerFinish();
  }

  checkPlayerFinish(): void {
    this.checkPlayerFinishRound().then(() => {
      this.savePlayerScores();
    });
  }

  savePlayerScores(): void {
    const playerName = this.scoreTable.points[this.gameBoard.currentPlayerIndex].name;
    const playerColumn = document.getElementById(`${playerName}Column`)!;
    const playerScoreFields = playerColumn.querySelectorAll('.score-table__player-field');
    this.highlightFields(playerScoreFields);
  }

  highlightFields(fields: NodeListOf<Element>): void {
    const isFieldAvailable: boolean[] = this.checkAvailableFields(fields);
    fields.forEach((field, index) => {
      if (isFieldAvailable[index]) {
        field.classList.add('score-table__player-field--active');
        field.addEventListener('click', () => this.chooseScores(index, fields, false), false);
      } else if (!field.classList.contains('score-table__player-field--filled') && !field.classList.contains('score-table__player-field--blue')) {
        field.addEventListener('click', () => this.chooseScores(index, fields, true), false);
      }
    });
  }

  checkAvailableFields(fields: NodeListOf<Element>): boolean[] {
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
          if (playerDicesSorted[0] == playerDicesSorted[1] + 1 && playerDicesSorted[1] == playerDicesSorted[2] + 1 &&
              playerDicesSorted[2] == playerDicesSorted[3] + 1) {
            isAvailable.push(true);
          } else if (playerDicesSorted[1] == playerDicesSorted[2] + 1 && playerDicesSorted[2] == playerDicesSorted[3] + 1 &&
            playerDicesSorted[3] == playerDicesSorted[4] + 1) {
            isAvailable.push(true);
          } else {
            isAvailable.push(false);
          }
          break;
        }

        case 12: {
          const playerDicesSorted = playerDices.sort();
          if (playerDicesSorted[0] == playerDicesSorted[1] + 1 && playerDicesSorted[1] == playerDicesSorted[2] + 1 &&
              playerDicesSorted[2] == playerDicesSorted[3] + 1 && playerDicesSorted[3] == playerDicesSorted[4] + 1) {
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

  chooseScores(index: number, fields: NodeListOf<Element>, zeroPoints: boolean): void {
    const playerDices = this.gameBoard.playerDices;
    let score = 0;
    let category = '';

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
      if (zeroPoints == false) score = playerDices.reduce((a, b ) => a + b, 0);
      category = 'threeOfKind';
      this.scoreTable.points[this.gameBoard.currentPlayerIndex].threeOfKind = score;
      break;
    }

    case 9: {
      if (zeroPoints == false) score = playerDices.reduce((a, b ) => a + b, 0);
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
      if (zeroPoints == false) score = playerDices.reduce((a, b ) => a + b, 0);
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
      if (i == index) field.classList.add('score-table__player-field--filled');
    });

    this.removeEventListeners();

    this.gameHistory.push({
      playerName: this.playersName[this.gameBoard.currentPlayerIndex],
      points: score,
      chooseCategory: category,
      roundNumber: this.currentRoundNumber
    });

    if (!this.checkFinish()) {
      this.gameBoard.resume();
      this.gameBoard.clearCanvas();
      this.gameBoard.reSetRemainingRolls();
      this.gameBoard.playerDices = [];
      this.checkSubTotal(this.gameBoard.currentPlayerIndex);

      if (this.gameBoard.currentPlayerIndex < this.playersName.length-1) {
        this.gameBoard.currentPlayerIndex++;
        this.currentRoundNumber++;
      } else {
        this.gameBoard.currentPlayerIndex = 0;
      }
      this.gameBoard.changePlayer(this.playersName[this.gameBoard.currentPlayerIndex]);
      this.checkPlayerFinish();
    } else {
      this.fillTotalPoints();
    }
  }

  fillTotalPoints(): void {
    let index = 0;
    for (const scores of this.scoreTable.points) {
      const playerName = this.scoreTable.points[index].name;
      const playerColumn = document.getElementById(`${playerName}Column`)!;
      const sumOfScores = scores.subtotal! + scores.threeOfKind! + scores.fourOfKind! + scores.fullHouse! + scores.smStraight! + scores.lgStraight! + scores.yahtzee! + scores.chance!;
      const playerTotalRow = playerColumn.querySelectorAll('.score-table__player-field--blue')[3];

      playerTotalRow.innerHTML = sumOfScores.toString();
      this.scoreTable.points[index].total = sumOfScores;
      index++;
    }
  }

  checkSubTotal(playerIndex: number): void {
    const playerScores = this.scoreTable.points[playerIndex];
    let sumOfScores = 0;
    if (playerScores.ones == null) return;
    if (playerScores.twos == null) return;
    if (playerScores.threes == null) return;
    if (playerScores.fours == null) return;
    if (playerScores.fives == null) return;
    if (playerScores.sixes == null) return;

    sumOfScores += playerScores.ones + playerScores.ones + playerScores.twos + playerScores.threes + playerScores.fours + playerScores.fives + playerScores.sixes;

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

  removeEventListeners(): void {
    const playerName = this.scoreTable.points[this.gameBoard.currentPlayerIndex].name;
    const playerColumn = document.getElementById(`${playerName}Column`)!;
    const playerScoreFields = playerColumn.querySelectorAll('.score-table__player-field');

    playerScoreFields.forEach((_, index) => {
      const oldField = playerColumn.querySelectorAll('.score-table__player-field')[index];
      const newField = oldField.cloneNode(true);
      oldField.parentNode?.replaceChild(newField, oldField);
    });
  }

  checkFinish(): boolean {
    console.log(this.currentRoundNumber);
    if (this.currentRoundNumber == 12 && this.gameBoard.currentPlayerIndex == this.playersName.length-1) return true;
    return false;
  }

  checkPlayerFinishRound = async (): Promise<void> => {
    const rollButton = document.querySelector('#buttonRollAgain');
    const finishRoundButton = document.querySelector('#buttonFinishRound');

    return new Promise<void>((resolve) => {
      rollButton!.addEventListener('click', () => {
        if (this.gameBoard.remainingRolls == 0) resolve();
      });
      finishRoundButton!.addEventListener('click', () => {
        if (this.gameBoard.playerDices.length != 0) resolve();
      });
    });
  }
}

export default GameComponent;