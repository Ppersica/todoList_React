var express = require("express");
var router = express.Router();
const models = require("../db/models");
const todoModel = models.todoModel;

// const todotest = new todoModel({
//   id: 0,
//   content: "test",
//   status: 0,
// });
// todotest.save(function (err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });
/**
 * 获取数据
 */
router.post("/api/get_data", function (req, res) {
  const obj = {};
  todoModel.find(obj, function (err, todo) {
    if (err) {
      res.send({
        code: 1,
        errorMsg: "获取数据失败",
      });
    } else {
      res.send(todo);
    }
  });
});
/**
 * 新增
 */
router.post("/api/add_todo", function (req, res) {
  const todo = new todoModel({
    id: req.body.id,
    content: req.body.content,
    status: req.body.status,
  });
  todo.save(function (err, todo) {
    if (err) {
      res.send({
        code: 1,
        errorMsg: "新增失败",
      });
    } else {
      res.send({
        code: 0,
        message: "新增成功",
      });
    }
  });
});
/**
 * 删除
 */
router.post("/api/del_todo", function (req, res) {
  const id = req.body.id;
  const ID = { id: id };
  todoModel.remove(ID, function (err, todo) {
    if (err) {
      res.send({
        code: 1,
        errorMsg: "删除失败",
      });
    } else {
      res.send(todo);
    }
  });
});
/**
 * 改状态
 */
router.post("/api/change_todo", function (req, res) {
  const id = req.body.id;
  const status = req.body.status;
  const upaderStr = {
    status: status === 1 ? 0 : 1,
  };
  todoModel.findOneAndUpdate({ id: id }, upaderStr, function (err, todo) {
    if (err) {
      res.send({
        code: 1,
        errorMsg: "更新失败",
      });
    } else {
      res.send(todo);
    }
  });
});
module.exports = router;
