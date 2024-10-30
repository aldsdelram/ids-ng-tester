class ArrayUtils {
  isIncludedIgnoreCase(values: string[], searchValue: string) {
    return values.some(
      (value) => value?.toUpperCase() === searchValue.toUpperCase()
    );
  }

  ensureArray<T>(input: T | T[]): T[] {
    return Array.isArray(input) ? input : [input];
  }

  insertToArrayImmutable<T>(arr: T[], newItem: T, index: number): T[] {
    return [...arr.slice(0, index), newItem, ...arr.slice(index)];
  }

  updateArrayItemImmutable<T>(arr: T[], newItem: T, index: number): T[] {
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }
}

export default new ArrayUtils();
