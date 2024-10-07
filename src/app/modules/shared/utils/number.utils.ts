class NumberUtils {
  compareNumber(val1: any, val2: any, isAscending: boolean) {
    if (isAscending) {
      return val1 - val2;
    }
    return val2 - val1;
  }

  getNumberStringWithoutThousandsCharacter(
    numberString: string,
    thousandsChar: string
  ): string {
    let regExp = new RegExp(thousandsChar, 'g');
    return numberString.replace(regExp, '');
  }

  isNumber(value: any): value is number {
    return typeof value === 'number';
  }
}

export default new NumberUtils();
