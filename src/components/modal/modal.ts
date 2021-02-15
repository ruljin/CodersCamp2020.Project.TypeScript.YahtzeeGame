import './modal.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';
import ReferenceComponent from '../reference/reference';
import LabelComponent from '../label/label';
import * as yahtzee from '../../assets/yahtzee.png';
import * as twos from '../../assets/twos.png';
import * as threes from '../../assets/threes.png';
import * as threeOfKind from '../../assets/threeOfKind.png';
import * as smStraight from '../../assets/smStraight.png';
import * as sixes from '../../assets/sixes.png';
import * as ones from '../../assets/ones.png';
import * as lgStraight from '../../assets/lgStraight.png';
import * as fullHouse from '../../assets/fullHouse.png';
import * as fours from '../../assets/fours.png';
import * as fourOfKind from '../../assets/fourOfKind.png';
import * as fives from '../../assets/fives.png';
import * as chance from '../../assets/chance.png';

interface Modal {
  subheader?: string;
  header: string;
  content: string;
  picture?: unknown;
  buttonClose?: { text: string, width: number };
  buttonLink?: { link: string, name: string };
  buttonNext?: { text: string, width: number };
}

class ModalComponent implements WebComponent {
  private modal: Element = document.createElement('null');

  constructor(private modalContent: Modal) {
  }

  render(): Element {
    this.modal = createElementFromString(`
      <section class="modal-wrap">
        <div class="modal">
          <div class="modal__header">${this.modalContent.header}</div>
          <div class="modal__body">${this.modalContent.content}</div>
          <div class="modal__buttons"></div>
        </div>
      </section>`);
    return this.modal;
  }

  setup(): void {
    if (this.modalContent.subheader) {
      this.addExtraProperty(this.modalContent.subheader);
    }
    if (this.modalContent.buttonClose) {
      this.addExtraProperty(this.modalContent.buttonClose);
    }
    if (this.modalContent.buttonLink) {
      this.addExtraProperty(this.modalContent.buttonLink);
    }
    if (this.modalContent.buttonNext) {
      this.addExtraProperty(this.modalContent.buttonNext);
    }
    document.querySelector('.modal__body')!.innerHTML = this.modalContent.content;
    document.querySelector('.modal__header')!.innerHTML = this.modalContent.header;
    this.addExtraProperty(this.modalContent.subheader);
    document.querySelector('.modal')!.addEventListener('click', this.modalClick);
    document.querySelector('.modal-wrap')!.addEventListener('click', this.closeModal);
    if (this.modalContent.picture) {
      const image = this.chooseImage(this.modalContent.picture);
      document.querySelector('.modal__image')!.setAttribute('src', `${image}`);
    }
    return;
  }

  private chooseImage(picture: unknown) {
    switch (picture) {
    case 'ones' : {
      return ones;
    }

    case 'twos' : {
      return twos;
    }

    case 'threes' : {
      return threes;
    }

    case 'fours' : {
      return fours;
    }

    case 'fives' : {
      return fives;
    }

    case 'sixes' : {
      return sixes;
    }

    case 'threeOfKind' : {
      return threeOfKind;
    }

    case 'fourOfKind' : {
      return fourOfKind;
    }

    case 'fullHouse' : {
      return fullHouse;
    }

    case 'smStraight' : {
      return smStraight;
    }

    case 'lgStraight' : {
      return lgStraight;
    }

    case 'yahtzee' : {
      return yahtzee;
    }

    case 'chance' : {
      return chance;
    }

    default : {
      return null;
    }
    }
  }

  private addExtraProperty(element: string | unknown) {
    if (element === this.modalContent.subheader) {
      if (document.querySelector('.modal__header--subheader')) {
        const child = document.querySelector('.modal__header--subheader')!;
        document.querySelector('.modal__header')!.removeChild(child);
      }
      document.querySelector('.modal__header')!.appendChild(createElementFromString(`<p class="modal__header--subheader">${this.modalContent.subheader}</p>`));
    } else if (element === this.modalContent.buttonClose) {
      if (document.querySelector('.modal__buttons--close')) {
        const child = document.querySelector('.modal__buttons--close')!;
        document.querySelector('.modal__buttons')!.removeChild(child);
      }
      const labelComponentClose = new LabelComponent(this.modalContent.buttonClose!['text'], this.modalContent.buttonClose!['width']);
      const closeBtnWrapper = document.createElement('div');
      closeBtnWrapper.classList.add('modal__buttons--close');
      closeBtnWrapper.appendChild(labelComponentClose.render());
      closeBtnWrapper.addEventListener('click', this.closeModal);
      document.querySelector('.modal__buttons')!.appendChild(closeBtnWrapper);
    } else if (element === this.modalContent.buttonLink) {
      if (document.querySelector('.modal__buttons .button')) {
        const child = document.querySelector('.button')!;
        document.querySelector('.modal__buttons')!.removeChild(child);
      }
      const referenceComponent = new ReferenceComponent(this.modalContent.buttonLink!['link'], this.modalContent.buttonLink!['name']);
      document.querySelector('.modal__buttons')!.appendChild(referenceComponent.render());
    } else if (element === this.modalContent.buttonNext) {
      if (document.querySelector('.modal__buttons--next')) {
        const child = document.querySelector('.modal__buttons--next')!;
        document.querySelector('.modal__buttons')!.removeChild(child);
      }
      const labelComponentNext = new LabelComponent(this.modalContent.buttonNext!['text'], this.modalContent.buttonNext!['width']);
      const nextBtnWrapper = document.createElement('div');
      nextBtnWrapper.classList.add('modal__buttons--next');
      nextBtnWrapper.appendChild(labelComponentNext.render());
      nextBtnWrapper.addEventListener('click', this.changeContent);
      document.querySelector('.modal__buttons')!.appendChild(nextBtnWrapper);
    }
    return;
  }

  public closeModal(): void {
    document.querySelector('.modal-wrap')!.classList.remove('active');
    return;
  }

  public openModal(): void {
    document.querySelector('.modal-wrap')!.classList.add('active');
    return;
  }

  private modalClick(e: Event): void {
    e.stopPropagation();
    return;
  }

  private changeContent(): void {
    document.querySelector('.modal__body')!.innerHTML = 'dont have next content yet';
    return;
  }
}

export default ModalComponent;
