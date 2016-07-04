/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ForExService } from './for-ex.service';

describe('RestfulService Service', () => {
  beforeEachProviders(() => [ForExService]);

  it('Should create a vaid service',
      inject([ForExService], (service: ForExService) => {
    expect(service).toBeTruthy();
  }));

  
});
