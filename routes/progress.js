const express = require('express');
const router = express.Router();
const progressCtrl = require('../controllers/progress');

router.post('/:userId/lessons/:lessonId', progressCtrl.create);
router.get('/', progressCtrl.index)
router.put('/:userId/lessons/:lessonId', progressCtrl.update);
router.get('/:id', progressCtrl.show);


module.exports = router;