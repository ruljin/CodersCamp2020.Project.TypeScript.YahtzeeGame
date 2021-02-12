import './settings.scss';
import WebComponent from '../../common/WebComponent';
import LabelComponent from '../label/label';
import SelectorComponent from '../selector/selector';
import AddRemoveElement from '../add-remove/add-remove';
import ReferenceComponent from '../reference/reference';

class SettingsComponent implements WebComponent {
  render(): Element {
    return this.layout();
  }

  setup(): void {
    this.add();
    this.change();
    this.remove();
    this.walidate();
  }

  private layout(): HTMLElement {
    const settings = document.createElement('section');
    settings.setAttribute('class', 'settings');

    const names = document.createElement('section');
    names.setAttribute('class', 'settings__names');
    names.appendChild(new LabelComponent('names', 15).render());

    const players = document.createElement('div');
    players.setAttribute('class', 'players');

    const div1 = document.createElement('div');
    div1.setAttribute('class', 'players__option');
    div1.appendChild(new LabelComponent('Player 1', 20, false).render());
    const error1 = document.createElement('div');
    error1.setAttribute('class', 'error');
    div1.appendChild(error1);
    players.appendChild(div1);

    const div2 = document.createElement('div');
    div2.setAttribute('class', 'players__option');
    const list = ['computer/easy', 'computer/medium', 'computer/hard', 'player'];
    div2.appendChild(new SelectorComponent(list, 20).render());
    const error2 = document.createElement('div');
    error2.setAttribute('class', 'error');
    div2.appendChild(error2);
    players.appendChild(div2);
    names.appendChild(players);

    names.appendChild(new AddRemoveElement('+', '-').render());
    settings.appendChild(names);

    const styles = document.createElement('section');
    styles.setAttribute('class', 'settings__styles');
    styles.appendChild(new LabelComponent('styles', 15).render());
    const listOfStyles = ['classic game', 'play with pirates', 'beat the dragon'];
    styles.appendChild(new SelectorComponent(listOfStyles, 45).render());

    settings.appendChild(styles);
    settings.appendChild(new ReferenceComponent('game', 'play!').render());

    return settings;
  }

  private add(): void {
    const players = document.querySelector('.players')!;
    const add = document.querySelector('.switch--add') as HTMLElement;
    add.addEventListener(('click'), (): void => {
      if (players.children.length < 4) {
        const list = ['computer/easy', 'computer/medium', 'computer/hard', 'player'];
        const div = document.createElement('div');
        div.setAttribute('class', 'players__option');
        div.appendChild(new SelectorComponent(list, 20).render());
        const error = document.createElement('div');
        error.setAttribute('class', 'error');
        div.appendChild(error);
        players.appendChild(div);
      }
      this.change();

      const error = document.querySelector('.error')!;
      if (error.textContent === 'You can\'t play alone.') {
        error.innerHTML = '';
      }
    });
  }

  private change(): void {
    const players = [...document.querySelector('.players')!.children];
    const selectWrapper = (<NodeListOf<HTMLSelectElement>>document.querySelectorAll('.select'));
    for (const select of selectWrapper) {
      select.addEventListener('change', (): void => {
        const option = (select.options[select.selectedIndex].value);
        if (option === 'player') {
          const value = players.indexOf((select.parentElement)!) + 1;
          const newlabel = new LabelComponent(`Player ${value}`, 20, false).render();
          select.replaceWith(newlabel);
          this.walidate();
        }
      });
    }
  }

  private remove(): void {
    const players = document.querySelector('.players')!;
    const remove = document.querySelector('.switch--remove') as HTMLElement;
    remove.addEventListener(('click'), (): void => {
      if ((players.children[1].firstChild!).nodeName === 'SELECT') {
        if (players.children.length > 2) {
          const last = players.lastElementChild!;
          players.removeChild(last);
        }
      } else {
        const last = players.lastElementChild!;
        players.removeChild(last);
      }
    });
  }

  private walidate(): void {
    const inputs = document.querySelectorAll('input');

    for (const input of inputs) {
      input.addEventListener('click', () => {
        input.style.border = '3px solid rgb(255, 0, 0)';
        input.addEventListener('input', () => {
          if (input.validity.valueMissing) {
            input.setCustomValidity('You need to enter a player name.');
            input.reportValidity();
            input.style.border = '3px solid rgb(255, 0, 0)';
          } else if (input.validity.patternMismatch) {
            input.setCustomValidity('Don\'t use special characters.');
            input.reportValidity();
            input.style.border = '3px solid rgb(255, 0, 0)';
          } else {
            input.setCustomValidity('');
            input.reportValidity();
            this.hideError(input);
          }
        });
      });
    }

    const link = document.querySelector('.button')! as Element;
    link.addEventListener('click', (e): void => {
      const inputs = document.querySelectorAll('input');
      for (const input of inputs) {
        if (!input.checkValidity()) {
          e.preventDefault();
          this.showError(input);
        } else if ((document.querySelector('.players')!.children.length === 1)) {
          e.preventDefault();
          document.querySelector('.error')!.textContent = 'You can\'t play alone.';
        }
      }
    });
  }

  private showError(input: HTMLInputElement): void {
    const error = input.nextElementSibling!;
    if (input.validity.valueMissing) {
      error.textContent = 'You need to enter a player name.';
    } else if (input.validity.patternMismatch) {
      error.textContent = 'Don\'t use special characters.';
    }
    input.style.border = '3px solid rgb(255, 0, 0)';
  }

  private hideError(input: HTMLInputElement): void {
    const error = input.nextElementSibling!;
    error.innerHTML = '';
    input.style.border = '3px solid rgb(255, 255, 255)';
  }
}

export default SettingsComponent;