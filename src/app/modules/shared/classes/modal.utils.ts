import { Type } from '@angular/core';
import { Modal } from '@shared/classes/modal.class';
import { CommonUtils } from '@shared/utils/public-api';
import { SohoModalDialogRef } from 'ids-enterprise-ng';

export interface ModalButton {
  id: string;
  text: string;
  isDefault?: boolean;
  click?: SohoModalButtonClickFunction;
  disabled?: boolean;
}

export interface ModalOptions<T> {
  component: Type<T>;
  title?: string;
  showCloseButton?: boolean;
  buttons?: ModalButton[];
  maxWidth?: number;
  events?: {
    beforeOpen?: <T>(dialogRef?: SohoModalDialogRef<T>) => boolean;
    beforeClose?: <T>(dialogRef?: SohoModalDialogRef<T>) => boolean;
  };
}

export interface VetoableModal {
  beforeCloseModal(): boolean;
  beforeOpenModal(): boolean;
}

export interface ModalDialog<T> {
  modal: Modal<T> | undefined;
  setModal(modal: Modal<T>): void;
  getButtons?(): ModalButton[];
  getTitle(): string | undefined;
}

export function isVetoableModal(component: any): component is VetoableModal {
  return (
    CommonUtils.isObject(component) &&
    'beforeCloseModal' in component &&
    'beforeOpenModal' in component
  );
}

export function isModalDialog<T>(component: any): component is ModalDialog<T> {
  return CommonUtils.isObject(component) && 'setModal' in component;
}
