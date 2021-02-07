import './add-remove.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class AddRemoveElement implements WebComponent {
  constructor(private add: string, private remove: string) { }

  render(): Element {
    return createElementFromString(`
    <div class="switch-wrapper">
      <button class="switch switch--add">${this.add}</button>
      <button class="switch switch--remove">${this.remove}</button>
    </div>`);
  }

  setup(): void {
    return;
  }
}

export default AddRemoveElement;