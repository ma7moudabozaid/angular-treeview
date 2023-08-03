import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahalufTreeview2Component } from './tahaluf-treeview2.component';

describe('TahalufTreeview2Component', () => {
  let component: TahalufTreeview2Component;
  let fixture: ComponentFixture<TahalufTreeview2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TahalufTreeview2Component]
    });
    fixture = TestBed.createComponent(TahalufTreeview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
