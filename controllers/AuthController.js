const { User } = require('../models');
const middleware = require('../middleware');

const Register = async (req, res) => {
    try {
        const { email, password, name, avatar } = req.body;
        let passwordDigest = await middleware.hashPassword(password);
        let existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).send("A user with this email has already been registered!");
        } else {
            const user = await User.create({ email, passwordDigest, name, avatar });
            res.send(user);
        }
    } catch (err) {
        throw err;
    }
}

const Login = async (req, res) => {
    try {

    } catch (err) {
        throw err;
    }
}

module.exports = {
    Register, 
    Login
}