var leftPadFromId = require('./index')('712414574658588672');

leftPadFromId.then(function (leftPad) {
    console.log(leftPad('foo', 5));
});

var leftPadFromUrl = require('./index')('https://twitter.com/the_kenny/status/712414574658588672');

leftPadFromUrl.then(function (leftPad) {
    console.log(leftPad('foo', 5));
});
