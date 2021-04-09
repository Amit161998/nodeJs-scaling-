const {fork} = require('child_process');

const processes = [
    fork('index.js', ['3001']),
    fork('index.js', ['3002']),
    fork('index.js', ['3003'])
]

console.log(`Forked ${processes.length} processes`)