**Promise method chain**
```
aPromise.then(function taskA(value) {
    // task A
}).then(function taskB(value) {
    // task B
}).catch(function onRejected(error) {
    console.log(error);
});
```

##promise chain
*The shorter, the better.*
**promise-then-catch-flow.js**
```
function taskA() {
    console.log("Task A");
}
function taskB() {
    console.log("Task B");
}
function onRejected(error) {
    console.log("Catch Error: A or B", error);
}
function finalTask() {
    console.log("Final Task);
}

var promise = Promise.resolve();
promise
    .then(taskA)
    .then(taskB)
    .catch(onRejected)
    .then(finalTask);
```
**Fullfilled:** TaskA ==> TaskB ==> Final Task
**Rejected:**   (TaskA ==> TaskB) || (TaskA) ==> onRejected ==>Final Task
Let's what will happen if TaskA throws a error!

**promise-then-taska-throw.js:**
```
function taskA() {
    console.log("Task A");
    throw new Error("throw Error @ Task A")
}
function taskB() {
    console.log("Task B");// 不会被调用
}
function onRejected(error) {
    console.log(error);// => "throw Error @ Task A"
}
function finalTask() {
    console.log("Final Task");
}

var promise = Promise.resolve();
promise
    .then(taskA)
    .then(taskB)
    .catch(onRejected)
    .then(finalTask);

//Task A
//Error: throw Error @ Task A
//Final Task
```

##How does promise chain pass parameters?
Just `return` in Task!
**promise-then-passing-value.js**
```
function doubleUp(value) {
    return value * 2;
}
function increment(value) {
    return value + 1;
}
function output(value) {
    console.log(value); // => (1 + 1) * 2;
}

var promise = Promise.resolve(1);
promise
    .then(increment)
    .then(doubleUp)
    .then(output)
    .catch(function(error) {
        console.error(error);
    });
```

Enter: `Promise.resolve(1);`
1. Promise.resolve(1); pass '1' to `increment`
2. increment(1), return
3. para = 2, pass '2' to `doubleUp`
4. `output`