var querystring = require('querystring');
var https = require('https');
var TimeEntry = require('./time_entry.js')
var util = require('util')

// curl -v -u 1971800d4d82861d8f2c1651fea4d212:api_token \
//     -H "Content-Type: application/json" \
//     -d '{"time_entry":{"description":"Meeting with possible clients",
//                        "tags":["billed"],
//                        "pid":123,
//                        "created_with":"curl"}}' \
//     -X POST https://www.toggl.com/api/v8/time_entries/start

exports.startTimeEntry = function(apiToken, pid, callback) {
  
  var postData = JSON.stringify({
    'time_entry' : {
      'description' : 'Testing Api',
      'tags' : ['test'],
      'pid' : pid,
      'created_with' : 'dalia'
    }
  });

  var postOptions = {
      hostname: 'www.toggl.com',
      path: '/api/v8/time_entries/start',
      method: 'POST',
      auth: apiToken + ':api_token',
      headers: {
          "content-type": "application/json",
      }
  };

  var postReq = https.request(postOptions, function(res) {
      res.setEncoding('utf8');
      var body = '';
      res.on('data', function (chunk) {
        body += chunk;
      });
      res.on('end', function () {
        response = JSON.parse(body);
        timenEntry = new TimeEntry(response['data']);
        callback(timenEntry);
      });
  });

  postReq.write(postData);
  postReq.end();

}

// curl -v -u 1971800d4d82861d8f2c1651fea4d212:api_token \
//     -H "Content-Type: application/json" \
//     -X PUT https://www.toggl.com/api/v8/time_entries/436694100/stop

exports.stopTimeEntry = function(apiToken, timeEntryId, callback) {

  var putOptions = {
      hostname: 'www.toggl.com',
      path: util.format('/api/v8/time_entries/%s/stop', timeEntryId),
      method: 'PUT',
      auth: apiToken + ':api_token',
      headers: {
          "content-type": "application/json",
      }
  };

  var putReq = https.request(putOptions, function(res) {
      res.setEncoding('utf8');
      var body = '';
      res.on('data', function (chunk) {
        body += chunk;
      });
      res.on('end', function () {
        response = JSON.parse(body);
        timenEntry = new TimeEntry(response['data']);
        callback(timenEntry);
      });
  });

  putReq.end();
}
