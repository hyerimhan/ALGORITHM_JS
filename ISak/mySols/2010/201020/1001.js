const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a - b);