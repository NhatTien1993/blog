const express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/show', newsController.show);
router.use('/:slug', newsController.detail); // :slug truyen address tuy y
router.use('/', newsController.index); // phai de adress "/" o cuoi khi router toi day, no luon chay tuyen nay du url phia sau la gi, nen phai duyet sau cung
module.exports = router;
