var express = require('express');
var router = express.Router();
var albumDao = require('../dao/albumDao')

/* GET users listing. */
router.get('/', function (req, res) {
    albumDao.findAllAlbum(function (docs) {
        res.json(docs);
    });
});

router.post('/', function (req, res) {
    let doc = req.body;
    albumDao.addAlbum(doc, function (doc) {
        res.json(doc);
    })
})

router.delete('/id:', function (req, res) {
    let id = req.params.id;
    albumDao.deleteAlbum(id, function (doc) {
        res.json(doc);
    });
})

module.exports = router;
