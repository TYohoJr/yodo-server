const express = require('express');
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

function verifyToken(req, res, next) {
    var token = req.body.token;
    if (token) {
        jwt.verify(token, "Secret", (err, decode) => {
            if (err) {
                res.send("Wrong token")
            } else {
                res.locals.decode = decode
                next();
            }
        })
    } else {
        console.log("no token")
        res.send("No token")
    }
}

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/signUpData', (req, res) => {
    client.query(`select * from users where username = '${req.body.username}'`, (err, duplicateResult) => {
        if (err) {
            console.log(err);
            res.json({
                message: `Sign up failed:\n${err}`
            });
        } else if (duplicateResult.rows[0]) {
            res.json({
                message: `The username ${req.body.username} already exists`
            });
        } else {
            bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                client.query(`insert into users (username, password, date_created) values ('${req.body.username}', '${hash}', '${req.body.dateCreated}') returning *`, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.json({
                            message: `Sign up failed:\n${err}`
                        });
                    } else {
                        res.json({
                            message: "Sign Up Successful!"
                        });
                    }
                })
            })
        }
    })
});

// app.post('/changePassword', (req, res) => {
//     db.collection('users').find({ username: req.body.username }).toArray((err, user) => {
//         if (user.length) {
//             bcrypt.compare(req.body.oldPassword, user[0].password, function (err, resolve) {
//                 if (resolve) {
//                     bcrypt.hash(req.body.newPassword1, saltRounds, function (err, hash) {
//                         db.collection('users').updateOne(
//                             { username: req.body.username },
//                             {
//                                 $set:
//                                 {
//                                     password: hash
//                                 }
//                             }
//                         )
//                         if (err) {
//                             res.json("Failed")
//                             console.log(err);
//                         } else {
//                             res.json('Successfully updated password')
//                             console.log(`password updated for ${req.body.username}`);
//                         }
//                     });
//                 } else {
//                     res.json("Wrong password")
//                 }
//             });
//         } else {
//             res.json('Error: Please log out and back in')
//         }
//     })
// });

// app.post("/userLogIn", (req, res) => {
//     db.collection("users").find({ username: req.body.username }).toArray((err, user) => {
//         if (!user.length) {
//             res.json({
//                 message: `Login failed!`
//             });
//         } else if (err) {
//             res.json({
//                 message: "Login failed!"
//             });
//         } else {
//             bcrypt.compare(req.body.password, user[0].password, function (err, resolve) {
//                 if (resolve === true) {
//                     var token = jwt.sign(req.body.username, ('Secret'), {
//                     });
//                     res.json({
//                         message: "Login successful!",
//                         myToken: token,
//                         user: user[0],
//                         item: user
//                     });
//                     console.log(`Sign in successful from ${req.body.username}`)
//                 } else if (resolve === false) {
//                     res.json({
//                         message: "Login failed!",
//                     })
//                 }
//             });
//         }
//     })
// });
