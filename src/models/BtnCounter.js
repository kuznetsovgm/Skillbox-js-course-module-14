import style from '@styles/style.css';

export default class BtnCounter {
	constructor(conf) {
		const defaultConfig = {
			initialValue: 0,
			classList: ['btn-counter'],
			// beforeClick: null,
			// afterClick: null,
		};
		this.config = Object.assign({}, defaultConfig, conf);

		this.btn = document.createElement('button');
		this.btn.classList.add(this.config.classList.join(' '));
		this.btn.innerText = this.config.initialValue;
		this.counter = this.makeCounter();
		this.btn.onclick = () => {
			// !!this.config.beforeClick && this.config.beforeClick();
			this.btn.innerText = this.counter();
			// !!this.config.afterClick && this.config.afterClick();
		};
		return this;
	}

	makeCounter = () => {
		let count = this.config.initialValue;
		return () => ++count;
	};

	render = (el) => {
		try {
			el.append(this.btn);
			return this.btn;
		} catch (e) {
			console.error(e);
			return false;
		}

	};

}