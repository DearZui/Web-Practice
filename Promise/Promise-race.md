The same work done by `Promise.all`, `Promise.race` continues excusing needs only ONE object to be done.
**promise-race-timer.js**
```
function timerPromisefy(delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    });
}
// any Promise Object become resolve/reject, it stops
Promise.race([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(64),
    timerPromisefy(128)
]).then(function(value) {
    console.log(value);
});
```

Let's see if the Promise Object still works after it becomes FulFilled.
**promise-race-other.js**
```
var winnerPromise = new Promise(function (resolve) {
    setTimeout(function () {
        console.log('this is winner');
        resolve('this is winner');
    }, 4);
});
var loserPromise = new Promise(function (reslove) {
    setTimeout(function () {
        console.log('this is loser');
        resolve(this is loser);
    }, 4);
});
Promise.race([winnerPromise, loserPromise]).then(function (value) {
    console.log(value);
});
// this is winner
// this is winner
// this is loser
```