

export interface ICurrencyResponseObj{
    base:string,
    date:string,
    rates:any
} 

export interface IModel { 
  fromCurrency:string,
  toCurrency:string,
  inputValue?:number,
  outputValue?:number
}




