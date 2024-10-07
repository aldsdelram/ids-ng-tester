import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { ListViewDataset } from '../list-view/list-view.component';
import { ModalFactoryService } from '@modules/shared/services/modal-factory.service';

@Component({
  selector: 'app-list-view-modal',
  standalone: true,
  imports: [AppCommonModule],
  templateUrl: './list-view-modal.component.html',
  styleUrl: './list-view-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListViewModalComponent {
  @Input() isCardWrapped: boolean = false;

  emptyMessage: SohoEmptyMessageOptions = {
    icon: 'icon-empty-no-alerts-new',
    title: 'Search result',
    info: 'Record not found.',
  };
  searchable = true;

  dataset: ListViewDataset[] = [];

  constructor() {
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
}
