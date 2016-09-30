var express = require('express');
var router = express.Router();

var synclogCtrl=require('../controllers/synclog')

router.get('/synclog',synclogCtrl.getSyncLogSummary);
router.get('/syncErrors',synclogCtrl.getSyncErrors);

module.exports = router;