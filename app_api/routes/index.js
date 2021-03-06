var express = require('express');
var router = express.Router();

var synclogCtrl=require('../controllers/synclog')

router.get('/synclog',synclogCtrl.getSyncLogSummary);
router.get('/syncErrors',synclogCtrl.getSyncErrors);
router.post('/SyncErrorByID',synclogCtrl.getSyncErrorByID);
router.get('/duplicateInvoice',synclogCtrl.getDuplicateInvoice);


router.post('/CustomerMonthlySummary',synclogCtrl.getCustomerMonthlySummary);
router.post('/PIMonthlySummary',synclogCtrl.getPIMonthlySummary);
router.post('/CompanyMonthlySummary',synclogCtrl.getCompanyMonthlySummary);

module.exports = router;