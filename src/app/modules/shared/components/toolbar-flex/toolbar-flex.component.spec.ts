import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarFlexComponent } from './toolbar-flex.component';

describe('ToolbarFlexComponent', () => {
  let component: ToolbarFlexComponent;
  let fixture: ComponentFixture<ToolbarFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarFlexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
