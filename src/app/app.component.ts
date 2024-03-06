import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppCommonModule, DataGridComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ids Ng tester';
  subHeader = "17.5.2"
}
