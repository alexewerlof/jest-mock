// __tests__/actual-redis.test.js
const mockedRedis = require('../__mocks__/redis.js');
const redis = require('redis');

describe('redis', () => {
  it('not to be mocked', () => {
    expect(redis).not.toEqual(mockedRedis);
  });
});
