import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahalufTreeviewComponent } from './tahaluf-treeview.component';

describe('TahalufTreeviewComponent', () => {
  let component: TahalufTreeviewComponent;
  let fixture: ComponentFixture<TahalufTreeviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TahalufTreeviewComponent]
    });
    fixture = TestBed.createComponent(TahalufTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
