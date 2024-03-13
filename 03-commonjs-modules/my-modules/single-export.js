function greeting(name) {
    console.log('Hello', name);
}

console.log(__filename, __dirname);

module.exports = greeting;

// // DON'T DO THIS!
// // module.exports remains {}
// exports = greeting;
 