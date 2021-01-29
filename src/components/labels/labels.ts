import './labels.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';

class LabelsComponent implements WebComponent {
  private componentElement: string = '';

  render(): Element {
    return createElementFromString(`<div class="labels">${this.componentElement}</div>`);
  }

  setup(): void {
    return;
  }

  settingsPlayers(): string {
    this.componentElement = 'players';
    return this.componentElement;
  }

  settingsStyle(): string {
    this.componentElement = '<p class="labels__settings-style">style</p>';
    return this.componentElement;
  }

  boardWhoPlays(name: string): string {
    this.componentElement = `${name} plays!`;
    return this.componentElement;
  }

  boardChooseCategory(): string {
    this.componentElement = 'choose category';
    return this.componentElement;
  }
}

export default LabelsComponent;