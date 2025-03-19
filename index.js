const EventEmitter = require('events'); // Import EventEmitter class
const myEmitter = new EventEmitter(); // Create an instance
// Define an event listener
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js.`);
});

// Emit the event
myEmitter.emit('greet', 'Mani');
