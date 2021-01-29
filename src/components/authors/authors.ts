import './authors.scss';
import WebComponent, { createElementFromString } from '../../common/WebComponent';


class AuthorsComponent implements WebComponent {
  render(): Element {
    return createElementFromString(`<main>
        <div class="container">
        <a href="https://github.com/kami3la">Kamila Grusza</a><br>
        <a href="https://github.com/KonradMierzejewski">Konrad Mierzejewski</a><br>
        <a href="https://github.com/brzeczkowskaw">Weronika Brzęczkowska-Kuzianik</a><br>
        <a href="https://github.com/adax10">Adrianna Krupa</a><br>
        <a href="https://github.com/Suegro24">Dominik Puchała</a><br>
        <a href="https://github.com/Mrozelek">Jędrzej Ratajczak</a><br>
        <a href="https://github.com/ruljin">Filip Kuca - support</a>
        </div>
      </main>`);
  }

  setup(): void {
    return;
  }
}

export default AuthorsComponent;