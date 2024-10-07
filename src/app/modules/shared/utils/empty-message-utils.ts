import { HttpErrorResponse } from '@angular/common/http';
import { TranslationService } from '@services/public-api';

class EmptyMessageUtils {
  getDatagridEmptyMessage(
    translationService: TranslationService,
    icon?: string
  ): SohoEmptyMessageOptions {
    return {
      title: translationService.get(
        'EmptyMessage_NoDataAvailable',
        'No Data Available'
      ),
      icon: icon || 'icon-empty-no-data-new',
    };
  }

  getDatagridErrorMessage(
    translationService: TranslationService,
    icon?: string
  ): SohoEmptyMessageOptions {
    return {
      title: translationService.get(
        'EmptyMessage_ErrorLoadingData',
        'Error Loading Data'
      ),
      icon: icon || 'icon-empty-error-loading-new',
    };
  }

  getErrorOrEmptyMessage(
    translationService: TranslationService,
    listSize: number,
    error: HttpErrorResponse | undefined | null
  ): SohoEmptyMessageOptions | null {
    if (error) {
      return this.getDatagridErrorMessage(translationService, error.message);
    }
    if (listSize === 0) {
      return this.getDatagridEmptyMessage(translationService);
    }
    return null;
  }
}

export default new EmptyMessageUtils();
