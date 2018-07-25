import {RegionAnalysisModule} from './region-analysis.module';

describe('RegionAnalysisModule', () => {
  let regionAnalysisModule: RegionAnalysisModule;

  beforeEach(() => {
    regionAnalysisModule = new RegionAnalysisModule();
  });

  it('should create an instance', () => {
    expect(regionAnalysisModule).toBeTruthy();
  });
});
