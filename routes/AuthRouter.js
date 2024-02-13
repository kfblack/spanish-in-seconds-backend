const express = require('express');
const router = express.Router();
const Ctrl = require('../controllers/AuthController.js');
const middleware = require('../middleware')

router.post('/login', Ctrl.Login)
router.post('/register', Ctrl.Register);
router.get(
    '/session',
    middleware.stripToken,
    middleware.verifyToken,
    Ctrl.CheckSession
)
router.get('/user/:id', Ctrl.getUserData)

module.exports = router;