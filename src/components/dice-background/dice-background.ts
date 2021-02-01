import './dice-background.scss';
import * as Dice from '../../assets/dice.png';
import * as DiceAlt from '../../assets/dice-alternative.png';
import * as DiceMob from '../../assets/dice-mobile.png';
import * as DiceMobAlt from '../../assets/dice-mobile-alternative.png';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

enum DiceTypes {
  BG,
  BG_ALT,
  BG_MOB,
  BG_MOB_ALT
}

const DiceTypesDictionary = {
  Dice,
  DiceAlt,
  DiceMob,
  DiceMobAlt
};

const DiceStylesDictionary = {
  DiceStyle: 'background-dice--default',
  DiceAltStyle: 'background-dice--alt',
  DiceMobStyle: 'background-dice--mob',
  DiceMobAltStyle: 'background-dice--mob-alt'
};

class DiceBackgroundComponent implements WebComponent {
  constructor(private type: DiceTypes) { }

  render(): Element {
    const src = Object.values(DiceTypesDictionary)[this.type];
    const style = Object.values(DiceStylesDictionary)[this.type];
    return createElementFromString(`<img src="${src}" class="background-dice ${style}" alt="Background image of dice">`);
  }

  setup(): void {
    return;
  }
}

export default DiceBackgroundComponent;
export { DiceTypes };
