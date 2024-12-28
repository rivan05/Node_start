import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log('Hello ' + name);
}

function goodbyeHandler(name) {
  console.log('Goodbye ' + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet', 'Dora');
myEmitter.emit('goodbye', 'Bitch');

// Error handling
myEmitter.on('error', (err) => {
  console.log('An Error Occurd:', err);
});

// Simulate error
myEmitter.emit('error', new Error('Somethin went wrong'));
