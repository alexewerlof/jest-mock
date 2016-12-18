// __tests__/fs-implicit-mock.test.js
const mockedFs = require('../__mocks__/fs.js');
const fs = require('fs');

describe('fs', () => {
  it('to be mocked anyway per #2354', () => {
    // This will fail because fs native node modules don't get automatically mocked
    expect(fs.readFileSync()).toEqual('fake content');
  });
});
