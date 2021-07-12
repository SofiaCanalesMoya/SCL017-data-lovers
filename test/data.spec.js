import { filterData } from '../src/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('returns data', () => {
    expect(filterData(data[0], 'Human')).toBe(true);
  });
});


