# require-tweet
require a node js module from a tweet status. This idea comes from [@the_kenny](https://twitter.com/the_kenny/status/712414574658588672) status in response to this article [https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.rfu2w1c66](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.rfu2w1c66).

# How it works?
```
npm install require-tweet
```

and in your index.js file
```
/* From @the_kenny status
* https://twitter.com/the_kenny/status/712414574658588672
* function leftpad(str,len,ch){str=String(str);var i=-1;if(!ch && ch !== 0)ch= ' ';len=len-str.length;while (++i<len){str=ch+str;}return str;}
*/

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