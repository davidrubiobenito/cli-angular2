import { CliAngular2Page } from './app.po';

describe('cli-angular2 App', () => {
  let page: CliAngular2Page;

  beforeEach(() => {
    page = new CliAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
