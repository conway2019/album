const mongoose = require("mongoose");

//专辑
let AlbumSchema = new mongoose.Schema({
    id: String,
    name: String,
    memo: String,
    songs: []
});

//歌手
let SingerSchema = new mongoose.Schema({
    id: String,
    name: String,
    memo: String,
    songs:[]
});

//用户
let UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    password: String,
    telephone: String,
    mail: String
});

mongoose.model("album", AlbumSchema);
mongoose.model("singer", SingerSchema);
mongoose.model("user", UserSchema);
