import { Injectable, isDevMode } from '@angular/core';
import { isCLMException } from '@shared/errors/clm-exception.error';
import { XhrObject } from '@shared/interfaces/xhr-object';
import { CommonUtils } from '@shared/utils/public-api';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}
  /* methods */

  /**
   * Logs the message at the log file with Info log level.
   */
  info(message: unknown) {
    /* do nothing as of now */
    console.log('[CLM INFO]: ', message);
  }

  /**
   * Logs the message at the log file with Warning log level.
   */
  warning(message: unknown) {
    console.log('[CLM WARN]: ', message);
    /* do nothing as of now */
  }

  /**
   * Logs the message at the log file with Error log level.
   */
  error(message: unknown) {
    /* do nothing as of now */

    const logs: any[] = [message];
    if (
      isCLMException(message) &&
      !CommonUtils.isNullOrUndefined(message.cause)
    ) {
      logs.push('CLMException Cause: ');
      logs.push(message.cause);
    }

    console.log('[CLM ERROR]:', ...logs);
  }

  debug(...args: unknown[]) {
    if (isDevMode()) {
      const errorStacks = new Error('Debug Stack').stack;
      let stacks = errorStacks?.split('\n').slice(0, 3);
      args.push(stacks?.join('\n'));
    }
    console.debug(`[CLM DEBUG]:`, ...args);
  }

  /**
   * Logs the errors of the XHR object into the log file.
   *	@xhr: the XMLHttpRequest object.
   */
  xhr(xhr: unknown) {
    this.exception(xhr);
  }

  /**
   * Logs the errors of the Error object into the log file.
   *	@err: the error object.
   */
  err(err: unknown) {
    this.exception(err);
  }

  /**
   * Returns the necessary XHR message.
   *  @xhr: the xhr object
   *  @msg: the default message if not found
   */
  xhrObjectMessage(xhr: XhrObject, msg?: string) {
    if (xhr) {
      msg = xhr.statusText || xhr.responseText || xhr.message || msg;
    }
    if (msg) {
      console?.log(msg);
    }
    return msg;
  }

  /**
   * Logs an error from the exception object.
   *	@ex: an exception. This could be a string, an Error object or an XMLHttpRequest object.
   */
  exception(ex: unknown) {
    this.error(this.xhrObjectMessage(ex as XhrObject) || ex);
  }
}
