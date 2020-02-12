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
        if(!err) callback(docs);
        else callback(null)
    })
}

/*
更新记录
 */
function updateAlbum(album, callback) {

}

/*
删除记录
 */
function deleteAlbum(album, callback) {

}