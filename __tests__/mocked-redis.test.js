// __tests__/mocked-redis.test.js
const mockedRedis = require('../__mocks__/redis.js');

jest.mock('redis');

const redis = require('redis');

describe('redis', () => {
  it('to be mocked', () => {
    expect(redis).toEqual(mockedRedis);
  });
});
