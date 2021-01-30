import './selector.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class SelectorComponent implements WebComponent {
  dropdownMenu: HTMLSelectElement;
  options: HTMLOptionsCollection;

  constructor(dropdown: HTMLSelectElement) {
    this.dropdownMenu = dropdown;
    this.options = dropdown.options;
  }

  render(): Element {
    return createElementFromString(
      `<div class="selector">
        <select>
          <option selected disabled hidden>Select oponent: </option>
          <option value="0">computer/easy</option>
          <option value="1">computer/medium</option>
          <option value="2">computer/hard</option>
          <option value="3">player</option>
        </select>
      </div>`);
  }

  setup(): void {
    return;
  }

  onChange(): void {
    document.location.href = this.options[this.options.selectedIndex].value;
  }

  onLoad(): void {
    const select1: HTMLSelectElement = document.getElementById('select')! as HTMLSelectElement;
    const ddm1: SelectorComponent = new SelectorComponent(select1);

    select1.onchange = () => {
      ddm1.onChange();
    };
  }
}

export default SelectorComponent;
