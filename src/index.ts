import './style.scss';
import { SampleComponent } from './components/sample/sample';

const root = document.querySelector('#root')!;
const x = new SampleComponent();
root.innerHTML = x.render();
x.setup();