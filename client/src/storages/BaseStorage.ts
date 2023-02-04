export class BaseStorage<T> {
  readonly #key;
  readonly #storage;

  constructor(key: string, storage = localStorage) {
    this.#key = key;
    this.#storage = storage;
  }

  getData(): T {
    return JSON.parse(this.#storage.getItem(this.#key) || "null");
  }

  setData(data: T) {
    return this.#storage.setItem(this.#key, JSON.stringify(data));
  }
}
