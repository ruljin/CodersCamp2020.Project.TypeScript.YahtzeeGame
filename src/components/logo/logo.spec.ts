import LogoComponent from './logo';

test('Check rendering logo', () => {
  const logo = `
    <header class="logo">
      <a href="#/index.html">
        <img src="../../assets/logo.svg" alt="logo">
      </a>
    </header>
  `;

  expect((new LogoComponent()).render().outerHTML.replace(/  /g, '').trim())
    .toStrictEqual(logo.replace(/  /g, '').trim());
});

test('Deleting link in logo', () => {
  const logoComponent = new LogoComponent();

  expect(logoComponent.render().querySelector('a')!.hasAttribute('href'))
    .toBeTruthy();

  logoComponent.deleteLink();

  expect(logoComponent.render().querySelector('a')!.hasAttribute('href'))
    .toBeFalsy();
});
