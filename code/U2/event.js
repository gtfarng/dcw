const EventEmitter = require('events');
class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
    console.log(a, b, 'an event occurred!')
});
myEmitter.emit('event', 'a', 'b')