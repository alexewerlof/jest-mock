// __tests__/mocked-redis.test.js

const redis = require('redis');

jest.mock('redis');

describe('redis', () => {
  it('to be mocked', () => {
    expect(redis).toEqual(require('../__mocks__/redis.js'));
  });
});
