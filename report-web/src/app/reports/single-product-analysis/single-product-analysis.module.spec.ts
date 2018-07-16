import {SingleProductAnalysisModule} from './single-product-analysis.module';

describe('SingleProductAnalysisModule', () => {
  let singleProductAnalysisModule: SingleProductAnalysisModule;

  beforeEach(() => {
    singleProductAnalysisModule = new SingleProductAnalysisModule();
  });

  it('should create an instance', () => {
    expect(singleProductAnalysisModule).toBeTruthy();
  });
});
