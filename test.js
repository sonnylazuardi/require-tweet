var leftPad = require('./index')('712414574658588672');

leftPad.then(function (leftPad) {
    console.log(leftPad('foo', 5));
});