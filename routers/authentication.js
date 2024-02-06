const express = require('express');
const router = express.Router();
const Ctrl = require('../controllers/AuthController.js');


router.post('/auth/register', Ctrl.create);

module.exports = router;