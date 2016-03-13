var querystring = require('querystring');
var http = require('http');


// curl -v -u 1971800d4d82861d8f2c1651fea4d212:api_token \
//     -H "Content-Type: application/json" \
//     -d '{"time_entry":{"description":"Meeting with possible clients",
//                        "tags":["billed"],
//                        "duration":1200,
//                        "start":"2013-03-05T07:58:58.000Z",
//                        "pid":123,
//                        "created_with":"curl"}}' \
//     -X POST https://www.toggl.com/api/v8/time_entries

exports.createTimeEntry = function(apiToken, duration, callback) {
  
  var postData = querystring.stringify({
      'time_entry' : {
        'description' : 'Testing Api',
        'tags' : ['test'],
        'duration' : duration,
        'start' : '2016-03-05T07:58:58.000Z',
        'pid' : '123',
        'created_with' : 'dalia'
      }
  });

  var postOptions = {
      host: 'www.toggl.com',
      path: '/api/v8/time_entries',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': new Buffer(apiToken + ':api_token').toString('base64')
      }
  };

  var postReq = http.request(postOptions, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        callback('Response: ' + chunk);
      });
  });

  postReq.write(postData);
  postReq.end();

}