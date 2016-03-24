var expect = require('chai').expect
var togglClient = require('../../models/toggl_client.js')
var Mitm = require("mitm")
var mitm = Mitm()


describe('Start a time entry', function() {

  mitm.on("request", function(req, res) {
    res.end(JSON.stringify({
        "data":
        {
            "id":436694100,
            "pid":123,
            "wid":777,
            "billable":false,
            "start":"2013-03-05T07:58:58.000Z",
            "duration":-1362470338,
            "description":"Meeting with possible clients",
            "tags":["billed"]
        }
    }))
  });

  it('return true', function(done) {
    result = togglClient.startTimeEntry('eceed0f5dda6e9e282d7ccf6505dbb20', '14506234', function(timeEntry) {
      expect(timeEntry.id).to.be.a('number');
      done();
    });
  });
});

describe('Stop a time entry', function() {

  mitm.on("request", function(req, res) {
    res.end(JSON.stringify({
        "data":
        {
            "id":436694100,
            "pid":123,
            "wid":777,
            "billable":false,
            "start":"2013-03-05T07:58:58.000Z",
            "duration":-1362470338,
            "description":"Meeting with possible clients",
            "tags":["billed"]
        }
    }))
  });

  it('return true', function(done) {
    result = togglClient.stopTimeEntry('eceed0f5dda6e9e282d7ccf6505dbb20', '356474659', function(timeEntry) {
      expect(timeEntry.id).to.be.a('number');
      done();
    });
  });
});




