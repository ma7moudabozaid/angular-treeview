import { TestBed } from '@angular/core/testing';

import { TahalufTreeviewService } from './tahaluf-treeview.service';

describe('TahalufTreeviewService', () => {
  let service: TahalufTreeviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TahalufTreeviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
