import './selector.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class SelectorComponent implements WebComponent {
  private selector: HTMLElement = document.createElement('null');

  constructor(private list: string[], private width: number) { }

  render(): Element {
    this.selector = createElementFromString(`
       <select class="select">
       </select>`) as HTMLElement;
    this.selector.style.width = `${this.width}vw`;
    const arr = this.list;
    for (let i = 0; i <= arr.length - 1; i++) {
      const option = document.createElement('option'),
        txt = document.createTextNode(arr[i]);
      option.appendChild(txt);
      option.setAttribute('value', arr[i]);
      this.selector.insertBefore(option, this.selector.lastChild);
    }
    return this.selector as Element;
  }

  setup(): void {
    return;
  }
}

export default SelectorComponent;