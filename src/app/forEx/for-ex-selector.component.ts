import { Component, OnInit, OnChanges} from '@angular/core';
import { NgForm }    from '@angular/common';
import {ICurrencyResponseObj, IModel} from '../services/./icurrency';
import {ForExService} from '.././services/for-ex.service';

@Component({
  moduleId: module.id,
  selector: 'forex-container',
  templateUrl: 'for-ex-selector.component.html',
  styleUrls: ['for-ex-selector.component.css'],
  providers: [ForExService]
})


export class ForExSelectorComponent implements OnInit, OnChanges {
  private data: any = {}
  private model: IModel = <IModel>{};
  private inputValues: any = [];
  private currencyResult: number = 1;
  constructor(private _currencyService: ForExService) {
   
    
  }

//service to get currencie for all countries
  ngOnInit() {
    this._currencyService.getAllCurrencies().then((response: ICurrencyResponseObj) => this.data = response.rates);
     this.initModel();

  }

  initModel(){
    this.model.fromCurrency = "AUD";
    this.model.toCurrency = "AUD";
    
  }
  ngOnChanges(changes: any) {
    console.log("The changes" + changes);
  }

  getCurrencies() {
    return Object.keys(this.data);
  }


//set the results based on the exchange rate and the supplied input
  onCurrencyChange(val: string) {

    var result = this.getCurrencyRate();
    if (result == -1) {
      this.model.inputValue = this.model.outputValue = null;
    }
    else {
      switch (val) {
        case "input": {
          if( this.model.inputValue == null ){
              this.model.outputValue = null;
          }
          else{
          this.model.outputValue = parseFloat(((result * this.model.inputValue)).toFixed(this.getPercision()));
          }
          break;
        }
        case "output": {
          if( this.model.outputValue == null ){
              this.model.inputValue = null;
          }
          else{
          this.model.inputValue = parseFloat(((this.model.outputValue/result)).toFixed(this.getPercision()));
          }
          break;
        }
        default:
          break;
      }
    }
  }

  //get currency rate for the selected dropdown values
  getCurrencyRate() {
      this.inputValues[0] = this.model.fromCurrency;
      this.inputValues[1] = this.model.toCurrency;
      this.currencyResult = this._currencyService.getOutputResults(this.inputValues);
      if (this.currencyResult != -1) {  
        return this.currencyResult;
      }
      else {
        this.currencyResult = -1;
        return this.currencyResult;
      }
  }

//get percision for the selected country
  getPercision(){
   return this._currencyService.getPercisionForCurrency(this.model.toCurrency);
  }
  //just for debugging purpose
  showSelectedValue() {
    return JSON.stringify(this.model) + "Array" + JSON.stringify(this.inputValues)
  }
}
