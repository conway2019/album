const mongoose = require("mongoose");

//专辑
let albumSchema = new Schema({
    album_id: String,
    album_name: String,
    public_time: Date,
    week: number,
    price: number,
    cover: String,
    singer_id: String
});
mongoose.model("album", albumSchema);

//歌手
let singerSchema = new Schema({
    singer_id: String,
    singer_name: String,
    singer_memo: String,
});
mongoose.model("singer", singerSchema);

//注册用户
var userSchema = new Schema({
    user_id: String,
    user_name: String,
    user_role: Number,
    user_memo: String
});
mongoose.model("user", userSchema);
