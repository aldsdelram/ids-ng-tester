import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { SharedModule } from '@modules/shared/shared.module';
import {
  PopupMenuItem,
  PopupMenuItemType,
  StartMenuItem,
  StartMenuItemSectionType,
} from './module-nav.utils';
import { StringUtils } from '@modules/shared/utils/public-api';

@Component({
  selector: 'app-module-nav',
  standalone: true,
  imports: [AppCommonModule, SharedModule],
  templateUrl: './module-nav.component.html',
  styleUrl: './module-nav.component.css',
})
export class ModuleNavComponent implements OnInit {
  @ViewChild('template', { static: true }) template!: TemplateRef<unknown>;
  icon = 'icon-add';

  @Input() showModuleSwitcher: boolean = false;
  @Input() showFooterSection: boolean = false;
  @Input() settingsMenuItems: PopupMenuItem[] = [];
  @Input() settingsText: string = 'Settings';
  @Input() searchText: string = 'Search';
  @Input() menuItems: StartMenuItem[] = [];
  @Input() footerItems: StartMenuItem[] = [];
  @Input() disableSwitcher: boolean = true;
  @Output() menuItemSelected = new EventEmitter<StartMenuItem>();


  protected readonly StartMenuItemSectionType = StartMenuItemSectionType;
  protected readonly PopupMenuItemType = PopupMenuItemType;
  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  protected hasIcon(menuItem: StartMenuItem): boolean {
    return !StringUtils.isEmpty(menuItem.icon);
  }

  protected startMenuItemClicked(
    item: StartMenuItem,
    menuItemSectionType: StartMenuItemSectionType
  ): void {
    switch (menuItemSectionType) {
      case StartMenuItemSectionType.START_MENU:
        this.menuItemSelected.emit(item);
        break;
    }
  }
}
