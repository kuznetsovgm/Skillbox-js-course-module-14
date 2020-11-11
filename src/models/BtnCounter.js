import style from '@styles/style.css';

class BtnCounter {
	constructor() {
		this.btn = document.createElement('button');
		this.btn.classList.add('btn-counter');
		this.btn.innerText = '0';
		this.counter = this.makeCounter();
		this.btn.onclick = () => {
			let count = this.counter();
			this.btn.innerText = count;
		};
		return this.btn;
	}

	makeCounter = () => {
		let count = 0;
		return () => ++count;
	}

}

export default BtnCounter;