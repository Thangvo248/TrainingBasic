# ES6 Arrow Function

An arrow function expression is a simplified or more compact version of a regular or normal function expression. it’s got a shorter syntax compared to normal function. even though it’s easier to be implemented compared to normal functions it has limitations and cannot be utilized in all cases.

Differences and Constrictions of arrow functions from normal functions:

+ It should not be used as a method because it lacks its own bindings to this or super.
+ Within its body, it is unable to use yield.
+ keyword to be targeted
+ Not suited for methods like call, apply, and bind, which all require setting a scope.
+ We can’t use a new keyword to create a new object.
+ They are unable to be utilized as constructors.
+ it doesn’t have arguments object and prototype property.