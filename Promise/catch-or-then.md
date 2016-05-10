**then-throw-error.js**
```
function throwError(value) {
    throw new Error(value);
}
// <1> onRejected will not be called
function badMain(onRejected) {
    return Promise.resolve(42).then(throwError, onRejected);
}
// <2> onRejected will be called if exception occured.
function goodMain(onRejectd) {
    return Promise.resolve(42).then(throwError).catch(onRejected);
}
badMain(function(){
    console.log("BAD");
})
goodMain(function(){
    console.log("GOOD");
})
```