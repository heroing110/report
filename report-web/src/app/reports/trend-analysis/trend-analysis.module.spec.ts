import {TrendAnalysisModule} from './trend-analysis.module';

describe('TrendAnalysisModule', () => {
  let trendAnalysisModule: TrendAnalysisModule;

  beforeEach(() => {
    trendAnalysisModule = new TrendAnalysisModule();
  });

  it('should create an instance', () => {
    expect(trendAnalysisModule).toBeTruthy();
  });
});
