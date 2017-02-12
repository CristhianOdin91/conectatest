var express = require('express');
var router = express.Router();
var MainController = require('../app/controllers/MainController');

router.get('/',MainController.index);

module.exports = router;