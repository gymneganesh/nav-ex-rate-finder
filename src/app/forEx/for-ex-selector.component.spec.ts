/* tslint:disable:no-unused-variable */


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


beforeEachProviders(() => [ForExSelectorComponent, ForExService, Mockdata]);

// beforeEachProviders(() => [
//  // provide(ForExService, { useClass: MockFxService })
// ])

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

  it('should test 1:1 feed scenario', inject([ForExSelectorComponent, ForExService], (forExComp: ForExSelectorComponent, forExService: ForExService) => {
    spyOn(forExComp, 'onCurrencyChange').and.callThrough();
    forExComp.ngOnInit();
    forExComp.model.fromCurrency = "AUD";
    forExComp.model.toCurrency = "AUD";
    forExComp.model.inputValue = 1;
    forExComp.onCurrencyChange('input');
    expect(forExComp.onCurrencyChange).toHaveBeenCalled();
    expect(forExComp.model.outputValue).toBe(1);

  })
  );
  it('should test direct feed scenario', inject([ForExSelectorComponent, ForExService], (forExComp: ForExSelectorComponent, forExService: ForExService) => {
    spyOn(forExComp, 'onCurrencyChange').and.callThrough();
    forExComp.ngOnInit();
    forExComp.model.fromCurrency = "AUD";
    forExComp.model.toCurrency = "USD";
    forExComp.model.inputValue = 1;
    forExComp.onCurrencyChange('input');
    expect(forExComp.onCurrencyChange).toHaveBeenCalled();
    expect(forExComp.model.outputValue).toBe(0.84);

  })
  );
  it('should test inverted feed scenario', inject([ForExSelectorComponent, ForExService], (forExComp: ForExSelectorComponent, forExService: ForExService) => {
    spyOn(forExComp, 'onCurrencyChange').and.callThrough();
    forExComp.ngOnInit();
    forExComp.model.fromCurrency = "USD";
    forExComp.model.toCurrency = "AUD";
    forExComp.model.inputValue = 1;
    forExComp.onCurrencyChange('input');
    expect(forExComp.onCurrencyChange).toHaveBeenCalled();
    expect(forExComp.model.outputValue).toBe(1.19);

  })
  );

  it('should test cross feed scenario', inject([ForExSelectorComponent, ForExService], (forExComp: ForExSelectorComponent, forExService: ForExService) => {
    spyOn(forExComp, 'onCurrencyChange').and.callThrough();
    forExComp.ngOnInit();
    forExComp.model.fromCurrency = "AUD";
    forExComp.model.toCurrency = "JPY";
    forExComp.model.inputValue = 0;
    forExComp.model.inputValue = 1;
    forExComp.onCurrencyChange('input');
    expect(forExComp.onCurrencyChange).toHaveBeenCalled();
    expect(forExComp.model.outputValue).toBe(100);

  })
  );

  it('should have percision "0" for JPY ', inject([ForExSelectorComponent, ForExService], (forExComp: ForExSelectorComponent, forExService: ForExService) => {

    forExComp.ngOnInit();
    forExComp.model.toCurrency = "JPY";
    var percision = forExComp.getPercision();
    expect(percision).toBe(0);
  })
  );

  it('should have percision "2" for AUD', inject([ForExSelectorComponent, ForExService], (forExComp: ForExSelectorComponent, forExService: ForExService) => {
    forExComp.ngOnInit();
    forExComp.model.toCurrency = "AUD";

    var percision = forExComp.getPercision();
    expect(percision).toBe(2);
  })
  );

  it('should invoke getAllCurrencies method', inject([ForExSelectorComponent, ForExService], (forExComp: ForExSelectorComponent, forExService: ForExService) => {
    var result = spyOn(forExService, 'getAllCurrencies').and.callThrough();
    forExComp.ngOnInit();
    expect(forExService.getAllCurrencies).toHaveBeenCalled();
  })
  );


});
