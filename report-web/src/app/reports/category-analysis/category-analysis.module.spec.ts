import {CategoryAnalysisModule} from './category-analysis.module';

describe('CategoryAnalysisModule', () => {
  let categoryAnalysisModule: CategoryAnalysisModule;

  beforeEach(() => {
    categoryAnalysisModule = new CategoryAnalysisModule();
  });

  it('should create an instance', () => {
    expect(categoryAnalysisModule).toBeTruthy();
  });
});
