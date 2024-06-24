const jwt = require("jsonwebtoken");

const config = process.env;

const requireSocketAuth = (socket, next) => {
    let token = socket.handshake.auth?.token
    console.log("Inside require socket auth", token);
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {

        const decoded = jwt.verify(token, config.JWT_SECRET);
        console.log(decoded);
        socket.user = decoded;
    } catch (err) {
        const error = new Error("403, Not authorized");
        return socket(error);
    }

    return next();
};

module.exports = requireSocketAuth;
