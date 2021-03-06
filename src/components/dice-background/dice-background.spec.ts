import DiceBackground, { DiceTypes } from './dice-background';
import * as Dice from '../../assets/dice.png';
import * as DiceAlt from '../../assets/dice-alternative.png';
import * as DiceMob from '../../assets/dice-mobile.png';
import * as DiceMobAlt from '../../assets/dice-mobile-alternative.png';
import { createElementFromString } from '../../common/WebComponent';

test('test rendering default dice', () => {
  const diceBackground = new DiceBackground(DiceTypes.BG);

  expect(diceBackground.render())
    .toStrictEqual(createElementFromString(`<img src="${Dice}" class="background-dice background-dice--default" alt="Background image of dice">`));
});

test('test rendering alternative dice', () => {
  const diceBackground = new DiceBackground(DiceTypes.BG_ALT);

  expect(diceBackground.render())
    .toStrictEqual(createElementFromString(`<img src="${DiceAlt}" class="background-dice background-dice--alt" alt="Background image of dice">`));
});

test('test rendering mobile dice', () => {
  const diceBackground = new DiceBackground(DiceTypes.BG_MOB);

  expect(diceBackground.render())
    .toStrictEqual(createElementFromString(`<img src="${DiceMob}" class="background-dice background-dice--mob" alt="Background image of dice">`));
});

test('test rendering alternative mobile dice', () => {
  const diceBackground = new DiceBackground(DiceTypes.BG_MOB_ALT);

  expect(diceBackground.render())
    .toStrictEqual(createElementFromString(`<img src="${DiceMobAlt}" class="background-dice background-dice--mob-alt" alt="Background image of dice">`));
});
