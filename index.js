var Twitter = require('twitter');
var Promise = require('bluebird');
var htmlEndecode = require('./htmlEndecode');

var consumer_key = process.env.REQUIRE_TWEET_CONSUMER_KEY || 'ARWRCaE9xeUkVq5T4ZZPxmIST';
var consumer_secret = process.env.REQUIRE_TWEET_CONSUMER_SECRET || 'AgPnR8EVZHITvGxA0yZ4UPnmVPrBTFSH59L2eq8X1jl0avaNHe';
var access_token_key = process.env.REQUIRE_TWEET_ACCESS_TOKEN_KEY || '59897483-e5IMrcXTHwPKuW0G2D1dIwwrOJ55QNEKMj3otkRsc';
var access_token_secret = process.env.REQUIRE_TWEET_ACCESS_TOKEN_SECRET || '5vlFvnoWhlNQV0wJ7UvKZWl544D2oA4eVpOx64XODvpWh';

var requireTweet = function(tweet_id) {

    var client = new Twitter({
        consumer_key: consumer_key,
        consumer_secret: consumer_secret,
        access_token_key: access_token_key,
        access_token_secret: access_token_secret
    });

    return new Promise(function (resolve, reject) {
        client.get('statuses/show', {
            id: tweet_id
        }, function(error, tweet, response) {
            if (error) reject(response);
            eval("var module = " + htmlEndecode.htmlDecode(tweet.text));
            resolve(module);
        })
    });
}

module.exports = requireTweet;
