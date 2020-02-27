
const rollDice = require('./roll-dice');
const fs = require('fs');


// fs.readFile('./users.txt', 'utf-8', (err, content) => {
//     console.log(content);
// });

// fs.writeFile('./users.txt', 'content', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('written');
// })

rollDice()
    .then((result) => {
        console.log(result);
    });

