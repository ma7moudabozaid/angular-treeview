import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahTreeviewComponent } from './tah-treeview.component';

describe('TahTreeviewComponent', () => {
  let component: TahTreeviewComponent;
  let fixture: ComponentFixture<TahTreeviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TahTreeviewComponent]
    });
    fixture = TestBed.createComponent(TahTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
