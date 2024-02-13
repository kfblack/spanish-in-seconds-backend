const User = require('../models/User');
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
        const { email, password } = req.body;
        const user = await User.findOne({ email }).populate('progress');
        let matched = await middleware.comparePassword(user.passwordDigest, password);
        if (matched) {
            let payload = { id: user.id, email: user.email, name: user.name, progress: user.progress, avatar: user.avatar, lessons: user.lessons };
            let token = middleware.createToken(payload);
            return res.send({ user, token })
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (err) {
        console.log(err);
        res.status(401).send({ status: 'Error', msg: 'An error has occurred!' });
    }
}

const CheckSession = async (req, res) => {
    const { payload } = res.locals
    res.send(payload)
}

const getUserData = async(req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('progress')
        if (user) {
            return res.json(user)
        }
        res.status(401).send({ status: 'Error', msg: 'No user found'})
    } catch (err) {
        console.log(err)
        res.status(401).send({ status: 'Error', msg: 'Error has occurred'})
    }
}

module.exports = {
    Register, 
    Login,
    CheckSession,
    getUserData
}