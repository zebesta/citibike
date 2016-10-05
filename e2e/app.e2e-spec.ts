import { CitibikePage } from './app.po';

describe('citibike App', function() {
  let page: CitibikePage;

  beforeEach(() => {
    page = new CitibikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
