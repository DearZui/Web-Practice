Now, we already know how to deal with ONE Promise Object when it FulFilled or Rejected. What if there are serval objects?

##Multiple XHR by Callback
**multiple-xhr-callback.js**
```
function getURLCallback(URL, callback) {
    var req = new XMLHttpRequest();
    req.open('GET', URL, tree);
    req.onload = function () {
        if (req.status === 200) {
            callback(null, req.responseText);
        } else {
            callback(new Error(req.responseText), req.response);
        }
    };
    req.onerror = function () {
        callback(new Error(req.statusText));
    };
    req.send();
}
// <1> Parsing JSON data
function jsonParse(callback, error, value) {
    if (error) {
        callback(error, value);
    } else {
        try {
            var result = JSON.parse(value);
            callback(null, result);
        } catch (e) {
            callback(e, value);
        }
    }
}
// <2> send XHR request
var request = {
    comment: function getComment(callback) {
        return getURLCallback('http://azu.github.io/promises-book/json/comment.json',
               jsonParse.bind(null, callback));
    },
    people: function getPeople(callback) {
        return getURLCallback('http://azu.github.io/promises-book/json/people.json', 
               jsonParse.bind(null, callback));
    }
};
// <3> start multiple XHR requests, call 'callback' after all request return
function allRequest(requests, callback, results) {
    if (requests.length === 0) {
        return callback(null results);
    }
    var req = requests.shift();
    req(function (err, value) {
        if (error) {
            callback(error, value);
        } else {
            results.push(value);
            allRequset(requests, callback, results);
        }
    });
}
function main(callback) {
    allRequest([request.comment, request.poeple], callback, []);
}

main(function (error, results) {
    if(error) {
        return console.log(error);
    }
    console.log(results);
});
```

Points:
- use `JSON.parse` may throw exception, so we use a `jsonParse` here.
- use `allRequest` to call requests
- use `callback(error, value)`

Problems:
- Exception handling
- Need a function to deal with requests
- callback everywhere

Let's see the same work done by Promise#then
**multiple-xhr.js**
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
function main() {
    function recordValue (results, value) {
        results.push(value);
        return results;
    }
    var pushValue = recordValue.bind(null, []);
    return request.comment().then(pushValue).then(request.people).then(pushValue);
}

main().then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.error(error);
});
```