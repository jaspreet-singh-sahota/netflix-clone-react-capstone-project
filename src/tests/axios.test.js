import fetchMovieCollection from '../axios/axios';

describe('async operation on api calls', () => {
  it('should be defined', () => {
    expect(fetchMovieCollection()).toBeDefined();
  });

  it('should fetch all data', async () => {
    const data = await fetchMovieCollection();
    expect(data).toBeTruthy();
  });
});
