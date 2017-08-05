import { ClientPanelPage } from './app.po';

describe('client-panel App', () => {
  let page: ClientPanelPage;

  beforeEach(() => {
    page = new ClientPanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
