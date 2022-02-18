# Promise Async Await

1. Promises:

A Promise in NodeJS is similar to a promise in real life. It is an assurance that something will be done. Promise is used to keep track of whether the asynchronous event has been executed or not and determines what happens after the event has occurred. It is an object having 3 states namely:

+ Pending: Initial State, before the event has happened.
+ Resolved: After the operation completed successfully.
+ Rejected: If the operation had error during execution, the promise fails.

2. Async/Await:

Async/Await is used to work with promises in asynchronous functions. It is basically syntactic sugar for promises. It is just a wrapper to restyle code and make promises easier to read and use. It makes asynchronous code look more like synchronous/procedural code, which is easier to understand.

await can only be used in async functions. It is used for calling an async function and waits for it to resolve or reject. await blocks the execution of the code within the async function in which it is located.