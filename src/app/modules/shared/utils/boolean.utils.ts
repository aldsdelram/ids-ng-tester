import { StringUtils } from '@shared/utils/public-api';

class BooleanUtils {
  parseBoolean(value: any, checkPresence?: boolean) {
    if (checkPresence === true && !value) {
      return null;
    }
    return (
      StringUtils.isEqualIgnoreCase(value, 'true') ||
      value === '1' ||
      value === true ||
      value === 1
    );
  }
}
export default new BooleanUtils();
