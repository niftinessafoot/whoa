# Whoa
A throttle/debounce library. Use it to time events and reduce XHR server loads.

## Wait, _another_ one?
Yeah. These things are like birdhouses. Why do we build a birdhouse when there are billions out there? Because we can. There are many debounce and trottle libraries. This one’s mine.

## Why would I use this one?
You shouldn’t. Go use lodash or something. Or make your own.

But mine’s here if you _really_ wanna use it. It’s got full unit test passing and typings and everything.
## usage

### throttle
```js
import {throttle} from '@afoot/whoa;

const callback = (evt)=>{console.log(evt);};
const throttledCallback = throttle(callback, 250);

document.body.addEventListener('mousemove',throttledCallback); //Only fires once every 250ms;
```

### debounce
```js
import {debounce} from '@afoot/whoa;

const callback = (evt)=>{console.log(evt);};
const debouncedCallback = debounce(callback, 250);

document.body.addEventListener('keydown',debouncedCallback); //Only fires _after_ keydown stops firing for 250ms
```

### when to use `throttle` and when to use `debounce`
**Throttle** is when you need something to reliably fire over and over, but less often. Like scrolling and mouse movement. You don’t need 250 calls per second—you need maybe 60.

**Debounce** waits for you to finish something. Like typing. If you’re saving a text field to the database, you likely don’t want to write on every character input. Instead, debounce waits the defined delay before taking action—like if you stopped typing for a moment. Or you finished scrolling.

## license

[MIT](./LICENSE) © [Matthew Smith](http://www.niftinessafoot.com)

## made with ❤️ and ☕️ by

![Niftiness Afoot!](https://gist.githubusercontent.com/niftinessafoot/2dba588395cb557293d5f09aebcd2ab0/raw/770293c76bead4f0986ff959f3ea8880017d92c0/bot.svg?sanitize=true) [Matthew Smith](https://github.com/niftinessafoot)
