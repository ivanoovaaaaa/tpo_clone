const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

const host = '172.20.10.2';
const port = 443;

https
    .createServer(
        {
            key: fs.readFileSync('LAB.key'),
            cert: fs.readFileSync('LAB.crt'),
        },
        app
    )
    .listen(port, host, function () {
        console.log(
            `Server listens https://${host}:${port}`
        );
    });