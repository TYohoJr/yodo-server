const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const pg = require('pg');
const morgan = require('morgan');
var multer = require('multer');
var cors = require('cors');

let app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyparser.json({ type: 'application/json' }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

var conString = process.env.ELEPHANTSQL_URL
var client = new pg.Client(conString);
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'files');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname);
    }
})
var upload = multer({ storage: storage }).single('file')

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
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                res.json({
                    message: "Wrong token"
                })
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

app.post("/userLogIn", (req, res) => {
    client.query(`select * from users where username = '${req.body.username}'`, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                message: `Log in failed.`
            })
        } else if (!result.rows[0]) {
            res.json({
                message: `Log in failed.`
            })
        } else {
            bcrypt.compare(req.body.password, result.rows[0].password, function (err, resolve) {
                if (resolve) {
                    var token = jwt.sign(req.body.username, process.env.JWT_SECRET, {
                    });
                    res.json({
                        message: `Login successful!`,
                        token,
                        username: result.rows[0].username,
                    });
                } else {
                    res.json({
                        message: `Login failed.`
                    });
                }
            })
        }
    });
});

app.post("/checkReAuth", verifyToken, (req, res) => {
    client.query(`select * from users where username = '${req.body.username}'`, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                message: `Log in failed.`
            })
        } else if (!result.rows[0]) {
            res.json({
                message: `Log in failed.`
            })
        } else {
            res.json({
                message: `Login successful!`,
                username: result.rows[0].username,
            });
        }
    });
})

app.post('/supportUpload', (req, res) => {
    upload(req, res, function (err) {
        if(err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).send(req.body.fileData);
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
