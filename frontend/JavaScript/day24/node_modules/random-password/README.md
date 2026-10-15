# random-password

Generate random password.

## Install
```
$ npm install random-password --save
```

## Example

The length of password should be gived: 
```js
var generator=require('random-password');

generator(4);   // 'WA6n'

generator(10);   // '49Pm!N&i9M'
```

The table to generate password could be specified:
```js
generator(4, '1234567890');  // '5575'

generator(10, '1234567890'); // '1926972366'

```

If length is `Nan`, `Infinity` or `-Infinity`, the default length `8` will be used:
```js
generator(NaN);  //'0vpgip!G'
```


## License

MIT