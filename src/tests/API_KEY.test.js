import API_KEY from '../axios/API_KEY';

describe('API_KEY', () => {
  it('should render be a string', () => {
    expect(API_KEY).toEqual(expect.any(String));
  });
});
