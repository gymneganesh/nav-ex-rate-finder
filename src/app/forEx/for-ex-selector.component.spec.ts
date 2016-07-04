/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ForExSelectorComponent } from './for-ex-selector.component';
import {ICurrencyResponseObj, IModel} from '../services/./icurrency';
import {ForExService} from '.././services/for-ex.service';

beforeEachProviders(() => [ForExSelectorComponent,ForExService]);

describe('Component: ForExSelector', () => {
  it('should create an instance', inject([ForExSelectorComponent,ForExService],(forExComp:ForExSelectorComponent,forExService:ForExService)=>{
    expect(forExComp).toBeTruthy();

  })
  );
});
