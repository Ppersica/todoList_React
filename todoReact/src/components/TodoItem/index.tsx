import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import store from "../../store/index";
import { getChangeItemAction, getDeleteItemAction } from "../../store/actions";
import { TODO, TODOITEM } from "../../store/stateType";
import { reqChangeTodo, reqDelTodo } from "../../api";

class ListItem extends React.Component<any, TODO> {
  static propTypes = {
    todo: PropTypes.object.isRequired,
  };
  componentDidMount() {
    store.subscribe(this._handleStoreChange);
  }
  _handleStoreChange = () => {
    this.setState(store.getState());
  };
  async finishItem(item: TODOITEM) {
    let result;
    const obj = {
      id: item.id,
      status: item.status,
    };
    result = await reqChangeTodo(obj);
    console.log(result);
    if (result) {
      const action = getChangeItemAction(item.id);
      store.dispatch(action);
    }
  }
  async deleteItem(item: TODOITEM) {
    let result;
    const obj = {
      id: item.id,
    };
    result = await reqDelTodo(obj);
    if (result) {
      const action = getDeleteItemAction(item.id);
      store.dispatch(action);
    }
  }
  render() {
    const item = this.props.item;
    const unfinish = {
      backgroundColor: "#B0C4DE",
      color: "darkblue",
    };
    const finish = {
      backgroundColor: "#FFF",
      color: "#666",
      textDecoration: "line-through",
    };
    const itemStyle = item.status === 0 ? unfinish : finish;

    return (
      <div className="container">
        <li key={item.id} style={itemStyle}>
          <span
            id={item.id}
            className="check-btn"
            onClick={() => this.finishItem(item)}
            style={{ backgroundColor: item.status === 0 ? "#fff" : "#B0C4DE" }}
          ></span>
          <span>{item.content}</span>
          <span className="delete-btn" onClick={() => this.deleteItem(item)}>
            X
          </span>
        </li>
      </div>
    );
  }
}

export default ListItem;
