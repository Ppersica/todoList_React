import React from "react";
import ListItem from "../TodoItem/index";
import TodoHeader from "../TodoHeader/index";
import store from "../../store/index";
import { reqQueryData } from "../../api/index";
import { getDataAction } from "../../store/actions";
import { TODO, TODOITEM } from "../../store/stateType";

class Todo extends React.Component<{}, TODO> {
  constructor(props: {}) {
    super(props);
    this.state = store.getState();
  }
  componentWillMount() {
    this._queryData();
  }
  componentDidMount() {
    store.subscribe(this._handleStoreChange);
  }
  _handleStoreChange = () => {
    this.setState(store.getState());
  };
  async _queryData() {
    let result;
    result = await reqQueryData();
    // console.log(result);
    const action = getDataAction(result);
    store.dispatch(action);
  }
  render() {
    const todos = this.state.list;
    return (
      <div>
        <TodoHeader />
        <ul>
          {todos.map((item: TODOITEM, index: number) => (
            <ListItem item={item} key={index} />
          ))}
          <li>
            {this.state.finished}已完成&nbsp;/&nbsp;{todos.length}总数
          </li>
        </ul>
      </div>
    );
  }
}

export default Todo;
