import './modal.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';
import ReferenceComponent from '../reference/reference';
import LabelComponent from '../label/label';

interface Modal {
  subheader?: string;
  header: string;
  content: string;
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
      <section class="modal-wrap active">
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
    return;
  }

  private addExtraProperty(element: string | object) {
    switch (element) {
      case this.modalContent.subheader:
        document.querySelector('.modal__header')!.appendChild(createElementFromString(`<p class="modal__header--subheader">${this.modalContent.subheader}</p>`));
        break;
      case this.modalContent.buttonClose:
        const labelComponentClose = new LabelComponent(this.modalContent.buttonClose!['text'], this.modalContent.buttonClose!['width']);
        const closeBtnWrapper = document.createElement('div');
        closeBtnWrapper.classList.add('modal__buttons--close');
        closeBtnWrapper.appendChild(labelComponentClose.render());
        closeBtnWrapper.addEventListener('click', this.closeModal);
        document.querySelector('.modal__buttons')!.appendChild(closeBtnWrapper);
        break;
      case this.modalContent.buttonLink:
        const referenceComponent = new ReferenceComponent(this.modalContent.buttonLink!['link'], this.modalContent.buttonLink!['name']);
        document.querySelector('.modal__buttons')!.appendChild(referenceComponent.render());
        break;
      case this.modalContent.buttonNext:
        const labelComponentNext = new LabelComponent(this.modalContent.buttonNext!['text'], this.modalContent.buttonNext!['width']);
        const nextBtnWrapper = document.createElement('div');
        nextBtnWrapper.classList.add('modal__buttons--next');
        nextBtnWrapper.appendChild(labelComponentNext.render());
        nextBtnWrapper.addEventListener('click', this.changeContent);
        document.querySelector('.modal__buttons')!.appendChild(nextBtnWrapper);
        break;
    }
    return;
  }

  public closeModal() {
    document.querySelector('.modal-wrap')!.classList.remove('active');
  }

  public openModal() {
    document.querySelector('.modal-wrap')!.classList.add('active');
  }

  private modalClick(e: Event) {
    e.stopPropagation();
  }

  private changeContent() {
    document.querySelector('.modal__body')!.innerHTML = 'dont have next content yet'
  }
}

export default ModalComponent;
