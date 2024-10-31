import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AppCommonModule } from '@modules/app-common/app-common.module';

@Component({
  selector: 'app-toolbar-flex',
  standalone: true,
  imports: [AppCommonModule],
  templateUrl: './toolbar-flex.component.html',
  styleUrl: './toolbar-flex.component.css',
})
export class ToolbarFlexComponent implements OnInit {
  @Input() title = 'IDS Ng Tester';

  @ViewChild('template', { static: true }) template!: TemplateRef<ElementRef>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.element.nativeElement.remove();
  }
}
