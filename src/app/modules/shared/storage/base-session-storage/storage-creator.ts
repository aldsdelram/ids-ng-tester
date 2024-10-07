import BaseSessionStorage from './base-session-storage';

class StorageCreator {
  create(key: string) {
    let instance = new BaseSessionStorage(key);
    return instance;
  }
}

export default new StorageCreator();
