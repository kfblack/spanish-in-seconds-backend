const express = require('express');
const router = express.Router();
const lessonsCtrl = require('../controllers/lessons');

router.post('/', lessonsCtrl.create);
router.delete('/:id', lessonsCtrl.delete);
router.put('/:id', lessonsCtrl.update);
router.get('/:id', lessonsCtrl.show);

module.exports = router;