import { shuffle } from 'src/utils/shuffle'

describe('shuffle case', () => {
  test('test shuffle function', () => {
    expect(shuffle([1, 2, 3, 4, 5])).not.toEqual([1, 2, 3, 4, 5])
  })
})
