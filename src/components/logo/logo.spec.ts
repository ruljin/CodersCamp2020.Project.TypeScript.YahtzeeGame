import LogoComponent from './logo';
import { createElementFromString } from '../../common/WebComponent';
import * as Logo from '../../assets/logo.svg';

test('Check rendering logo', () => {
  const logo = createElementFromString(`
        <header class="logo">
          <a href="#/intro">
            <img src="${Logo}" alt="logo">
          </a>
        </header>
      `);

  const logoComponent = new LogoComponent();

  expect(logoComponent.render())
    .toStrictEqual(logo);

  expect(logoComponent.render())
    .toStrictEqual(logo);
});

test('Deleting link in logo', () => {
  const logoComponent = new LogoComponent();

  expect(logoComponent.render().querySelector('a')!.hasAttribute('href'))
    .toBeTruthy();

  logoComponent.deleteLink();

  expect(logoComponent.render().querySelector('a')!.hasAttribute('href'))
    .toBeFalsy();
});
