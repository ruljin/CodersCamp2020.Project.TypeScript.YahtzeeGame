import './selector.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class SelectorComponent implements WebComponent {
    dropdownMenu: HTMLSelectElement;
    options: HTMLOptionsCollection;

    render(): Element {
        return createElementFromString(`<div class ="selector"> 
        <select>
        <option selected="selected" disabled hidden>Select oponent: </option>
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

    constructor(dropdown: HTMLSelectElement) {
        this.dropdownMenu = dropdown;
        this.options = dropdown.options;
        }

    onChange() {
        document.location.href = this.options[this.options.selectedIndex].value;
    }

    onLoad = () => {
        let select1: HTMLSelectElement = document.getElementById('select')! as HTMLSelectElement;
        let ddm1: SelectorComponent = new SelectorComponent(select1);
        select1.onchange = () => {
            ddm1.onChange(); 
        } 
    }
}

export default SelectorComponent;