
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
    )
console.log('done with this task');
console.log('starting the next one');
// {flag: 'a'} - Appends the result to what's already in the result-sync.txt files instead of just overwriting everything when there's no flag
