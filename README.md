# require-tweet
require a node js module from a tweet status. This idea comes from @the_kenny status in response to this article [https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.rfu2w1c66](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.rfu2w1c66).

# How it works?
```
npm install require-tweet
```

and in your index.js file
```
var leftPad = require('require-tweet')('712414574658588672');

leftPad.then(function (leftPad) {
    console.log(leftPad('foo', 5));
});
```

```
node index.js
```

# License 

MIT License by [@sonnylazuardi](http://twitter.com/sonnylazuardi)