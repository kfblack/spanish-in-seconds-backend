const express = require('express');
const router = express.Router();
const quizzesCtrl = require('../controllers/quizzes');

router.post('/', quizzesCtrl.create);
router.get('/', quizzesCtrl.index)
router.delete('/:id', quizzesCtrl.delete);
router.put('/:id', quizzesCtrl.update);
router.get('/:id', quizzesCtrl.show);

module.exports = router;