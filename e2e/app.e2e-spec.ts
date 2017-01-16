import { KhaxaPage } from './app.po';

describe('khaxa App', function() {
  let page: KhaxaPage;

  beforeEach(() => {
    page = new KhaxaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('khaxa works!');
  });
});
