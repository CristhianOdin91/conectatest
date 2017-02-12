var express = require('express');
var router = express.Router();
var LibrosApiController = require('../app/controllers/LibrosApiController');

router.get('/libros',LibrosApiController.index);
router.get('/libros/:id',LibrosApiController.show);
router.post('/libros',LibrosApiController.store);
router.put('/libros/:id',LibrosApiController.update);
router.patch('/libros/:id',LibrosApiController.update);
router.delete('/libros/:id',LibrosApiController.destroy);

module.exports = router;