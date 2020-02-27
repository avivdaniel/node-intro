const http = require('http');
const fs = require('fs');
const url = require('url');
const rollDice = require('./roll-dice');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    if (request.url.includes("/write")) {
        const username = url.parse(request.url, true).query.username;
        fs.writeFile('./users.txt', username, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            response.end();
        });
    }
    if (request.url.includes("/read")) {
        fs.readFile('./users.txt', 'utf-8', (err, content) => {
            if (err) {
                console.log(err);
                return;
            }
            response.write(content);
            response.end();
        });
    }
    if (request.url.includes("/delete")) {
        fs.writeFile('./users.text', '', (err) => {
            if (err) {
                console.log(err);
                return;
            }
            response.end();
        });
    }
    if (request.url.includes('/roll')) {
        // fs.writeFile('./roll-outcome.text', result, (err, rollDice) => {
        // if (err) {
        //     console.log(err);
        //     return;
        // }
        rollDice()
            .then((result) => {
                console.log(`The number is ${result} - You won!`);

            })
            .catch((err) => {
                console.log(`The number is ${err} - You lose!`);
            })
        response.end();
        // });
    }

}).listen(4000);

console.log('now listning top the port');
