export class LocalStorage {
	key: string;

	constructor(key: string) {
		this.key = key;
	}

	getKey() {
		localStorage.getItem(this.key);
	}

	setKey(value: string) {
		localStorage.setItem(this.key, value);
	}

	removeKey() {
		localStorage.removeItem(this.key);
	}
}