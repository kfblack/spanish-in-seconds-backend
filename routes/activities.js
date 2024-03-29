const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../controllers/activities');

router.post('/', activitiesCtrl.create);
router.get('/', activitiesCtrl.index)
router.delete('/:id', activitiesCtrl.delete);
router.put('/:id', activitiesCtrl.update);
router.get('/:id', activitiesCtrl.show);
router.put('/:id/answer/:answerId', activitiesCtrl.alter)


module.exports = router;