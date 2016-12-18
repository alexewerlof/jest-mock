// __tests__/actual-redis.test.js
const redis = require('redis');

jest.unmock('redis');

describe('redis', () => {
  it('not to be mocked', () => {
    expect(redis).not.toEqual(require('../__mocks__/redis.js'));
  });
});
