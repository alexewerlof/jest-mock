// __tests__/redis-explicit-mock.test.js
const mockedRedis = require('../__mocks__/redis.js');
jest.mock('redis');
const redis = require('redis');

describe('redis', () => {
  it('to be mocked', () => {
    expect(redis.createClient()).toEqual('fake client');
    expect(redis.createClient()).toEqual(mockedRedis.createClient());
  });
});
