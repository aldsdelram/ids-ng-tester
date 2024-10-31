import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HeaderComponent } from './components/header/header.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ModuleNavComponent } from './components/module-nav/module-nav.component';
import { StartMenuItem } from './components/module-nav/module-nav.utils';
import { LetDirective, PushPipe } from '@ngrx/component';
import GenericObject from '@modules/shared/types/generic-object';
import { SharedModule } from '@modules/shared/shared.module';
import { CommonUtils, StringUtils } from '@modules/shared/utils/public-api';
import { SohoTabComponent, SohoTabsComponent } from 'ids-enterprise-ng';

export interface TabHeaderItem {
  id: string;
  title: string;
  dismissible?: boolean;
  // component?: Type<any>;
  componentType?: string;
  componentData?: GenericObject;
  isSelected?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppCommonModule,
    DataGridComponent,
    HeaderComponent,
    ListViewComponent,
    ModuleNavComponent,
    SharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ids Ng tester';
  subHeader = '18.3.3';

  searchText = 'Search';
  containerElement = '.tab-panel-container';

  mainTabHeight = 36;
  tabs: TabHeaderItem[] = Array.from({ length: 5 }, (_, index) => ({
    id: String(index),
    title: 'Tab #' + index,
    dismissible: true,
  }));
  @ViewChild(SohoTabsComponent, { static: false })
  sohoTabComponent!: SohoTabsComponent;

  startMenuItems: StartMenuItem[] = [
    {
      id: 'add',
      description: 'Sample Start Menu Item',
      icon: 'add',
    },
  ];

  onClose(event: any) {
    const { tab } = event;
    if (!CommonUtils.isHTMLElement(tab)) {
      return;
    }

    const tabId = tab.getAttribute('data-tabId');
    if (StringUtils.isEmpty(tabId)) {
      return;
    }

    this.tabs = this.tabs.filter(
      (tab) => !StringUtils.isEqualIgnoreCase(tab.id, tabId)
    );
  }

  closeTab() {
    this.sohoTabComponent.remove("3");
  }

  removeTab() {
    this.tabs = this.tabs.filter(
      (tab) => !StringUtils.isEqualIgnoreCase(tab.id, "3")
    );
  }

  onMenuItemSelected(item: StartMenuItem) {}
}
