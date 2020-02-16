var express = require('express');
var router = express.Router();
var albumDao = require('../dao/albumDao');

/* 专辑清单 */
router.get('/', function (req, res) {
    albumDao.findAllAlbum(function (docs) {
        res.json(docs);
    });
});

/* 创建新专辑*/
router.post('/', function (req, res) {
    let doc = req.body;
    albumDao.addAlbum(doc, function (doc) {
        res.json(doc);
    })
})

/* 修改专辑*/
router.post('/update/', function (req, res) {
    let doc = req.body;
    albumDao.updateAlbum(doc, function (doc) {
        res.json(doc);
    })
})

/*删除专辑*/
router.delete('/:id', function (req, res) {
    let id = req.params.id;
    albumDao.deleteAlbum(id, function (doc) {
        res.json(doc);
    });
})

module.exports = router;
