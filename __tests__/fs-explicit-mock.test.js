// __tests__/fs-explicit-mock.test.js
const mockedFs = require('../__mocks__/fs.js');
jest.mock('fs');
const fs = require('fs');

describe('fs', () => {
  it('to be mocked', () => {
    expect(fs.readFileSync()).toEqual('fake content');
    expect(fs.readFileSync()).toEqual(mockedFs.readFileSync());
  });
});
