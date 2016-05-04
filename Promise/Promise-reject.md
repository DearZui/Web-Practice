`Promise.reject(error)`是和`Promise.resolve(value)`类似的方法。

`Promise.reject(new Error('Wrong!'))`作用和下面的代码相同。

```
new Promise(function(resolve, reject) {
    reject(new Error('Wrong!'));
});
```

*Form here, I decided to write in English.This Bi is not bad~!*

The next code use Object promise's method 'then' func 'onRejected',and pass the (Error) Object to func (onRejected)

```
Promise.reject(new Error("Boom!")).catch(function(error) {
    console.log(error);
});
```

The difference between `Promise.resolve(value)` and `Promise.reject(error)`? So Obvious. Reject is useful for debugging!