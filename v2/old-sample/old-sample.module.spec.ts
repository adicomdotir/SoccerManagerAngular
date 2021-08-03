import { OldSampleModule } from './old-sample.module';

describe('OldSampleModule', () => {
  let oldSampleModule: OldSampleModule;

  beforeEach(() => {
    oldSampleModule = new OldSampleModule();
  });

  it('should create an instance', () => {
    expect(oldSampleModule).toBeTruthy();
  });
});
