const express = require('express');
const router = express.Router();
const progressCtrl = require('../controllers/progress');

router.post('/', progressCtrl.create);
router.get('/', progressCtrl.index)
router.put('/:id', progressCtrl.update);
router.get('/:id', progressCtrl.show);


module.exports = router;