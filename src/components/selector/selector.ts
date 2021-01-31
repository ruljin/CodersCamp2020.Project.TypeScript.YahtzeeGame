import './selector.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class SelectorComponent implements WebComponent {
    private dropdownMenu: HTMLSelectElement;
    private options: HTMLOptionsCollection;

    render(): Element {
      return createElementFromString(
        `<div class="selector"> 
          <select class="sel">
            <option selected="selected" disabled hidden>Select oponent: </option>
            <option value="0">computer/easy</option>
            <option value="1">computer/medium</option>
            <option value="2">computer/hard</option>
            <option value="3">player</option>
          </select>
        </div>`);
    }
    constructor(dropdown: HTMLSelectElement) {
      this.dropdownMenu = dropdown;
      this.options = dropdown.options;
    }

    onChange(): void {
      document.location.href = this.options[this.options.selectedIndex].value;
    }
    setup(): void {
      const select1: HTMLSelectElement = document.getElementById('select')! as HTMLSelectElement;
      const ddm1: SelectorComponent = new SelectorComponent(select1);
      select1.onchange = () => {
        ddm1.onChange();
      };
    }
}

export default SelectorComponent;