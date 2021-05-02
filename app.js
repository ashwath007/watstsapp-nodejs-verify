const wbm = require('wbm');
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.get("/", () => {
    wbm.start().then(async() => {
        const phones = ['+919842279641'];
        const message = 'Verification code : 34GJ%3';
        await wbm.send(phones, message);
        await wbm.end();
    }).catch(err => console.log(err));
});


app.listen(port, () => {
    console.log("start");
});