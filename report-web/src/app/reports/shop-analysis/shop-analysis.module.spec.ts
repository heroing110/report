import {ShopAnalysisModule} from './shop-analysis.module';

describe('ShopAnalysisModule', () => {
  let shopAnalysisModule: ShopAnalysisModule;

  beforeEach(() => {
    shopAnalysisModule = new ShopAnalysisModule();
  });

  it('should create an instance', () => {
    expect(shopAnalysisModule).toBeTruthy();
  });
});
