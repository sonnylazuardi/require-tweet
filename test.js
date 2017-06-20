var assert = require('assert');
var leftPad = require('./index')('712414574658588672');

leftPad.then(function (leftPad) {
    var paddedString = leftPad('foo', 5);

    assert(paddedString === '  foo', 'Expected paddedString to eql "  foo"');
}).catch(assert.ifError);
