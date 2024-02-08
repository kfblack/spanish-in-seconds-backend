const express = require('express');
const router = express.Router();
const questionCtrl = require('../controllers/quizQuestion');

router.post('/', questionCtrl.create);
router.delete('/:id', questionCtrl.delete);
router.put('/:id', questionCtrl.update);
router.get('/:id', questionCtrl.show);
router.put('/:id/quizAnswer/:quizAnswerId', questionCtrl.alter)


module.exports = router;