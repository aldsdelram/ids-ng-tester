class JsTypeGuardUtils {
  isErrorObject(value: any): value is Error {
    return value instanceof Error;
  }
}

export default new JsTypeGuardUtils();
