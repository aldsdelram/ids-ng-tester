import { HttpErrorResponse } from '@angular/common/http';

class HttpTypeGuardUtils {
  isHttpErrorResponse(value: any): value is HttpErrorResponse {
    return value instanceof HttpErrorResponse;
  }
}

export default new HttpTypeGuardUtils();
