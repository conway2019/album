const mongoose = require("mongoose");
require("../model/index");

let albumModel = mongoose.model("album");

/*
增加记录
 */
function addAlbum(album, callback) {
    albumModel.create(album, function (error, doc) {
        if (!error) callback(doc);
        else callback(null);
    })
}

/*
查询记录
 */
function findAlbum(callback) {
    albumModel.find({}).exec(function () {

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