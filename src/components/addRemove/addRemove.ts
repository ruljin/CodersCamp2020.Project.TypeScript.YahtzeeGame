import './addRemove.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';
import LabelComponent from '../../components/label/label';
import SelectorComponent from '../../components/selector/selector';

class AddElement implements WebComponent {
  constructor(private add: string, private remove: string) { }

  render(): Element {
    return createElementFromString(`
    <div class="container">
      <button class="button button--add">${this.add}</button>
      <button class="button button--remove">${this.remove}</button>
    </div>
      `);
  }

  setup(): void {
    return;
  }

  layout(name: string, list: string[], width: number): HTMLElement {
    const section = document.createElement('section');
    section.setAttribute('class', 'settings');
    section.appendChild(new LabelComponent(name, width, false).render());
    section.appendChild(new SelectorComponent(list, width).render());
    return section;
  }

  adding(list: string[], width: number): HTMLElement {
    const section = document.querySelector('section')!;
    const add = document.querySelector('.button--add') as HTMLElement;
    add.addEventListener(('click'), () => {
      if (section.children.length < 4) {
        section.appendChild(new SelectorComponent(list, width).render());
      }
    });
    return section;
  }

  removing(): HTMLElement {
    const section = document.querySelector('section')!;
    const remove = document.querySelector('.button--remove') as HTMLElement;
    remove.addEventListener(('click'), () => {
      if (section.children.length > 1) {
        const last = section.lastElementChild!;
        section.removeChild(last);
      }
    });
    return section;
  }

}

export default AddElement;