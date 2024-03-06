import { Component, Input } from '@angular/core';
import { AppCommonModule } from '@modules/app-common/app-common.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppCommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() subHeader = '';
}
