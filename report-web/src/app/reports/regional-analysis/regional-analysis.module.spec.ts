import {RegionalAnalysisModule} from './regional-analysis.module';

describe('RegionalAnalysisModule', () => {
  let regionalAnalysisModule: RegionalAnalysisModule;

  beforeEach(() => {
    regionalAnalysisModule = new RegionalAnalysisModule();
  });

  it('should create an instance', () => {
    expect(regionalAnalysisModule).toBeTruthy();
  });
});
