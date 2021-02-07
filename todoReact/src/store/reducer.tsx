import { TODO, TODOITEM } from "./stateType";
import { getData, addItem, deleteItem, changeItem } from "./types";
const defaultState: TODO = {
  list: [],
  finished: 0,
  input_value: "",
};
const reducer = (state: TODO = defaultState, action: any) => {
  switch (action.type) {
    case getData: {
      const newState=Object.assign({},state);
      //  const newState = JSON.parse(JSON.stringify(state));
      newState.list = action.item;
      let tempFinished = 0;
      newState.list.forEach((todo: TODOITEM) => {
        if (todo.status) {
          tempFinished += 1;
        }
      });
      newState.finished = tempFinished;
      return newState;
    }
    case addItem: {
      const newState=Object.assign({},state);
      // const newState = JSON.parse(JSON.stringify(state));
      newState.list.push(action.item);
      return newState;
    }
    case deleteItem: {
      const newState=Object.assign({},state);
      // const newState = JSON.parse(JSON.stringify(state));
      let tempFinished = 0;
      newState.list.forEach((todo: TODOITEM, index: number) => {
        if (action.id === todo.id) {
          newState.list.splice(index, 1);
        }
      });
      newState.list.forEach((todo: TODOITEM) => {
        if (todo.status) {
          tempFinished += 1;
        }
      });
      newState.finished = tempFinished;
      return newState;
    }
    case changeItem: {
      const newState=Object.assign({},state);
      // const newState = JSON.parse(JSON.stringify(state));
      let tempFinished = 0;
      newState.list.forEach((todo: TODOITEM) => {
        if (action.id === todo.id) {
          todo.status = todo.status === 1 ? 0 : 1;
        }
        if (todo.status) {
          tempFinished += 1;
        }
      });
      newState.finished = tempFinished;
      return newState;
    }
    default:
      return state;
  }
};
export default reducer;
