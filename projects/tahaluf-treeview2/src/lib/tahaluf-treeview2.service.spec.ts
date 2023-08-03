import { TestBed } from '@angular/core/testing';

import { TahalufTreeview2Service } from './tahaluf-treeview2.service';

describe('TahalufTreeview2Service', () => {
  let service: TahalufTreeview2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TahalufTreeview2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
