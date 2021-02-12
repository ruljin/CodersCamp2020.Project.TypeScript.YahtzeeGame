import './modal.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';
import ReferenceComponent from '../reference/reference';
import LabelComponent from '../label/label';

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
    document.querySelector('.modal')!.addEventListener('click', this.modalClick);
    document.querySelector('.modal-wrap')!.addEventListener('click', this.closeModal);
    if (this.modalContent.picture) {
      document.querySelector('.modal__image')!.setAttribute('src', `${this.modalContent.picture}`);
    }
    return;
  }

  private addExtraProperty(element: string | unknown) {
    if (element === this.modalContent.subheader) {
      document.querySelector('.modal__header')!.appendChild(createElementFromString(`<p class="modal__header--subheader">${this.modalContent.subheader}</p>`));
    } else if (element === this.modalContent.buttonClose) {
      const labelComponentClose = new LabelComponent(this.modalContent.buttonClose!['text'], this.modalContent.buttonClose!['width']);
      const closeBtnWrapper = document.createElement('div');
      closeBtnWrapper.classList.add('modal__buttons--close');
      closeBtnWrapper.appendChild(labelComponentClose.render());
      closeBtnWrapper.addEventListener('click', this.closeModal);
      document.querySelector('.modal__buttons')!.appendChild(closeBtnWrapper);
    } else if (element === this.modalContent.buttonLink) {
      const referenceComponent = new ReferenceComponent(this.modalContent.buttonLink!['link'], this.modalContent.buttonLink!['name']);
      document.querySelector('.modal__buttons')!.appendChild(referenceComponent.render());
    } else if (element === this.modalContent.buttonNext) {
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
