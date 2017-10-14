import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('apply proper title case formatting', () => {
    const pipe = new TitleCasePipe();

    expect(pipe.transform('THE rise of thE PLanET of the APES')).toBe('The Rise of the Planet of the Apes');
  });
});
