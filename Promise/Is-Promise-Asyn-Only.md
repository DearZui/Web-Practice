The method called by `.then` runs in Asyn.

```
var promise = new Promise(function (resolve) {
    console.log("inner promise");  // 1
    resolve(42);
});
promise.then(function(value) {
    console.log(value);  // 3
});
console.log("outer promise")  // 2
```
Codes above will cosole:
```
inner promise  // 1
outer promise  // 2
42  // 3
```
As you can see,when the code executes to `<3>`, the Object (promise) is already ready, that means you can call the callback Function in synchronous way.
However, it still runs in Async. Why is that?

#Chaos both Sync and Async exists will bring
Example:
```
function onReady(fun) {
    var readyState = document.readyState;
    if (readyState === 'interactive' || readyState === 'complete') {
        fn();
    } else {
        window.addEventListener('DOMContentLoaded', fn);
    }
}
onReady(function() {
    console.log('DOM fully loaded and parsed');
});
console.log('==Starting==');
```
**Dom is completely loaded before onReady**
call the callback Sync
**Dom is not ready when onReady is called**
call the callback Async with `DOMContentLoaded` EventListener

In Async way!
```
function onReady(fn) {
    var readyState = document.readyState;
    if (readyState === 'interactive' || readyState === 'complete') {
        setTimeout(fn, 0);
    } else {
        window.addEventListener('DOMContentLoaded', fn);
    }
}
onReady(function() {
    console.log('DOM fully loaded and parsed');
});
console.log('==Starting==');    
```
In Promise way!
```
function onReadyPromise() {
    return new Promise(function(resolve, reject) {
        var readyState = document.readyState;
        if (readyState === 'interactive' || readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('DOMContentLoaded', fn);
        }
    })
}
onReadyPromise().then(function() {
    console.log('DOM fully loaded and parsed');
});
console.log('==Starting==');
```