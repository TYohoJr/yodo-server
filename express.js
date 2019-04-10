const express =  require('express');
const path = require('path');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const assert = require('assert');
const pg = require('pg');
const morgan = require('morgan');

let app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyparser.json({ type: 'application/json' }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));

var conString = process.env.ELEPHANTSQL_URL
var client = new pg.Client(conString);

client.connect((err) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('successfully connected to postgres DB');
        app.listen(process.env.PORT, function () {
            console.log(`listening on port: ${process.env.PORT}`);
        })
    }
})
