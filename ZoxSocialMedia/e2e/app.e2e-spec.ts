import { ZoxSocialMediaPage } from './app.po';

describe('zox-social-media App', function() {
  let page: ZoxSocialMediaPage;

  beforeEach(() => {
    page = new ZoxSocialMediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
