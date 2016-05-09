Promise#catch is anther name for `promise.then(undefined, onRejected);`

##IE8
**Promise#catch**
```
var promise = Promise.reject(new Error("message"));
promise.catch(function (error) {
    console.error(eooro);
);
```
Under IE8, the code above will show **identifier not found**

That's because IE8 and below are based on ECMAscript3, the Reserved Word cannot be used as a property.

In ECMAscript5, the Reserved Word belongs to IdentifierName, you can use it as a property.
*However, you still cannot use the Reserved Word as a variable name or a method name*

Of course, we can avoid these problems.

##bracket notation##
```
var promise = Promise.reject(new Error("message"));
promise["catch"](function (error) {
    console.error(error);
});
```
This works fine in and below IE8.

OR...replace `catch` with `then`
```
var promise = Promise.reject(new Error("message"));
promise.then(undefined, function (error) {
    console.error(error);
});
```