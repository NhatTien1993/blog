const express = require('express');
var router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.home); // phai de adress "/" o cuoi khi router toi day, no luon chay tuyen nay du url phia sau la gi, nen phai duyet sau cung
module.exports = router;
