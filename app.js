const wbm = require('wbm');

wbm.start().then(async() => {
    const phones = ['+919842279641'];
    const message = 'Verification code : 34GJ%3';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));