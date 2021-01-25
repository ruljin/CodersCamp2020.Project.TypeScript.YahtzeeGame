import './style.scss';
import { render } from './components/sample/sample';

const root = document.querySelector('#root')!;
root.innerHTML = render();
