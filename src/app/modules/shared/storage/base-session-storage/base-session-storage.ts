import { StringUtils } from '@shared/utils/public-api';

class BaseSessionStorage {
  private inst = this;

  constructor(private key: string) {}

  private getSessionStorageObject(key: string) {
    let value = window.sessionStorage.getItem(key);
    return value && JSON.parse(value);
  }

  private setSessionStorageObject(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  getObject<T>(guid?: string) {
    if (this.inst.isBrowserSupported()) {
      let key = guid
        ? StringUtils.placeholder(this.inst.key, [guid.toUpperCase()])
        : this.inst.key;
      return this.getSessionStorageObject(key) as T;
    } else {
      return null;
    }
  }

  isBrowserSupported() {
    return typeof Storage !== 'undefined' ? true : false;
  }
  isExist(guid?: string) {
    if (this.inst.isBrowserSupported()) {
      let key = guid
        ? StringUtils.placeholder(this.inst.key, [guid])
        : this.inst.key;
      if (this.getSessionStorageObject(key)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  setObject<T>(value: T, guid?: string) {
    if (this.inst.isBrowserSupported()) {
      let key = guid
        ? StringUtils.placeholder(this.inst.key, [guid.toUpperCase()])
        : this.inst.key;
      this.setSessionStorageObject(key, value);
    }
  }
}

export default BaseSessionStorage;
