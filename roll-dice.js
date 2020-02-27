function rollDice() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let rendomNum = Math.floor(Math.random() * 6);
            if (rendomNum === 4) {
                res(rendomNum);
            } else {
                rej(rendomNum);
            }
        }, 2000);
    });

}


module.exports = rollDice; //appers only once at file