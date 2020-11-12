import "normalize.css";
import BtnCounter from '@kuznetsovgm/btncounter';
import '@kuznetsovgm/btncounter/dist/main.css';


const container = document.getElementById('container');
const btn = new BtnCounter();
btn.render(container);
