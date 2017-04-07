import { LsAngularPage } from './app.po';

describe('ls-angular App', () => {
  let page: LsAngularPage;

  beforeEach(() => {
    page = new LsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
