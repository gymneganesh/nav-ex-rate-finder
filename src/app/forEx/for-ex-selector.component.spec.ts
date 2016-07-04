/* tslint:disable:no-unused-variable */

/**
 *  MockFxService
 */
class MockFxService {
  constructor() {

  }

  public getAllCurrencies() {
    return Promise.resolve({base:"12",date:"12032016",rates:{ "AUD": 0.091714, "BGN": 0.12051}});
  }
  public getPercisionForCurrency(input: any) {
    return 2;
  }

  public getOutputResults(inputValues: any) {
    return 3;
  }
}

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import {
  beforeEach, beforeEachProviders, fakeAsync,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ForExSelectorComponent } from './for-ex-selector.component';
import {ICurrencyResponseObj, IModel} from '../services/./icurrency';
import {ForExService} from '.././services/for-ex.service';
import {Mockdata} from '../services/mockdata';
import { provide } from '@angular/core';


beforeEachProviders(() => [ForExSelectorComponent, Mockdata]);

beforeEachProviders(()=>[
   provide(ForExService, {useClass: MockFxService})
])



describe('Component: ForExSelector', () => {

  it('should create an instance', inject([ForExSelectorComponent, ForExService], (forExComp: ForExSelectorComponent, forExService: ForExService) => {
    expect(forExComp).toBeTruthy();
  })
  );

  it('should initialize select drop with default values', inject([ForExSelectorComponent, ForExService], (forExComp: ForExSelectorComponent, forExService: ForExService) => {
    forExComp.ngOnInit();
    expect(forExComp.model.fromCurrency).toEqual("AUD");
    expect(forExComp.model.toCurrency).toEqual("AUD");
  })
  );

  it('should invoke getAllCurrencies method', inject([ForExSelectorComponent, ForExService], (forExComp: ForExSelectorComponent, forExService: ForExService) => {
    spyOn(forExService,'getAllCurrencies').and.callFake(()=>{
     return Promise.resolve(1)
   });
    forExComp.ngOnInit();    
    expect(forExService.getAllCurrencies).toHaveBeenCalled();
  })
  );




});
