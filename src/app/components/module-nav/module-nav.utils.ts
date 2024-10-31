import GenericObject from '@modules/shared/types/generic-object';

export enum PopupMenuItemType {
  Item = 'item',
  Separator = 'separator',
  Heading = 'heading',
  HiddenSeparator = 'hidden-separator',
}

export interface PopupMenuItem {
  label: string;
  type: PopupMenuItemType;
  link?: string;
  dataOption?: string;
  indented?: boolean;
  translatable?: boolean;
  clickAction?: Function;
  isSelectable?: boolean;
  isChecked?: boolean;
  isToggleable?: boolean;
}

export enum ToolbarButtonSetType {
  BUTTON = 'button',
  BUTTON_MENU = 'button_menu',
}

export enum StartMenuItemSectionType {
  START_MENU = 'start-menu',
  FOOTER_MENU = 'footer-menu',
}

export interface StartMenuItem {
  id: string;
  description: string;
  children?: StartMenuItem[];
  icon?: string;
  data?: GenericObject;
}
