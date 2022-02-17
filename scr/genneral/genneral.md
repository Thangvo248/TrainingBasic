# Genneral
## Event Loop
Node.js is a single-threaded event-driven platform that is capable of running non-blocking, asynchronously programming. These functionalities of Node.js make it memory efficient. The event loop allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It is done by assigning operations to the operating system whenever and wherever possible.

Features of Event Loop:

+ Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
+ The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
+ The event loop allows us to use callbacks and promises.
+ The event loop executes the tasks starting from the oldest first.
### Working of the Event loop: 
When Node.js starts, it initializes the event loop, processes the provided input script which may make async API calls, schedule timers, then begins processing the event loop.

When using Node.js, a special library module called libuv is used to perform async operations. This library is also used, together with the back logic of Node, to manage a special thread pool called the libuv thread pool.This thread pool is composed of four threads used to delegate operations that are too heavy for the event loop. I/O operations, Opening and closing connections, setTimeouts are the example of such operations.

When the thread pool completes a task, a callback function is called which handles the error(if any) or does some other operation. This callback function is sent to the event queue. When the call stack is empty, the event goes through the event queue and sends the callback to the call stack.

The following diagram is a proper representation of the event loop in a Node.js server:
![alt text](https://res.cloudinary.com/none-ptudw/image/upload/v1645092881/nodejs2_vn5ljk.png)
