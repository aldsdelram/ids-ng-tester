import { CssUnit } from '@shared/enums/public-api';

class DOMUtils {
  isElement(value: any): value is Element {
    return value instanceof Element;
  }

  isVisible(element: HTMLElement): boolean {
    return (
      !!(
        element.offsetWidth ||
        element.offsetHeight ||
        element.getClientRects().length
      ) && window.getComputedStyle(element).visibility !== 'hidden'
    );
  }

  triggerResizeEvent() {
    window.dispatchEvent(new Event('resize'));
  }

  isHtmlElement(value: any): value is HTMLElement {
    return value instanceof HTMLElement;
  }

  isHtmlInputElement(value: any): value is HTMLInputElement {
    return value instanceof HTMLInputElement;
  }

  formatCssUnit(size: number, unit: CssUnit): string {
    return size + unit;
  }
}

export default new DOMUtils();
