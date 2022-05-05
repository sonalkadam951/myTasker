var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/tasker")
var schemas = mongoose.Schema({
  content:{
    type: String,
    required: true
  }
})
module.exports = mongoose.model("tasks", schemas)