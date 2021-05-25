const mongoose = require("mongoose");
// Setando para api de promise do mongose usar a do NODE
mongoose.Promise = global.Promise;

module.exports = mongoose.connect("mongodb://localhost:27017/todo");
