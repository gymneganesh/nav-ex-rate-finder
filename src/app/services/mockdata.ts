import {ICurrencyResponseObj} from './icurrency'

export class Mockdata {
    private countriesCurrency : ICurrencyResponseObj ;
    private availableCurrencyForExchange :any;
    private referenceTableObj:any;
    private precisionForCurrency:any;
    private validCurrencyPairs:any;

    constructor() {
        this.initMockData();
    }

    getAllCurrencies() {
        return this.countriesCurrency;
    }

    getValidExchangeCurrencies(){
        return this.availableCurrencyForExchange;
    }

    getValidCurrencyPairs(){
        return this.validCurrencyPairs;
    }

    getReferenceTableObject(){
        return this.referenceTableObj;
    }

    getPrecisionForCurrency(currency : string){
        return this.precisionForCurrency[currency];
    }

    initMockData() {
        this.countriesCurrency= { "base": "ZAR", "date": "2016-07-01", "rates": { "AUD": 0.091714, "BGN": 0.12051, "BRL": 0.22082, "CAD": 0.08867, "CHF": 0.066764, "CNY": 0.45667, "CZK": 1.6694, "DKK": 0.45832, "GBP": 0.051655, "HKD": 0.53235, "HRK": 0.46359, "HUF": 19.504, "IDR": 899.52, "ILS": 0.2637, "INR": 4.6196, "JPY": 7.0425, "KRW": 78.611, "MXN": 1.2436, "MYR": 0.27344, "NOK": 0.5729, "NZD": 0.095559, "PHP": 3.2248, "PLN": 0.27092, "RON": 0.27825, "RUB": 4.394, "SEK": 0.5786, "SGD": 0.092176, "THB": 2.4052, "TRY": 0.19766, "USD": 0.068613, "EUR": 0.061619 } };

        this.availableCurrencyForExchange = ["AUD", "CAD", "CNV", "CZK", "DKK", "EUR", "GBP", "JPY", "NOK", "NZD", "USD"];

        this.validCurrencyPairs= {
            "AUDUSD": 0.8371,

            "CADUSD": 0.8711,

            "USDCNY": 6.1715,

            "EURUSD": 1.2315,

            "GBPUSD": 1.5683,

            "NZDUSD": 0.7750,

            "USDJPY": 119.95,

            "EURCZK": 27.6028,

            "EURDKK": 7.4405,

            "EURNOK": 8.6651
        };
        this.referenceTableObj = {
            "AUD": {
                "AUD": "1:1",
                "CAD": "USD",
                "CNY": "USD",
                "CZK": "USD",
                "DKK": "USD",
                "EUR": "USD",
                "GBP": "USD",
                "JPY": "USD",
                "NOK": "USD",
                "NZD": "USD",
                "USD": "D"
            },
            "CAD": {
                "AUD": "USD",
                "CAD": "1:1",
                "CNY": "USD",
                "CZK": "USD",
                "DKK": "USD",
                "EUR": "USD",
                "GBP": "USD",
                "JPY": "USD",
                "NOK": "USD",
                "NZD": "USD",
                "USD": "D"
            },
            "CNY": {
                "AUD": "USD",
                "CAD": "USD",
                "CNY": "1:1",
                "CZK": "USD",
                "DKK": "USD",
                "EUR": "USD",
                "GBP": "USD",
                "JPY": "USD",
                "NOK": "USD",
                "NZD": "USD",
                "USD": "D"
            },
            "CZK": {
                "AUD": "USD",
                "CAD": "USD",
                "CNY": "USD",
                "CZK": "1:1",
                "DKK": "EUR",
                "EUR": "Inv",
                "GBP": "USD",
                "JPY": "USD",
                "NOK": "EUR",
                "NZD": "USD",
                "USD": "EUR"
            },
            "DKK": {
                "AUD": "USD",
                "CAD": "USD",
                "CNY": "USD",
                "CZK": "EUR",
                "DKK": "1:1",
                "EUR": "Inv",
                "GBP": "USD",
                "JPY": "USD",
                "NOK": "EUR",
                "NZD": "USD",
                "USD": "EUR"
            },
            "EUR": {
                "AUD": "USD",
                "CAD": "USD",
                "CNY": "USD",
                "CZK": "D",
                "DKK": "D",
                "EUR": "1:1",
                "GBP": "USD",
                "JPY": "USD",
                "NOK": "D",
                "NZD": "USD",
                "USD": "D"
            },
            "GBP": {
                "AUD": "USD",
                "CAD": "USD",
                "CNY": "USD",
                "CZK": "USD",
                "DKK": "USD",
                "EUR": "USD",
                "GBP": "1:1",
                "JPY": "USD",
                "NOK": "USD",
                "NZD": "USD",
                "USD": "D"
            },
            "JPY": {
                "AUD": "USD",
                "CAD": "USD",
                "CNY": "USD",
                "CZK": "USD",
                "DKK": "USD",
                "EUR": "USD",
                "GBP": "USD",
                "JPY": "1:1",
                "NOK": "USD",
                "NZD": "USD",
                "USD": "Inv"
            },
            "NOK": {
                "AUD": "USD",
                "CAD": "USD",
                "CNY": "USD",
                "CZK": "EUR",
                "DKK": "EUR",
                "EUR": "Inv",
                "GBP": "USD",
                "JPY": "USD",
                "NOK": "1:1",
                "NZD": "USD",
                "USD": "EUR"
            },
            "NZD": {
                "AUD": "USD",
                "CAD": "USD",
                "CNY": "USD",
                "CZK": "USD",
                "DKK": "USD",
                "EUR": "USD",
                "GBP": "USD",
                "JPY": "USD",
                "NOK": "USD",
                "NZD": "1:1",
                "USD": "D"
            },
            "USD": {
                "AUD": "Inv",
                "CAD": "Inv",
                "CNY": "Inv",
                "CZK": "EUR",
                "DKK": "EUR",
                "EUR": "Inv",
                "GBP": "Inv",
                "JPY": "D",
                "NOK": "EUR",
                "NZD": "Inv",
                "USD": "1:1"
            }

        };

        this.precisionForCurrency= {
            "AUD": 2,
            "CAD": 2,
            "CNY": 2,
            "CZK": 2,
            "DKK": 2,
            "EUR": 2,
            "GBP": 2,
            "JPY": 0,
            "NOK": 2,
            "NZD": 2,
            "USD": 2
        }
    }

}







