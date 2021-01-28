import LogoComponent from './logo';
document.body.innerHTML = `<header class="logo">
  <a href="#/index.html">
    <img alt="logo" src="../../../../assets/logo.svg" />
  </a>
</header>`;

test('Check rendering logo', () => {
  const logo = `<header class="logo">
      <a href="#/index.html">
        <img alt="logo" src="../../../../assets/logo.svg" />
      </a>
    </header>`;
  expect((new LogoComponent()).render()).toStrictEqual(logo);
});

test('Check event listener', () => {
  (new LogoComponent()).setup();
  expect(document.querySelector('a')!.getAttribute('hasRefreshListener')).toBe('true');
});

test('Deleting link in logo', () => {
  (new LogoComponent()).deleteLink();
  expect(document.querySelector('a')!.hasAttribute('href')).toBeFalsy();
});
