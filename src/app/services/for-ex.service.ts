import { Injectable, Inject } from '@angular/core';
import {ICurrencyResponseObj} from './icurrency';
import {Mockdata} from './mockdata'

@Injectable()
export class ForExService {

  private mockData:Mockdata;

  constructor() {
      this.mockData = new Mockdata();
  }

  //get all available currencies 
  getAllCurrencies() {
    return Promise.resolve(this.mockData.getAllCurrencies());

  }
  
  getOutputResults(inputObj: [any]) {
    return  (this.performOperation(inputObj));
  } 

//func to get lookup result and exec correspoding target
  performOperation(inputObj: any) {

    var result = this.getResultFromTableObject(inputObj);

    switch (result) {
      case "1:1": {
        return 1;
      }

      case "-1":{
         return -1;
      }

      case "D": {
         return this.mockData.getValidCurrencyPairs()[this.concatInput(inputObj)];
      }

      case "Inv":{
          return (1/(this.mockData.getValidCurrencyPairs()[this.swapInput(inputObj)]));
      }
      default:{
         var value = (this.performOperation( new Array(result,inputObj[1])))*(this.performOperation(new Array(inputObj[0],result)));
          return value;
      }
    }

  }

  getResultFromTableObject(inputObj: any) {
    var response:any ;
    try {
      if((this.mockData.getValidExchangeCurrencies().indexOf(inputObj[0]) != -1) && (this.mockData.getValidExchangeCurrencies().indexOf(inputObj[1]) != -1) ){
        response = this.mockData.getReferenceTableObject()[inputObj[0]][inputObj[1]];
      }
      else{
          response =  "-1";
      }

    } catch (error) {
            response =  "-1"
    }
    finally{
        return response;
    }
  }

  concatInput(obj: [any]) {
    return obj[0] + obj[1];
  }

  swapInput(obj: [any]) {
    return obj[1] + obj[0]
  }

  getPercisionForCurrency(currency:string){
    return this.mockData.getPrecisionForCurrency(currency);
  }






}
