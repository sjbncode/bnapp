var express = require('express');
var router = express.Router();

var ctrlClient=require('../controllers/client/index');

router.get('/',ctrlClient.home)

module.exports = router;