import { NavExRateFinderPage } from './app.po';

describe('nav-ex-rate-finder App', function() {
  let page: NavExRateFinderPage;

  beforeEach(() => {
    page = new NavExRateFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
