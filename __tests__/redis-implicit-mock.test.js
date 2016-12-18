// __tests__/redis-implicit-mock.test.js
const mockedRedis = require('../__mocks__/redis.js');
const redis = require('redis');

describe('redis', () => {
  it('to be mocked anyway per #2354', () => {
    expect(redis.createClient()).toEqual('fake client');
    expect(redis.createClient()).toEqual(mockedRedis.createClient());
  });
});
