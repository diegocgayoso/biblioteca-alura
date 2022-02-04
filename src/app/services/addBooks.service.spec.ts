/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddBooksService } from './addBooks.service';

describe('Service: AddBooks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddBooksService]
    });
  });

  it('should ...', inject([AddBooksService], (service: AddBooksService) => {
    expect(service).toBeTruthy();
  }));
});
