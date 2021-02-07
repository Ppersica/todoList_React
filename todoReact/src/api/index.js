import ajax from "./ajax";
const BASE_URL = "http://localhost:4000/api";

// 获取数据
export const reqQueryData = (obj) => ajax(BASE_URL + "/get_data", obj, "POST");
//新增
export const reqAddTodo = (obj) => ajax(BASE_URL + "/add_todo", obj, "POST");
//删除
export const reqDelTodo = (obj) => ajax(BASE_URL + "/del_todo", obj, "POST");
//修改
export const reqChangeTodo = (obj) =>
  ajax(BASE_URL + "/change_todo", obj, "POST");
