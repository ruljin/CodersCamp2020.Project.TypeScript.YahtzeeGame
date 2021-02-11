import ModalComponent from './modal';
import { createElementFromString } from '../../common/WebComponent';

test('Check rendering modal', () => {
  const checkModalContent = new ModalComponent({ subheader: 'subheader', header: 'My header', content: 'Some content', buttonClose: { text: 'close', width: 8 }, buttonLink: { link: 'link', name: 'name' } });
  expect(checkModalContent.render())
    .toStrictEqual(createElementFromString(`
      <section class="modal-wrap">
        <div class="modal">
          <div class="modal__header">My header</div>
          <div class="modal__body">Some content</div>
          <div class="modal__buttons"></div>
        </div>
      </section>`));
});

test('Check modal setup', () => {
  document.body.innerHTML = `
    <div id="root">
      <section class="modal-wrap">
        <div class="modal">
          <div class="modal__header"></div>
          <div class="modal__body"></div>
          <div class="modal__buttons"></div>
        </div>
      </section>
    </div>`;

  const checkModalExtraProperty = new ModalComponent({ subheader: 'subheader', header: 'My header', content: 'Some content', buttonClose: { text: 'close', width: 8 }, buttonLink: { link: 'link', name: 'name' } });
  checkModalExtraProperty.setup();
  expect(document.querySelector('#root')!.innerHTML).toMatch(`
      <section class="modal-wrap">
        <div class="modal">
          <div class="modal__header"><p class="modal__header--subheader">subheader</p></div>
          <div class="modal__body"></div>
          <div class="modal__buttons"><div class="modal__buttons--close"><div class="label" style="width: 8rem;">close</div></div><a href="#/link" class="button ">name</a></div>
        </div>
      </section>`
  );
});

test('Testing if class method add and remove classes to DOM', () => {
  document.body.innerHTML = `
    <div id="root">
      <section class="modal-wrap">
      </section>
    </div>`;
  const modalWrap = document.querySelector('.modal-wrap');

  const checkAddingClasses = new ModalComponent({ subheader: 'subheader', header: 'My header', content: 'Some content', buttonClose: { text: 'close', width: 8 }, buttonLink: { link: 'link', name: 'name' } });
  checkAddingClasses.openModal();
  expect(modalWrap!.classList.contains('active')).toBeTruthy();

  checkAddingClasses.closeModal();
  expect(modalWrap!.classList.contains('active')).toBeFalsy();
});
