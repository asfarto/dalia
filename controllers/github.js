var githubhook = require('githubhook');
var github = githubhook({
    /* options */
    //host: "0.0.0.0",
    //port: 8082,
    //path: "/github/callback",
    //secret: "123456"
});

github.listen();

github.on('*', function (event, repo, ref, data) {
    console.log('*: '+ event + ' ' + repo + ' ' + ref + ' ' + data );
});

github.on('event', function (repo, ref, data) {
    console.log('event: '+ repo + ' ' + ref + ' ' + data );
});

github.on('event:reponame', function (ref, data) {
    console.log('Event: '+ repo + ' ' + ref + ' ' + data );
});

github.on('event:reponame:ref', function (data) {
    console.log('event:reponame:ref: '+ data );
});

github.on('reponame', function (event, ref, data) {
    console.log('reponame: '+ event + ' ' + ref + ' ' + data );
});

github.on('reponame:ref', function (event, data) {
    console.log('reponame:ref: '+ repo + ' ' + ' ' + data );
});

// if you'd like to programmatically stop listening
// github.stop();
