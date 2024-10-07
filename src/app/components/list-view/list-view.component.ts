import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { ModalFactoryService } from '@modules/shared/services/modal-factory.service';
import { ListViewModalComponent } from '../list-view-modal/list-view-modal.component';

export interface ListViewDataset {
  id?: string;
  header?: string;
  subheader?: string;
  micro?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [AppCommonModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListViewComponent {
  emptyMessage: SohoEmptyMessageOptions = {
    icon: 'icon-empty-no-alerts-new',
    title: 'Search result',
    info: 'Record not found.',
  };
  searchable = true;

  dataset: ListViewDataset[] = [];

  constructor(private modalFactoryService: ModalFactoryService,) {
    this.setupDataset();
  }

  private setupDataset(): void {
    this.dataset.push({
      header: '063001',
      micro: '10/11/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063002',
      micro: '10/11/2015',
      subheader: 'Part #4212132 has low inventory level',
      disabled: true,
    });
    this.dataset.push({
      header: '063003',
      micro: '10/07/2015',
      subheader: 'Check #112412 parts ordering.',
    });
    this.dataset.push({
      header: '063004',
      micro: '10/07/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063005',
      micro: '10/11/2015',
      subheader: 'Call XYZ Inc at 5 PM',
    });
    this.dataset.push({
      header: '063006',
      micro: '10/11/2015',
      subheader: 'Part #4212132 has low inventory level',
    });
    this.dataset.push({
      header: '063007',
      micro: '07/11/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063008',
      micro: '10/11/2015',
      subheader: 'Part #5212132 has low inventory level',
    });
    this.dataset.push({
      header: '063009',
      micro: '10/07/2015',
      subheader: 'Check #212412 parts ordering.',
    });
    this.dataset.push({
      header: '063010',
      micro: '10/11/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063011',
      micro: '10/11/2015',
      subheader: 'Call TMZ Inc at 5 PM',
    });
    this.dataset.push({
      header: '063012',
      micro: '07/08/2015',
      subheader: 'Part #6212132 has low inventory level',
    });
  }

  showListViewModal(): void {
    const listViewModal = this.modalFactoryService.create({
      component: ListViewModalComponent,
      showCloseButton: true,
      maxWidth: 450,
      title: 'hello',
    });
    listViewModal.open();
  }
}
