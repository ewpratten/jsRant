import { JsRantPage } from './app.po';

describe('js-rant App', function() {
  let page: JsRantPage;

  beforeEach(() => {
    page = new JsRantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
