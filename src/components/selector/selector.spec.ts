import SelectorComponent from './selector';
import { createElementFromString } from '../../common/WebComponent';

test('component rendering test', () => {
  const dropDown: HTMLSelectElement = document.createElement('select');
  const selector = createElementFromString(
    `<div class ="selector"> 
          <select>
            <option selected="selected" disabled hidden>Select oponent: </option>
            <option value="0">computer/easy</option>
            <option value="1">computer/medium</option>
            <option value="2">computer/hard</option>
            <option value="3">player</option>
          </select>
        </div>`);

  const selectorComp = new SelectorComponent(dropDown);

  expect(selectorComp.render()).toStrictEqual(selector);
});