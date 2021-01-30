import DiceBackground, { DiceTypes } from './dice-background';
import * as Dice from '../../assets/dice.png';
import * as DiceAlt from '../../assets/dice-alternative.png';
import * as DiceMob from '../../assets/dice-mobile.png';
import * as DiceMobAlt from '../../assets/dice-mobile-alternative.png';
import { createElementFromString } from '../../common/WebComponent';

test('test rendering default dice', () => {
  const diceBackground = new DiceBackground(DiceTypes.BG);

  expect(diceBackground.render())
    .toStrictEqual(createElementFromString(`<img src="${Dice}" alt="Background image of dice">`));
});

test('test rendering alternative dice', () => {
  const diceBackground = new DiceBackground(DiceTypes.BG_ALT);

  expect(diceBackground.render())
    .toStrictEqual(createElementFromString(`<img src="${DiceAlt}" alt="Background image of dice">`));
});

test('test rendering mobile dice', () => {
  const diceBackground = new DiceBackground(DiceTypes.BG_MOB);

  expect(diceBackground.render())
    .toStrictEqual(createElementFromString(`<img src="${DiceMob}" alt="Background image of dice">`));
});

test('test rendering alternative mobile dice', () => {
  const diceBackground = new DiceBackground(DiceTypes.BG_MOB_ALT);

  expect(diceBackground.render())
    .toStrictEqual(createElementFromString(`<img src="${DiceMobAlt}" alt="Background image of dice">`));
});
