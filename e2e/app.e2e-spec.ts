import { CodeRantPage } from './app.po';

describe('code-rant App', function() {
  let page: CodeRantPage;

  beforeEach(() => {
    page = new CodeRantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
