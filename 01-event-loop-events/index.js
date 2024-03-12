const fs = require('fs');
const dns = require('dns');

const info = text => console.log(text, performance.now().toFixed(2)) ;

info('Program start');

//close events
fs.writeFile('./01-event-loop-events/test.txt', 'hello node.js', () =>
	info('File written')
)

//Promises
Promise.resolve().then(() => info('Promise 1'))

//nextTick
process.nextTick(() => info('next tick one'))

//setImmediate(check)
setImmediate(() => info('Immediate 1'))

//Timeouts
setTimeout(() => info('Timeout 1'), 0 );
setTimeout(() => {
  process.nextTick(() => info('nextTick 2'))
  info('Timeout 2')
}, 10)

// I/O events
dns.lookup('localhost',(err, address, family ) => {
  info('DNS 1 localhost',address);
  Promise.resolve().then(() => info('Promise two'))
  process.nextTick(() => info('nextTick 3'))
})

info('Program end');