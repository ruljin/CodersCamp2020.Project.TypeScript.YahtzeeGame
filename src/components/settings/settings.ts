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
    this.blocked();
  }

  private layout(): HTMLElement {

    const settings = document.createElement('section');
    settings.setAttribute('class', 'settings');

    const names = document.createElement('section');
    names.setAttribute('class', 'settings__names');

    const width = window.innerWidth;
    if (width <= 576) {
      names.appendChild(new LabelComponent('Players', 40).render());
      names.appendChild(new AddRemoveElement('+', '-').render());

      const players = document.createElement('div');
      players.setAttribute('class', 'players');
      players.appendChild(new LabelComponent('Player 1', 38.5, false).render());
      const list = ['computer/easy', 'computer/medium', 'computer/hard', 'player'];
      players.appendChild(new SelectorComponent(list, 38.5).render());
      names.appendChild(players);

      settings.appendChild(names);

      const styles = document.createElement('section');
      styles.setAttribute('class', 'settings__styles');
      styles.appendChild(new LabelComponent('Styles', 40).render());
      const listOfStyles = ['classic game', 'play with pirates', 'beat the dragon'];
      styles.appendChild(new SelectorComponent(listOfStyles, 80).render());

      settings.appendChild(styles);
      settings.appendChild(new ReferenceComponent('game', 'Play!').render());
    } else if (width > 576 && width <= 768) {
      names.appendChild(new LabelComponent('Players', 40).render());
      names.appendChild(new AddRemoveElement('+', '-').render());

      const players = document.createElement('div');
      players.setAttribute('class', 'players');
      players.appendChild(new LabelComponent('Player 1', 38.5, false).render());
      const list = ['computer/easy', 'computer/medium', 'computer/hard', 'player'];
      players.appendChild(new SelectorComponent(list, 38.5).render());
      names.appendChild(players);

      settings.appendChild(names);

      const styles = document.createElement('section');
      styles.setAttribute('class', 'settings__styles');
      styles.appendChild(new LabelComponent('Styles', 40).render());
      const listOfStyles = ['classic game', 'play with pirates', 'beat the dragon'];
      styles.appendChild(new SelectorComponent(listOfStyles, 80).render());

      settings.appendChild(styles);
      settings.appendChild(new ReferenceComponent('game', 'Play!').render());
    } else {
      names.appendChild(new LabelComponent('Players', 15).render());

      const players = document.createElement('div');
      players.setAttribute('class', 'players');
      players.appendChild(new LabelComponent('Player 1', 22, false).render());
      const list = ['computer/easy', 'computer/medium', 'computer/hard', 'player'];
      players.appendChild(new SelectorComponent(list, 22).render());
      names.appendChild(players);

      names.appendChild(new AddRemoveElement('+', '-').render());
      settings.appendChild(names);

      const styles = document.createElement('section');
      styles.setAttribute('class', 'settings__styles');
      styles.appendChild(new LabelComponent('Styles', 15).render());
      const listOfStyles = ['classic game', 'play with pirates', 'beat the dragon'];
      styles.appendChild(new SelectorComponent(listOfStyles, 45).render());

      settings.appendChild(styles);
      settings.appendChild(new ReferenceComponent('game', 'Play!').render());
    }
    return settings;
  }

  private add(): void {
    const players = document.querySelector('.players')!;
    const add = document.querySelector('.switch--add') as HTMLElement;
    add.addEventListener(('click'), (): void => {
      if (players.children.length < 4) {
        const list = ['computer/easy', 'computer/medium', 'computer/hard', 'player'];
        const width = window.innerWidth;
        if (width <= 600) {
          players.appendChild(new SelectorComponent(list, 38.5).render());
        } else if (width > 600 && width <= 992) {
          players.appendChild(new SelectorComponent(list, 22).render());
        } else {
          players.appendChild(new SelectorComponent(list, 22).render());
        }
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
          const width = window.innerWidth;
          if (width <= 600) {
            const newlabel = new LabelComponent(`Player ${value}`, 38.5, false).render();
            select.replaceWith(newlabel);
          } else if (width > 600 && width <= 992) {
            const newlabel = new LabelComponent(`Player ${value}`, 22, false).render();
            select.replaceWith(newlabel);
          } else {
            const newlabel = new LabelComponent(`Player ${value}`, 22, false).render();
            select.replaceWith(newlabel);
          }
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

  private blocked(): void {
    const link = document.querySelector('.button')! as HTMLElement;
    link.addEventListener('mouseover', () => {
      const input = (<NodeListOf<HTMLSelectElement>>document.querySelectorAll('.players .label'));
      const players = document.querySelector('.players')!;
      for (const one of input) {
        if (one.value === '' || players.children.length === 1) {
          link.removeAttribute('href');
          link.style.cursor = 'pointer';
          link.addEventListener('mouseleave', () => link.setAttribute('href', '#/game'));
        }
      }
    });
  }
}

export default SettingsComponent;