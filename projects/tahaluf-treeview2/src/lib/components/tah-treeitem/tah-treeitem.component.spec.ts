import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahTreeitemComponent } from './tah-treeitem.component';

describe('TahTreeitemComponent', () => {
  let component: TahTreeitemComponent;
  let fixture: ComponentFixture<TahTreeitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TahTreeitemComponent]
    });
    fixture = TestBed.createComponent(TahTreeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
