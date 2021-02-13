import './settings.scss';
import WebComponent from '../../common/WebComponent';
import LabelComponent from '../label/label';
import SelectorComponent from '../selector/selector';
import AddRemoveElement from '../add-remove/add-remove';
import ReferenceComponent from '../reference/reference';
import saveSettings from '../../local-storage/localstorage';

class SettingsComponent implements WebComponent {
  playButton = document.querySelector('.button') as HTMLElement;
  render(): Element {
    return this.layout();
  }

  setup(): void {
    this.add();
    this.change();
    this.remove();
    this.saveAndPlay();
  }

  private layout(): HTMLElement {
    const settings = document.createElement('section');
    settings.setAttribute('class', 'settings');

    const names = document.createElement('section');
    names.setAttribute('class', 'names');
    names.appendChild(new LabelComponent('names', 15, true).render());

    const players = document.createElement('div');
    players.setAttribute('class', 'players');
    players.appendChild(new LabelComponent('Player 1', 20, false).render());
    const list = ['computer/easy', 'computer/medium', 'computer/hard', 'player'];
    players.appendChild(new SelectorComponent(list, 20).render());
    names.appendChild(players);

    names.appendChild(new AddRemoveElement('+', '-').render());
    settings.appendChild(names);

    const styles = document.createElement('section');
    styles.setAttribute('class', 'styles');
    styles.appendChild(new LabelComponent('styles', 15, true).render());
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
        players.appendChild(new SelectorComponent(list, 20).render());
      }
      this.change();
    });
  }

  private change(): void {
    const players = [...document.querySelector('.players')!.children];
    const selectWrapper = (<NodeListOf<HTMLSelectElement>>document.querySelectorAll('.select'));
    for (const select of selectWrapper) {
      select.addEventListener('change', (): void => {
        const option = (select.options[select.selectedIndex].value);
        if (option === 'player') {
          const value = players.indexOf(select) + 1;
          const newlabel = new LabelComponent(`Player ${value}`, 20, false).render();
          select.replaceWith(newlabel);
        }
      });
    }
  }

  private remove(): void {
    const players = document.querySelector('.players')!;
    const remove = document.querySelector('.switch--remove') as HTMLElement;
    remove.addEventListener(('click'), (): void => {
      if (players.children[1].nodeName === 'SELECT') {
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

  private saveAndPlay(): void {
    const playBtn = document.querySelector('.button')!;
    playBtn.addEventListener('click', this.saveSettingsInLocalStorage);
  }

  private saveSettingsInLocalStorage(): void {
    const players: string[] = [];
    const playersDiv = [...document.querySelector('.players')!.children];
    for (const children of playersDiv) {
      const child = children.textContent()!;
      players.push(child);
    }

    let style = '';
    const styleWrapper = (<NodeListOf<HTMLSelectElement>>document.querySelectorAll('.select'));
    for (const select of styleWrapper) {
      const option = (select.options[select.selectedIndex].value);
      style = option;
    }
    saveSettings(players, style);
  }
}

export default SettingsComponent;