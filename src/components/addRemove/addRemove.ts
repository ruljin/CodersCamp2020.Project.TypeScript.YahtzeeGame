import './addRemove.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class AddElement implements WebComponent {
    private add: HTMLElement = document.createElement('null');

    render(): Element {
      this.add = createElementFromString(`
            <button class="add-sub">+</button>`) as HTMLElement;
      return this.add as Element;

    }
    setup(): void {
      return;
    }
}

class RemoveElement implements WebComponent {
  private remove: HTMLElement = document.createElement('null');

  render(): Element {
    this.remove = createElementFromString(`
          <button class="add-sub">-</button>`) as HTMLElement;
    return this.remove as Element;

  }
  setup(): void {
    return;
  }
}

export default AddElement;
export { RemoveElement };