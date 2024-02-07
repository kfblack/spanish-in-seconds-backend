const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../controllers/activities');

router.post('/', activitiesCtrl.create);
router.delete('/:id', activitiesCtrl.delete);
router.put('/:id', activitiesCtrl.update);
router.get('/:id', activitiesCtrl.show);

module.exports = router;