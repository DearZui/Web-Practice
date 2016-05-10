`Promise.all`accecpts an array of Promise Objects. It will call method `.then` after all objects were resolved or rejected.

XHR request example will be much easier using `Promise.all`.

**promise-all-xhr.js**
```
function getURL(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}
var request = {
        comment: function getComment() {
            return getURL('http://azu.github.io/promises-book/json/comment.json').then(JSON.parse);
        },
        people: function getPeople() {
            return getURL('http://azu.github.io/promises-book/json/people.json').then(JSON.parse);
        }
    };
function main(){
    return Promise.all([request.comment(), request.people]);
}
main().then(function (value) {
    console.log(value);
}).catch(function(error){
    console.log(error);
});
```
Be aware that all objects in the array start at the same time.
**promise-all-timer.js**
```
function timePromisefy(delay) {
    return new Promise(function (reslove) {
        setTimeout(function() {
            resolve(delay);
        }, delay);
    })
}
var startDate = Date.now();
Promise.all([
    timePromisefy(1),
    timePromisefy(32),
    timePromisefy(64),
    timePromisefy(128)
]).then(function (values) {
    console.log(Date.now() - startDate + 'ms');
    console.log(values);
})
```