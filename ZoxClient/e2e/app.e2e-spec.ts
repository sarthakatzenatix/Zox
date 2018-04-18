import { ZoxClientPage } from './app.po';

describe('zox-client App', function() {
  let page: ZoxClientPage;

  beforeEach(() => {
    page = new ZoxClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
