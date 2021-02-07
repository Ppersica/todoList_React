import React from "react";
import "./index.css";
import store from "../../store/index";
import { getAddItemAction } from "../../store/actions";
import { reqAddTodo } from "../../api";
import { TODO, TODOITEM } from "../../store/stateType";

class TodoHeader extends React.Component<{}, TODO> {
  constructor(props: {}) {
    super(props);
    this.state = store.getState();
  }
  componentDidMount() {
    store.subscribe(this._handleStoreChange);
  }
  _handleStoreChange = () => {
    this.setState(store.getState());
  };
  async _addTodo(obj: TODOITEM) {
    let result = await reqAddTodo(obj);
    if (result) {
      const action = getAddItemAction(obj);
      store.dispatch(action);
    }
  }
  addTodo() {
    const len = Math.random() * (100 + 1);
    let value = this.state.input_value;
    if (value !== "") {
      const obj = {
        id: len,
        content: value,
        status: 0,
      };
      this._addTodo(obj);
      this.setState({
        input_value: "",
      });
    }
  }
  onKeyDownchange(e: any) {
    if (e.keyCode === 13) {
      this.addTodo();
    }
  }
  inputChange(e: any) {
    this.setState({
      input_value: e.target.value,
    });
  }
  render() {
    return (
      <div className="todoHeader">
        <input
          className="add_input"
          type="text"
          value={this.state.input_value}
          placeholder="接下来要做什么？"
          onChange={(e) => this.inputChange(e)}
          onKeyDown={(e) => this.onKeyDownchange(e)}
        />
      </div>
    );
  }
}
export default TodoHeader;
