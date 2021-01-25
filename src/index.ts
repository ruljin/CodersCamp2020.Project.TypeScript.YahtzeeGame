import './style.scss';
import { render } from './components/sample/sample';

const root = document.querySelector('#root')!;
root.innerHTML = render();

`
<p>
  <button>Click me!</button>
  <div id="show-me">
    Lorem ipsum
  </div>
</p>
`;