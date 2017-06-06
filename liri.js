var Twitter = require('twitter');
var keys = require("./keys");
 
var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret,

});
client.get('search/tweets', {
	q: 'dplaisimondce',
	count:10
} 	, function(error, tweets, response) {
  if (!error) {
    tweets.statuses.forEach(function(tweet, index) {
            console.log((index + 1) + ") " + tweet.text);
      
        })
  }
});