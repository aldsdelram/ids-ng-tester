import { Injectable } from '@angular/core';
import { Modal } from '@shared/classes/modal.class';
import { ModalOptions } from '@shared/classes/modal.utils';
import { StringUtils } from '@shared/utils/public-api';
import { SohoModalDialogService } from 'ids-enterprise-ng';

@Injectable({
  providedIn: 'root',
})
export class ModalFactoryService {
  constructor(readonly modalService: SohoModalDialogService) {}

  create<T>(options: ModalOptions<T>): Modal<T> {
    const { component } = options;
    const sohoModalOptions = this.createSohoModalOptions<T>(options);
    let sohoModalReference = this.modalService.modal(
      component,
      undefined,
      sohoModalOptions
    );
    const modal = new Modal<T>(sohoModalReference, options);
    return modal;
  }

  private createSohoModalOptions<T>(
    options: ModalOptions<T>
  ): SohoModalOptions {
    let sohoModalOptions: SohoModalOptions = {};

    const { title: modalTitle, showCloseButton, buttons, maxWidth } = options;
    const title = !StringUtils.isEmpty(modalTitle) && { title: modalTitle };

    return {
      ...sohoModalOptions,
      ...title,
      showCloseBtn: !!showCloseButton,
      buttons,
      maxWidth,
    };
  }
}
