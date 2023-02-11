const jwt = require('jsonwebtoken');
const config = require("../config/auth.config.js");

module.exports = (req, res, next) => {

    const token = req.headers["x-access-token"];
    console.log(token)

    jwt.verify(token, config.secret, function(err, tokendata) {
        if (err) {
            return res.status(400).json({ message: ' Unauthorized request' });
        }
        if (tokendata) {
            req.body.user = tokendata
            next()
        }
    })
};