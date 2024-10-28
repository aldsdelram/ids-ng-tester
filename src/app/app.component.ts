import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HeaderComponent } from './components/header/header.component';
import { ListViewComponent } from './components/list-view/list-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppCommonModule, DataGridComponent, HeaderComponent, ListViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ids Ng tester - List View Issues';
  subHeader = "v18.3.3"

  fields = Array.from({length: 10}, (_, i) => 'field' + (i + 1))
}
