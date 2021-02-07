// 连接数据库
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo_db");
const conn = mongoose.connection;
conn.on("connected", function () {
  console.log("数据库连接成功!");
});
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  id: {
    type: Number,
  },
  content: {
    type: String,
  },
  status: {
    type: Number,
  },
});

const todoModel = mongoose.model("todo", todoSchema);
module.exports = {
  todoModel,
};
