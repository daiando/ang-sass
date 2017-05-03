import { AngSassPage } from './app.po';

describe('ang-sass App', () => {
  let page: AngSassPage;

  beforeEach(() => {
    page = new AngSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
