import { TODOITEM } from "./stateType";
import { getData, addItem, deleteItem, changeItem } from "./types";
export function getDataAction(item: TODOITEM) {
  return {
    type: getData,
    item,
  };
}
export function getAddItemAction(item: TODOITEM) {
  return {
    type: addItem,
    item,
  };
}
export function getChangeItemAction(id: Number) {
  return {
    type: changeItem,
    id,
  };
}
export function getDeleteItemAction(id: number) {
  return {
    type: deleteItem,
    id,
  };
}
