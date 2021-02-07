import ModalComponent from './modal';
import { createElementFromString } from '../../common/WebComponent';

test('Check rendering modal', () => {
  const checkModalContent = new ModalComponent({ subheader: 'subheader', header: 'My header', content: 'Some content', buttonClose: { text: 'close', width: 8 }, buttonLink: { link: 'link', name: 'name' } });
  expect(checkModalContent.render())
    .toStrictEqual(createElementFromString(`
      <section class="modal-wrap active">
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
    </div>`;
  const checkModalSubheader = new ModalComponent({ subheader: 'subheader', header: 'My header', content: 'Some content', buttonClose: { text: 'close', width: 8 }, buttonLink: { link: 'link', name: 'name' } })
  checkModalSubheader.render();
  checkModalSubheader.setup();
  expect(document.querySelector('#root')!.innerHTML).toStrictEqual(createElementFromString(`
    <section class="modal-wrap active">
      <div class="modal">
        <div class="modal__header">
          "My header"
          <p class="modal__header--subheader>subheader</p>
        </div>
        <div class="modal__body">Some content</div>
        <div class="modal__buttons"></div>
      </div>
    </section>`));
});


