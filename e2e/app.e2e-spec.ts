import { AngularHTTPTestPage } from './app.po';

describe('angular-httptest App', function() {
  let page: AngularHTTPTestPage;

  beforeEach(() => {
    page = new AngularHTTPTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
