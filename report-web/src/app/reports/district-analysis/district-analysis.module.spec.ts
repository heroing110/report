import {DistrictAnalysisModule} from './district-analysis.module';

describe('RegionalAnalysisModule', () => {
  let regionalAnalysisModule: DistrictAnalysisModule;

  beforeEach(() => {
    regionalAnalysisModule = new DistrictAnalysisModule();
  });

  it('should create an instance', () => {
    expect(regionalAnalysisModule).toBeTruthy();
  });
});
