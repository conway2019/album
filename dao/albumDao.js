const mongoose = require("mongoose");
require("../model/index");
let albumModel = mongoose.model("album");

/*
增加记录
 */
function addAlbum(album, callback) {
    albumModel.create(album, function (err, doc) {
        if (!err) callback(doc);
        else console.log(err);
    })
}

/*
查询所有记录
 */
function findAllAlbum(callback) {
    albumModel.find({}).exec(function (err, docs) {
        if (!err) callback(docs);
        else console.log(err);
    })
}

/*
更新记录
 */
function updateAlbum(id, callback) {
    albumModel.findByIdAndUpdate(id, function (err, doc) {
        if (!err) callback(doc);
        else console.log(err);
    })
}

/*
删除记录
 */
function deleteAlbum(id, callback) {
    albumModel.findByIdAndRemove(id, function (err, doc) {
        if (!err) callback(doc)
        else console.log(err);
    })
}