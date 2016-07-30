import { DuggieAppPage } from './app.po';

describe('duggie-app App', function() {
  let page: DuggieAppPage;

  beforeEach(() => {
    page = new DuggieAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
