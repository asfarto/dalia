var assert = require('chai').assert
var togglClient = require('../../models/toggl_client.js')

describe('Create a time entry', function() {
  it('return true', function(done) {
    result = togglClient.createTimeEntry('eceed0f5dda6e9e282d7ccf6505dbb20', 1200, function(res) {
      assert.equal(res, 'Ok');
      done();
    });
  });
});