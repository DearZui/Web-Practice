Everytime you call `then` and `catch`, it returns a new Promise Object.
Take a look.
```
var aPromise = new Promise(function (resolve) {
    resolve(100);
});
var thenPromise = aPromise.then(function (value) {
    console.log(value);
})
var catchPromise = aPromise.catch(function (error) {
    console.error(error);
});
console.log(aPromise !== thenPromise)  // => true
console.log(thenPromise !== catchPromise)  // => true
```

Compare these two:

```
// Call 'then' on the same object
var aPromise = new Promise(function (resolve) {
    resolve(100);
});
aPromise.then(function (value) {
    return value * 2;
});
aPromise.then(function (value) {
    return value * 2;
});
aPromise.then(function (value) {
    console.log("1: " + value);  // => 100
})

// vs

// Call 'then' as promise chain
var bPromise = new Promise(function (resolve) {
    resolve(100);
});
bPromise.then(function (value) {
    return value * 2;
}).then(function (value) {
    return value * 2;
}).then(function (value) {
    console.log("2: " + value); // => 100 * 2 * 2
});
```

**Wrong usage of then**
```
function badAsyncCall() {
    var promise = new Promise();
    promise.then(function () {
        return newVar;
    });
    return promise;
}
```
This kind of writing is full of problems. First of all, the exception caused by `promise.then` will not be captured ouside the func.
Besides, the RETURN of `then` is not accessable, even if `then` has A RETURN.

Every time you call `promise.then` returns a new Promise Object. Let's change it in promise-chain-way.

```
function anAsyncCall() {
    var promise = Promise.resolve();
    return promise.then(function() {
        return newVar;
    });
}
```