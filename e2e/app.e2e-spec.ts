import { InternalSystemPage } from './app.po';

describe('internal-system App', () => {
  let page: InternalSystemPage;

  beforeEach(() => {
    page = new InternalSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
