import { NavExRateFinderPage } from './app.po';
import {ICurrencyResponseObj, IModel} from '../src/app/services/./icurrency';
import {Mockdata} from '../src/app/services/./mockdata';


describe('nav-ex-rate-finder App', function () {
  let page: NavExRateFinderPage;
  let mockData: Mockdata;

  beforeEach(() => {
    page = new NavExRateFinderPage();
    mockData = new Mockdata();

  });

  //as angular2  doesn't support protractor's byModel and byBinding func as fallback we are using byCSS to 
  //target the items as mentioned in angular docs

  it('should have a valid Navigation Header', () => {
    page.navigateTo();
    expect(page.getElementTextByCss('app-main nav>div')).toEqual('Exchange Rate Finder');
  });

  it('should have a valid form header', () => {

    expect(page.getElementTextByCss('legend')).toEqual('Currency Converter');

  });

  it('should initialize the dropdown with "AUS" as default value', () => {
    var allCurrencies: string[] = Object.keys(mockData.getAllCurrencies().rates);
    expect(page.getElementTextByCss('#fromCurrency >  option')).toEqual(allCurrencies[0]);
    expect(page.getElementTextByCss('#toCurrency >  option')).toEqual(allCurrencies[0]);
  });

  it('should not display error message on page load', () => {
    let ele = page.getElementById('errorMsg');
    expect(ele.isPresent()).toBe(false);
  })

  //testing direct feed scenario ex: AUD -> USD 
  //timeouts are added purely for testing purpose 
  it('should test the direct feed scenario', () => {
    page.selectOption(page.getElementById('fromCurrency'), "AUD", 500);
    page.selectOption(page.getElementById('toCurrency'), "USD", 500);
    let inputValue = page.getElementById('inputValue');
    let outputValue = page.getElementById('outputValue');
    inputValue.clear();
    inputValue.sendKeys("1");
    // if your test is outrunning the browser
    //to check whether option has changed - for testing purpose only
    expect(outputValue.getAttribute('value')).toEqual('0.84');

  })


  //testing inverted feed scenario  USD -> AUD
  it('should test the inverted feed scenario', () => {
    page.selectOption(page.getElementById('fromCurrency'), "USD", 500);
    page.selectOption(page.getElementById('toCurrency'), "AUD", 500);
    let inputValue = page.getElementById('inputValue');
    let outputValue = page.getElementById('outputValue');
    inputValue.clear();
    inputValue.sendKeys("1");
    // if your test is outrunning the browser
    //to check whether option has changed - for testing purpose only
    expect(outputValue.getAttribute('value')).toEqual('1.19');
  })

  //testing 1:1 feed scenario
  it('should test the 1:1 feed scenario', () => {
    page.selectOption(page.getElementById('fromCurrency'), "AUD", 500);
    page.selectOption(page.getElementById('toCurrency'), "AUD", 500);
    let inputValue = page.getElementById('inputValue');
    let outputValue = page.getElementById('outputValue');
    inputValue.clear();
    inputValue.sendKeys("1");
    // if your test is outrunning the browser
    //to check whether option has changed - for testing purpose only
    expect(outputValue.getAttribute('value')).toEqual('1');

  })

  //testing cross feed scenario AUD -> JPY 
  it('should test the cross  feed scenario', () => {
    page.selectOption(page.getElementById('fromCurrency'), "AUD", 500);
    page.selectOption(page.getElementById('toCurrency'), "JPY", 500);
    let inputValue = page.getElementById('inputValue');
    let outputValue = page.getElementById('outputValue');
    inputValue.clear();
    inputValue.sendKeys("1");
    // if your test is outrunning the browser
    //to check whether option has changed - for testing purpose only
    expect(outputValue.getAttribute('value')).toEqual('100');
  })

//should have 0 percision for  JPY 
  it('should have zero percision on the outputvalue', () => {
    page.selectOption(page.getElementById('fromCurrency'), "AUD", 500);
    page.selectOption(page.getElementById('toCurrency'), "JPY", 500);
    let inputValue = page.getElementById('inputValue');
    let outputValue = page.getElementById('outputValue');
    inputValue.clear();
    inputValue.sendKeys("1.4");
    // if your test is outrunning the browser
    //to check whether option has changed - for testing purpose only
    expect(outputValue.getAttribute('value')).toEqual('141');
  })

//should have 2-decimal percision values  -> USD 
  it('should test the cross  feed scenario', () => {
    page.selectOption(page.getElementById('fromCurrency'), "AUD", 500);
    page.selectOption(page.getElementById('toCurrency'), "USD", 500);
    let inputValue = page.getElementById('inputValue');
    let outputValue = page.getElementById('outputValue');
    inputValue.clear();
    inputValue.sendKeys("1.4");
    // if your test is outrunning the browser
    //to check whether option has changed - for testing purpose only
    expect(outputValue.getAttribute('value')).toEqual('1.17');
  });


  //test input based on the value set in output 
  it('Should have a valid input value', () => {
    page.selectOption(page.getElementById('fromCurrency'), "USD", 500);
    page.selectOption(page.getElementById('toCurrency'), "JPY", 500);
    let inputValue = page.getElementById('inputValue');
    let outputValue = page.getElementById('outputValue');
    inputValue.clear();
    outputValue.clear();
    outputValue.sendKeys("2000");
    // if your test is outrunning the browser
    //to check whether option has changed - for testing purpose only
    expect(inputValue.getAttribute('value')).toEqual('17');
  });

  //should display invalid message for invalid currency selection
  //and make input controls disabled
  it('should test invalid error message for invalid currency selection', () => {
    //setting invalid currency in dropdown BGN and CAD
    let fromCurrency = page.getElementByCss('select#fromCurrency option:nth-child(2)').click();
    let toCurrency = page.getElementByCss('select#toCurrency option:nth-child(4)').click();
    let inputValue = page.getElementById('inputValue');
    let outputValue = page.getElementById('outputValue');
    let eleErrMsg = page.getElementById('errorMsg');
    // if your test is outrunning the browser
    //to check whether option has changed - for testing purpose only
    browser.sleep(2000);

    expect(eleErrMsg.isDisplayed()).toBe(true);
    expect(inputValue.isEnabled()).toBe(false);
    expect(outputValue.isEnabled()).toBe(false);

  })


});
