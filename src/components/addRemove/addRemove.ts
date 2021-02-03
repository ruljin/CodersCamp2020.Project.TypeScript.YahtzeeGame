import './addRemove.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class AddSubtract implements WebComponent {
    private addSub: HTMLElement = document.createElement('null');

    constructor(private check: boolean) { }

    render(): Element {
      if (this.check) {
        this.addSub = createElementFromString(`
            <button class="add-sub">+</button>`) as HTMLElement;
      } else {
        this.addSub = createElementFromString(`
            <button class="add-sub">-</button>`) as HTMLElement;
      }
      return this.addSub as Element;

    }
    setup(): void {
      return;
    }
}

export default AddSubtract;