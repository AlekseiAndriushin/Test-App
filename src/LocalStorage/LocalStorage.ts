export abstract class LocalStorage {
	private key: string;

	constructor(key: string) {
		this.key = key;
	}

	public getKey() {
		localStorage.getItem(this.key);
	}

	public setKey(value: string) {
		localStorage.setItem(this.key, value);
	}

	public removeKey() {
		localStorage.removeItem(this.key);
	}
}