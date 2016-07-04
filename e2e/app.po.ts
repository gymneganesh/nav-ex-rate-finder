//helper class for end to end testing
export class NavExRateFinderPage {
  navigateTo() {
    return browser.get('/');
  }

  //element selector based on css
  getElementTextByCss(css: string) {
    return element.all(by.css(css)).get(0).getText();
  }

// element text selector based on id
  getElementTextById(id: string) {
    return element(by.css('#' + id)).getText();
  }

//element selector based on css
  getElementByCss(name: string) {
    return element(by.css(name));
  }

//element selector based on id
  getElementById(id: string) {
    return element(by.id(id));
  }

  //select the  option based on the item passed to the function
  selectOption(element:any, item:string, milliseconds:number) {
    var desiredOption;
    element.all(by.tagName('option'))
      .then(function findMatchingOption(options) {
        options.some(function (option) {
          option.getText().then(function doesOptionMatch(text) {
            if (text.indexOf(item) != -1) {
              desiredOption = option;
              return true;
            }
          });
        });
      })
      .then(function clickOption() {
        if (desiredOption) {
          desiredOption.click();
        }
      });
    if (typeof milliseconds != 'undefined') {
      browser.sleep(milliseconds);
    }
  };


}
