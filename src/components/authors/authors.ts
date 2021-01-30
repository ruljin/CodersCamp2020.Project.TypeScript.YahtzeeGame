import './authors.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';


class AuthorsComponent implements WebComponent {
  render(): Element {
    return createElementFromString(`
        <section class="container">
        <a class="link" href="https://github.com/kami3la" target="_blank">Kamila Grusza</a><br>
        <a class="link" href="https://github.com/KonradMierzejewski" target="_blank">Konrad Mierzejewski</a><br>
        <a class="link" href="https://github.com/brzeczkowskaw" target="_blank">Weronika Brzęczkowska-Kuzianik</a><br>
        <a class="link" href="https://github.com/adax10" target="_blank">Adrianna Krupa</a><br>
        <a class="link" href="https://github.com/Suegro24" target="_blank">Dominik Puchała</a><br>
        <a class="link" href="https://github.com/Mrozelek" target="_blank">Jędrzej Ratajczak</a><br>
        <a class="link" href="https://github.com/ruljin" target="_blank">Filip Kuca - support</a>
        </section>`);
  }

  setup(): void {
    return;
  }
}

export default AuthorsComponent;