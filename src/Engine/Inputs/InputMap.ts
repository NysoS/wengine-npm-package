export default class InputMap {
    private key: String = '';
    private callback: Function | null = null;

    constructor(key: String, callback: Function) {
        this.key = key;
        this.callback = callback;
    }

    getKey(): String {
        return this.key;
    }

    invoke() {
        this.callback?.call(this);
    }
}