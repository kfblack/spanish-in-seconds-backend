const express = require('express');
const router = express.Router();
const Ctrl = require('../controllers/AuthController.js');

router.post('/login', Ctrl.Login)
router.post('/register', Ctrl.Register);

module.exports = router;