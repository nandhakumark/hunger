import { HungerV1Page } from './app.po';

describe('hunger-v1 App', function() {
  let page: HungerV1Page;

  beforeEach(() => {
    page = new HungerV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
