require('v8').setFlagsFromString('--max-old-space-size=8096');

const all = [];
let big = [];
all.push(big);
for (let i = 0; i < 2000000000; i++) {
  const newLen = big.push(Math.random());
  if (newLen % 500000 === 0) {
    big = [];
    all.push(big);
    console.log('all.length: ' + all.length);
    console.log('heapTotal: ' + Math.round(process.memoryUsage().heapTotal / 1e6));
  }
}
console.log(all.length);