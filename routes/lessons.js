const express = require('express');
const router = express.Router();
const lessonsCtrl = require('../controllers/lessons');

router.post('/lessons', lessonsCtrl.create);
router.delete('/lessons/:id', lessonsCtrl.delete);
router.put('/lessons/:id', lessonsCtrl.update);
router.get('/lessons/:id', lessonsCtrl.show);

module.exports = router;