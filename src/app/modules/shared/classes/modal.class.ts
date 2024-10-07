import {
  isModalDialog,
  isVetoableModal,
  ModalButton,
  ModalDialog,
  ModalOptions,
} from '@shared/classes/modal.utils';
import { CommonUtils, StringUtils } from '@shared/utils/public-api';
import { SohoModalDialogRef } from 'ids-enterprise-ng';

export class Modal<T> {
  constructor(
    private sohoModalRef: SohoModalDialogRef<T>,
    private modalOptions: ModalOptions<T>
  ) {
    this.prepareModalDialog();
    this.prepareComponentDialog();
    this.processVetoableEvents();
  }

  private prepareModalDialog(): void {
    const componentDialog = this.getComponentDialog();
    if (!isModalDialog<T>(componentDialog)) {
      return;
    }

    this.prepareModalTitle(componentDialog);
  }

  private prepareModalTitle(componentDialog: ModalDialog<T>): void {
    const title = componentDialog.getTitle();
    const { title: titleFromOptions } = this.modalOptions;
    if (StringUtils.isEmpty(title) || StringUtils.isEmpty(titleFromOptions)) {
      return;
    }
    this.sohoModalRef.title(title || titleFromOptions);
  }

  private prepareComponentDialog(): void {
    const componentDialog = this.getComponentDialog();
    if (!isModalDialog(componentDialog)) {
      return;
    }
    componentDialog.setModal(this);

    const buttons = componentDialog.getButtons?.();
    if (CommonUtils.notNullNorUndefined(buttons)) {
      this.setButtons(buttons);
    }
  }

  private processVetoableEvents(): void {
    const componentDialog = this.getComponentDialog();
    let { beforeClose, beforeOpen } = this.modalOptions.events || {};
    if (isVetoableModal(componentDialog)) {
      beforeClose = componentDialog.beforeCloseModal.bind(componentDialog);
      beforeOpen = componentDialog.beforeOpenModal.bind(componentDialog);
    }
    this.sohoModalRef = this.sohoModalRef
      .beforeOpen((dialogRef) => {
        if (CommonUtils.isNullOrUndefined(beforeOpen)) {
          return true;
        }
        return beforeOpen(dialogRef);
      })
      .beforeClose((dialogRef) => {
        if (CommonUtils.isNullOrUndefined(beforeClose)) {
          return true;
        }
        return beforeClose(dialogRef);
      });
  }

  getComponentDialog(): T | undefined {
    return this.sohoModalRef.componentDialog;
  }

  open(): void {
    this.sohoModalRef.open();
  }

  close(): void {
    this.sohoModalRef.close();
  }

  setButtonEnableStatus(buttonId: string, isEnabled: boolean): void {
    const button = this.sohoModalRef.buttonsetAPI?.buttons.find(
      (button) => button?.settings.id === buttonId
    );
    if (CommonUtils.isNullOrUndefined(button)) {
      return;
    }
    button.disabled = !isEnabled;
  }

  setButtons(buttons: ModalButton[]): void {
    this.sohoModalRef.buttons(buttons);
    const buttonsAPI = this.sohoModalRef.buttonsetAPI;
    if (CommonUtils.isNullOrUndefined(buttonsAPI)) {
      return;
    }
    buttonsAPI.buttons.forEach((button) => {
      const buttonId = button.settings.id;
      const modalButton = buttons.find((button) =>
        StringUtils.isEqualIgnoreCase(buttonId, button.id)
      );
      button.disabled = !!modalButton?.disabled;
    });
  }
}
