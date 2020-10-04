import requests, { IMAGE_URL } from '../axios/API_END_POINTS';

describe('IMAGE_URL', () => {
  it('should render be a string', () => {
    expect(IMAGE_URL).toEqual(expect.any(String));
  });
});

describe('requests', () => {
  it('should render be a Object', () => {
    expect(requests).toEqual(expect.any(Object));
  });
  it('should Have property trending, netflix, action, TopRated, RomanceMovies, Drama, HorrorMovies', () => {
    expect(requests).toHaveProperty('NetflixOriginals');
    expect(requests).toHaveProperty('Trending');
    expect(requests).toHaveProperty('ActionMovies');
    expect(requests).toHaveProperty('TopRated');
    expect(requests).toHaveProperty('Drama');
    expect(requests).toHaveProperty('RomanceMovies');
    expect(requests).toHaveProperty('HorrorMovies');
  });
  it('should not have any random property', () => {
    expect(requests).not.toHaveProperty('Random');
  });
});
