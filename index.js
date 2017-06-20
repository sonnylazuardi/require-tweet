var Twitter = require('twitter');
var Promise = require('bluebird');
var htmlEndecode = require('./htmlEndecode');

var tweet_cache = {};

var requireTweet = function(tweet_id) {

    var client = new Twitter({
        consumer_key: 'ARWRCaE9xeUkVq5T4ZZPxmIST',
        consumer_secret: 'AgPnR8EVZHITvGxA0yZ4UPnmVPrBTFSH59L2eq8X1jl0avaNHe',
        access_token_key: '59897483-e5IMrcXTHwPKuW0G2D1dIwwrOJ55QNEKMj3otkRsc',
        access_token_secret: '5vlFvnoWhlNQV0wJ7UvKZWl544D2oA4eVpOx64XODvpWh'
    });

    return new Promise(function (resolve, reject) {
        if (tweet_cache[tweet_id]) return resolve(tweet_cache[tweet_id]);

        client.get('statuses/show', {
            id: tweet_id
        }, function(error, tweet, response) {
            if (error) reject(response);
            eval("var module = " + htmlEndecode.htmlDecode(tweet.text));
            tweet_cache[tweet_id] = module;
            resolve(module);
        })
    });
}

module.exports = requireTweet;
