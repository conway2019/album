const mongoose = require("mongoose");
require("../model/index");
let albumModel = mongoose.model("album");

/*
增加记录
 */
function addAlbum(Album, callback) {
    albumModel.create(Album, function (err, newAlbum) {
        if (!err) callback(newAlbum.toObject())
    })
}
/*
function addAlbum(album, callback) {
    albumModel.create(album, function (err, doc) {
        if (!err) callback(doc);
        else console.log(err);
    })
}
*/
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
function updateAlbum(doc, callback) {
    let obj = eval(doc);
    let id = obj._id;
    albumModel.findByIdAndUpdate(id, doc, function (err, newDoc) {
        if (!err) callback(newDoc);
        else console.log(err);
    })
}

/*
删除记录
 */
function deleteAlbum(id, callback) {
    console.log("id=" + id);
    albumModel.findByIdAndRemove(id, function (err, doc) {
        if (!err) callback(doc)
        else console.log(err);
    })
}

module.exports = {addAlbum, findAllAlbum, updateAlbum, deleteAlbum};