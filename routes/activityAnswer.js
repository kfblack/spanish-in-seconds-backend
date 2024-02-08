const express = require('express');
const router = express.Router();
const answerCtrl = require('../controllers/activityAnswer');

router.post('/', answerCtrl.create);
router.delete('/:id', answerCtrl.delete);
router.put('/:id', answerCtrl.update);
router.get('/:id', answerCtrl.show);

module.exports = router;