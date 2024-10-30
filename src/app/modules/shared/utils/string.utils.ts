import _ from 'underscore';
import * as uuid from 'uuid';

type AnyText = string | undefined | null;

class StringUtils {
  isEmpty(string: AnyText): string is undefined | null {
    return (
      _.isUndefined(string) || _.isNull(string) || string.trim().length === 0
    );
  }

  isNull(text: string | null): text is null {
    return _.isNull(text);
  }

  isNumeric(string: string | number): boolean {
    if (typeof string === 'number') {
      string = string.toString();
    }

    return !isNaN(parseFloat(string)) && isFinite(Number(string));
  }

  isJson(str: string): boolean {
    let item = null;
    try {
      item = JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  placeholder(value: string, args: string[] = []): string {
    if (this.isEmpty(value) && args.length === 0) {
      return value;
    }

    return [...args].reduce((replacedText, replacement, index) => {
      let token = `{${index}}`;
      let result = replacedText;
      while (result.indexOf(token) >= 0) {
        result = result.replace(token, replacement);
      }
      return result;
    }, value);
  }

  endsWith(
    stringToCheck: string,
    suffix: string,
    ignoreCase: boolean = true
  ): boolean {
    let indexOfSuffixCheck = stringToCheck.length - suffix.length;
    const searchValue = ignoreCase ? suffix.toLowerCase() : suffix;
    const keyValue = ignoreCase ? stringToCheck.toLowerCase() : stringToCheck;
    return keyValue.indexOf(searchValue, indexOfSuffixCheck) !== -1;
  }

  startsWith(
    stringToCheck: string,
    prefix: string,
    ignoreCase: boolean = true
  ): boolean {
    const searchValue = ignoreCase ? prefix.toLowerCase() : prefix;
    const keyValue = ignoreCase ? stringToCheck.toLowerCase() : stringToCheck;
    return keyValue.indexOf(searchValue) === 0;
  }

  contains(stringToCheck: string, stringContain: string): boolean {
    if (this.isEmpty(stringToCheck)) return false;
    return (
      stringToCheck.toLowerCase().indexOf(stringContain.toLowerCase()) >= 0
    );
  }

  isEqualIgnoreCase(
    first: string | null | undefined,
    second: string | undefined | null
  ): boolean {
    return (first?.toLowerCase() || '') === (second?.toLowerCase() || '');
  }

  generateGUID(): string {
    let guidGenerated = uuid.v4();
    guidGenerated = guidGenerated.toLowerCase();
    return guidGenerated;
  }

  emptyGUID(): string {
    return uuid.NIL;
  }

  isGUID(str: AnyText): boolean {
    if (this.isEmpty(str)) {
      return false;
    }
    return uuid.validate(str);
  }

  convertToEmptyIfNull(string: AnyText): string {
    if (this.isEmpty(string)) {
      return '';
    } else {
      return string;
    }
  }

  parseInt(string: any): number {
    let value = parseInt(string);
    if (_.isNaN(value)) {
      return 0;
    } else {
      return value;
    }
  }

  parseFloat(string: string): number {
    let value = parseFloat(string);
    if (_.isNaN(value)) {
      return 0.0;
    } else {
      return value;
    }
  }

  padLeft(number: number, length: number, strToPad: string): string {
    return (
      Array(length - String(number).length + 1).join(strToPad || '0') + number
    );
  }

  randomIntFromInterval(min: number, max: number): string {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random.toString();
  }

  getRootUrl(url: string): string {
    let output = '';
    let baseURL = url.split('/');
    output += baseURL[0] + '//';
    baseURL = baseURL[2].split(':');
    output += baseURL[0];
    return output;
  }

  isTrue(bool: string): boolean {
    return (
      (_.isString(bool) && bool.toUpperCase() === 'TRUE') ||
      (_.isBoolean(bool) && bool)
    );
  }

  escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  stringify(obj: any): string {
    let cache: any[] | null = [];
    let str = JSON.stringify(obj, function (key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache?.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
    cache = null; // reset the cache
    return str;
  }

  compareText(val1: string, val2: string, isAscending: boolean): number {
    if (isAscending) {
      return val1.localeCompare(val2);
    }
    return val2.localeCompare(val1);
  }

  isString(value: any): value is string {
    return typeof value == 'string';
  }

  tryParseJsonString<T>(jsonString: any): T | null {
    if (!this.isString(jsonString)) {
      return jsonString;
    }
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return null;
    }
  }

  nullToEmpty(value: string | null): string {
    if (value === null) {
      return '';
    }
    return value;
  }
}

export default new StringUtils();
