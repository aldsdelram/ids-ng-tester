class CommonUtils {
  notNull<T>(value: T | null): value is T {
    return value !== null;
  }

  notUndefined<T>(value: T | undefined): value is T {
    return value !== undefined;
  }

  notNullNorUndefined<T>(value: T | undefined | null): value is T {
    return this.notNull(value) && this.notUndefined(value);
  }

  isHTMLElement(value: any): value is HTMLElement {
    return value instanceof HTMLElement;
  }

  isNullOrUndefined<T>(value: T | undefined | null): value is undefined | null {
    return value === null || value === undefined;
  }

  isVoid<T>(value: T | void): value is void {
    return this.isNullOrUndefined(value);
  }

  setKeyValue(o: any, key: string, value: any) {
    if (o instanceof Object) {
      o[key] = value;
    }
  }

  deepClone<T>(obj: T): T {
    return structuredClone(obj);
  }

  isObject(object: any): boolean {
    return (
      object != null &&
      typeof object === 'object' &&
      Array.isArray(object) === false
    );
  }
}

export default new CommonUtils();
