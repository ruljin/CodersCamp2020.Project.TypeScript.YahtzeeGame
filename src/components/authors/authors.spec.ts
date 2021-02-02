import AuthorsComponent from './authors';
import { createElementFromString } from '../../common/WebComponent';


test('Check rendering authors text', () => {
  const intro = createElementFromString(`
        <section class="authors">
        <a class="link" href="https://github.com/kami3la" target="_blank">Kamila Grusza</a><br>
        <a class="link" href="https://github.com/KonradMierzejewski" target="_blank">Konrad Mierzejewski</a><br>
        <a class="link" href="https://github.com/brzeczkowskaw" target="_blank">Weronika Brzęczkowska-Kuzianik</a><br>
        <a class="link" href="https://github.com/adax10" target="_blank">Adrianna Krupa</a><br>
        <a class="link" href="https://github.com/Suegro24" target="_blank">Dominik Puchała</a><br>
        <a class="link" href="https://github.com/Mrozelek" target="_blank">Jędrzej Ratajczak</a><br>
        <a class="link" href="https://github.com/ruljin" target="_blank">Filip Kuca - support</a>
        </section>`);

  const authorsComponent = new AuthorsComponent();

  expect(authorsComponent.render()).toStrictEqual(intro);
});