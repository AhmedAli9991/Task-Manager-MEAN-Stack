var mongoose = require("mongoose");
var TaskSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Desc: {
    type: String,
    required: true,
  },
  User: {
    type: mongoose.Types.ObjectId,
    ref:"User",
    require: true,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
